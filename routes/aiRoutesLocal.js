const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const aiDatabase = require('../services/aiDatabase');
const DocumentProcessor = require('../services/documentProcessor');
const documentProcessor = new DocumentProcessor();
const GeminiResumeService = require('../services/GeminiResumeService');
const { generateCareerProfileWithGemini, generatePositionRecommendationsWithGemini, generateEnhancedProfileWithGemini } = require('../services/googleAiService');
const { geminiRateLimit, uploadRateLimit, checkDailyLimit, incrementDailyCount } = require('../middleware/rateLimiter');

// Initialize Gemini service
const geminiService = new GeminiResumeService();

// Initialize AI database connection
aiDatabase.connect().catch(console.error);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads/resumes');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `resume-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit (increased for better PDF support)
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|docx|jpg|jpeg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOCX, JPG, JPEG, and PNG files are allowed'));
    }
  }
});

// Simple authentication middleware for AI routes
const authenticateUser = async (req, res, next) => {
  console.log('🔐 Starting authenticateUser middleware');
  console.log('🔐 Request headers auth:', req.headers.authorization ? 'Present' : 'Missing');
  
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('❌ No valid auth header found');
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    // For local testing, use a consistent user to avoid unique constraint issues
    const token = authHeader.split(' ')[1];
    console.log('🔐 Token extracted, length:', token.length);
    
    // Use consistent user data for local testing
    const localUser = {
      firebaseUid: 'local-test-user-123',
      email: 'local.test@example.com',
      fullName: 'Local Test User'
    };
    console.log('🔐 Using local user:', localUser);

    // Find or create user in AI database
    console.log('🔐 Calling aiDatabase.findOrCreateUser...');
    const user = await aiDatabase.findOrCreateUser(localUser);
    console.log('🔐 User found/created:', JSON.stringify(user, null, 2));
    req.user = user;
    
    console.log('🔐 Authenticated local user:', user.email, '(ID:', user.id + ')');
    console.log('🔐 Authentication successful, calling next()');
    next();
  } catch (error) {
    console.error('❌ Authentication error - FULL:', error);
    console.error('❌ Authentication error stack:', error.stack);
    res.status(401).json({ 
      success: false, 
      message: 'Authentication failed: ' + error.message 
    });
  }
};

// Check if user is immigrant (simplified for AI features)
const checkImmigrantRole = async (req, res, next) => {
  console.log('👤 Starting checkImmigrantRole middleware');
  console.log('👤 User object:', JSON.stringify(req.user, null, 2));
  console.log('👤 User roleId:', req.user?.roleId);
  
  try {
    if (req.user && req.user.roleId === 4) {
      console.log('✅ User has immigrant role (4), proceeding');
      next();
    } else {
      console.log('❌ User does not have immigrant role. Current roleId:', req.user?.roleId);
      return res.status(403).json({
        success: false,
        message: 'This feature is only available to immigrants'
      });
    }
  } catch (error) {
    console.error('❌ Role check error - FULL:', error);
    console.error('❌ Role check error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Internal server error during role verification'
    });
  }
};

// Resume upload and analysis route with Gemini Developer API
router.post('/resume/upload', 
  uploadRateLimit, 
  authenticateUser, 
  checkImmigrantRole, 
  checkDailyLimit,
  geminiRateLimit,
  upload.single('resume'), 
  async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    console.log('📄 Processing resume upload for user:', req.user.id);
    console.log('📁 File details:', {
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype
    });

    let analysis;
    const isPDF = req.file.originalname.toLowerCase().endsWith('.pdf');

    if (isPDF) {
      // Use direct PDF processing with Gemini (NEW FEATURE)
      console.log('🚀 Using direct PDF processing with Gemini Developer API...');
      analysis = await geminiService.analyzeResumePDF(req.file.path, req.file.originalname);
    } else {
      // Fallback to text extraction for non-PDF files
      console.log('📄 Processing non-PDF file with text extraction...');
      const documentData = await documentProcessor.processDocument(req.file.path, req.file.originalname);
      const extractedText = documentData.extractedText;
      
      if (!extractedText || extractedText.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Could not extract text from the uploaded file'
        });
      }

      console.log('✅ Text extracted successfully, length:', extractedText.length);
      analysis = await geminiService.analyzeResumeText(extractedText, req.file.originalname);
    }
    
    console.log('🤖 Enhanced AI analysis completed with Canadian market insights');

    // Save enhanced analysis to AI database
    const resumeAnalysis = await aiDatabase.saveResumeAnalysis(req.user.id, {
      personalInfo: analysis.personalInfo,
      professionalSummary: analysis.professionalSummary,
      skills: analysis.skills,
      workExperience: analysis.workExperience,
      education: analysis.education,
      certifications: analysis.certifications,
      projects: analysis.projects,
      canadianMarketAnalysis: analysis.canadianMarketAnalysis,
      confidenceScores: analysis.confidenceScores,
      metadata: analysis.metadata,
      rawText: isPDF ? 'PDF processed directly' : analysis.rawText, // Will be mapped to extractedText in aiDatabase
      originalFileName: req.file.originalname,
      processingMethod: isPDF ? 'direct_pdf' : 'text_extraction'
    });

    console.log('💾 Enhanced analysis saved to database with ID:', resumeAnalysis.id);

    // Increment daily API usage count
    incrementDailyCount(req, res, () => {});

    // Clean up uploaded file
    fs.unlinkSync(req.file.path);

    // Get rate limit status
    const rateLimitStatus = geminiService.getRateLimitStatus();

    res.json({
      success: true,
      message: `Resume analyzed successfully using ${isPDF ? 'direct PDF processing' : 'text extraction'}`,
      data: {
        analysisId: resumeAnalysis.id,
        analysis: {
          personalInfo: analysis.personalInfo,
          professionalSummary: analysis.professionalSummary,
          skills: analysis.skills,
          workExperience: analysis.workExperience,
          education: analysis.education,
          certifications: analysis.certifications,
          projects: analysis.projects,
          canadianMarketAnalysis: analysis.canadianMarketAnalysis,
          confidenceScores: analysis.confidenceScores,
          metadata: analysis.metadata
        },
        rateLimitStatus: rateLimitStatus,
        processingMethod: isPDF ? 'direct_pdf' : 'text_extraction'
      }
    });

  } catch (error) {
    console.error('❌ Resume analysis error:', error);
    
    // Clean up uploaded file in case of error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to analyze resume',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      rateLimitStatus: geminiService.getRateLimitStatus()
    });
  }
});

// Career profile generation route
router.post('/career-profile/generate', authenticateUser, checkImmigrantRole, async (req, res) => {
  try {
    const { resumeAnalysisId } = req.body;

    // Get user's latest resume analysis if no specific ID provided
    let resumeData;
    if (resumeAnalysisId) {
      const analyses = await aiDatabase.getUserResumeAnalyses(req.user.id);
      resumeData = analyses.find(a => a.id === resumeAnalysisId);
    } else {
      const analyses = await aiDatabase.getUserResumeAnalyses(req.user.id);
      resumeData = analyses[0]; // Get the most recent one
    }

    if (!resumeData) {
      return res.status(400).json({
        success: false,
        message: 'No resume analysis found. Please upload a resume first.'
      });
    }

    console.log('🎯 Generating career profile for user:', req.user.id);

    // Parse the stored JSON data
    const parsedPersonalInfo = JSON.parse(resumeData.personalInfo || '{}');
    const parsedSkills = JSON.parse(resumeData.skills || '[]');
    const parsedWorkExperience = JSON.parse(resumeData.workExperience || '[]');
    const parsedEducation = JSON.parse(resumeData.education || '[]');

    // Generate career profile with Google AI
    const careerProfile = await generateCareerProfileWithGemini({
      personalInfo: parsedPersonalInfo,
      skills: parsedSkills,
      workExperience: parsedWorkExperience,
      education: parsedEducation
    });

    console.log('🤖 Career profile generated successfully');

    // Save career profile to AI database
    const savedProfile = await aiDatabase.saveCareerProfile(req.user.id, careerProfile);

    console.log('💾 Career profile saved to database');

    res.json({
      success: true,
      message: 'Career profile generated successfully',
      data: {
        profileId: savedProfile.id,
        profile: careerProfile
      }
    });

  } catch (error) {
    console.error('❌ Career profile generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate career profile',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// NEW: Position recommendations route
router.post('/career-profile/position-recommendations', authenticateUser, checkImmigrantRole, async (req, res) => {
  try {
    const { resumeAnalysis } = req.body;

    if (!resumeAnalysis) {
      return res.status(400).json({
        success: false,
        message: 'Resume analysis data is required'
      });
    }

    console.log('🎯 Generating position recommendations for user:', req.user.id);

    // Generate position recommendations using Gemini AI
    const positionRecommendations = await generatePositionRecommendationsWithGemini(resumeAnalysis);

    console.log('🤖 Position recommendations generated successfully');

    res.json({
      success: true,
      message: 'Position recommendations generated successfully',
      data: {
        positions: positionRecommendations,
        analysisId: resumeAnalysis.analysisId || Date.now().toString()
      }
    });

  } catch (error) {
    console.error('❌ Position recommendations error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate position recommendations',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// NEW: Enhanced profile generation route - Simplified and More Reliable
router.post('/career-profile/enhanced-profile', authenticateUser, checkImmigrantRole, async (req, res) => {
  console.log('🚀 Starting enhanced-profile route');
  console.log('📊 Request method:', req.method);
  console.log('📊 Request URL:', req.url);
  console.log('📊 Request headers:', JSON.stringify(req.headers, null, 2));
  console.log('📊 Request body keys:', Object.keys(req.body || {}));
  console.log('📊 Full request body:', JSON.stringify(req.body, null, 2));
  
  try {
    console.log('✅ Inside try block');
    
    const { targetPosition, resumeAnalysis } = req.body;
    console.log('📋 Extracted targetPosition:', JSON.stringify(targetPosition, null, 2));
    console.log('📋 Extracted resumeAnalysis keys:', Object.keys(resumeAnalysis || {}));

    if (!targetPosition || !resumeAnalysis) {
      console.log('❌ Missing required fields - targetPosition:', !!targetPosition, 'resumeAnalysis:', !!resumeAnalysis);
      return res.status(400).json({
        success: false,
        message: 'Target position and resume analysis are required'
      });
    }

    console.log('🎯 Generating enhanced profile for user:', req.user?.id);
    console.log('🎯 User object:', JSON.stringify(req.user, null, 2));
    console.log('🎯 Target position:', JSON.stringify(targetPosition, null, 2));

    // Safe JSON parsing helper function
    const safeJsonParse = (jsonString, fallback = []) => {
      try {
        if (typeof jsonString === 'string') {
          const parsed = JSON.parse(jsonString);
          return Array.isArray(parsed) ? parsed : fallback;
        }
        return Array.isArray(jsonString) ? jsonString : fallback;
      } catch (error) {
        console.warn('🔶 JSON parsing failed:', error.message, 'for:', jsonString?.substring(0, 100));
        return fallback;
      }
    };

    // Parse JSON fields that might be stored as strings
    const workExperience = safeJsonParse(resumeAnalysis.workExperience, []);
    const projects = safeJsonParse(resumeAnalysis.projects, []);
    const skills = typeof resumeAnalysis.skills === 'string' ? JSON.parse(resumeAnalysis.skills || '{}') : (resumeAnalysis.skills || {});
    const education = safeJsonParse(resumeAnalysis.education, []);

    console.log('📊 Parsed data structures:');
    console.log('  - workExperience array length:', workExperience.length);
    console.log('  - projects array length:', projects.length);
    console.log('  - skills type:', typeof skills, 'keys:', Object.keys(skills));
    console.log('  - education array length:', education.length);

    // Create a simplified enhanced profile using the available data
    const enhancedProfile = {
      optimized_profile: {
        professional_title: `${targetPosition.title || 'Professional'} - Canadian Market Ready`,
        elevator_pitch: `Experienced ${targetPosition.title || 'professional'} with proven skills in ${resumeAnalysis.canadianMarketAnalysis?.strengthsForCanadianMarket?.slice(0, 3).join(', ') || 'key technologies'}, seeking opportunities in the Canadian market.`,
        value_proposition: `Brings international experience and ${targetPosition.industry || 'industry'} expertise to Canadian organizations.`,
        key_achievements: workExperience?.slice(0, 3).map(exp => 
          `${exp.achievements?.[0] || `Successful experience at ${exp.company}`}`) || []
      },
      skills_positioning: {
        primary_skills: skills?.technical?.slice(0, 5).map(skill => ({
          skill: skill,
          relevance_to_role: `Essential for ${targetPosition.title || 'this role'}`,
          evidence: "Demonstrated through work experience",
          positioning_statement: `Strong proficiency in ${skill}`
        })) || [],
        skill_development_plan: resumeAnalysis.canadianMarketAnalysis?.recommendedImprovements?.slice(0, 3).map(improvement => ({
          skill: improvement,
          importance: "High",
          learning_path: "Online courses and practical application",
          timeline: "3-6 months",
          resources: ["Online platforms", "Professional development courses"]
        })) || []
      },
      experience_repositioning: {
        relevant_experience: workExperience?.slice(0, 2).map(exp => ({
          original_role: exp.position || 'Previous Role',
          repositioned_as: `${exp.position || 'Professional'} with Canadian Market Focus`,
          key_transferable_elements: exp.responsibilities?.slice(0, 3) || [],
          success_metrics: exp.achievements || [],
          canadian_context: "Experience adapted for Canadian workplace standards"
        })) || [],
        project_highlights: projects?.slice(0, 2).map(project => ({
          project: project.name || 'Professional Project',
          relevance: `Directly applicable to ${targetPosition.title || 'target role'}`,
          technologies_used: project.technologies || [],
          impact: project.description || 'Significant professional impact',
          presentation_tip: "Emphasize problem-solving and results achieved"
        })) || []
      },
      application_strategy: {
        resume_optimization: {
          key_changes: [
            "Highlight Canadian market-relevant skills",
            "Emphasize transferable experience",
            "Include keywords specific to Canadian job market"
          ],
          keywords_to_include: skills?.technical?.slice(0, 8) || [],
          sections_to_emphasize: ["Professional Experience", "Skills", "Education"],
          formatting_tips: ["Use Canadian resume format", "Include relevant certifications"]
        },
        cover_letter_strategy: {
          opening_approach: `Express enthusiasm for ${targetPosition.title || 'the role'} opportunities in Canada`,
          key_points_to_address: [
            "International experience value",
            "Commitment to Canadian market",
            "Relevant technical skills"
          ],
          company_research_areas: ["Company culture", "Recent projects", "Market position"],
          closing_strategy: "Express eagerness for interview and integration"
        },
        networking_approach: {
          target_professionals: [`${targetPosition.title || 'Industry'} professionals in Canada`, "Recent immigrants in similar roles"],
          conversation_starters: ["Industry trends discussion", "Canadian market insights"],
          value_you_bring: ["International perspective", "Technical expertise"],
          follow_up_strategies: ["LinkedIn connections", "Industry event participation"]
        }
      },
      interview_preparation: {
        common_questions: [
          {
            question: `Why are you interested in ${targetPosition.title || 'this position'} in Canada?`,
            strategy: "Connect personal goals with Canadian opportunities",
            key_points: ["Career growth", "Market innovation", "Cultural fit"],
            example_answer_structure: "Personal motivation + Professional goals + Cultural alignment"
          }
        ],
        behavioral_examples: workExperience?.slice(0, 2).map(exp => ({
          situation: `Professional challenge at ${exp.company || 'previous role'}`,
          task: "Problem-solving requirement",
          action: "Strategic approach taken",
          result: "Positive outcome achieved",
          relevance: `Demonstrates skills for ${targetPosition.title || 'target role'}`
        })) || [],
        technical_preparation: {
          skills_to_demonstrate: skills?.technical?.slice(0, 5) || [],
          portfolio_items: ["Relevant project examples", "Technical achievements"],
          coding_challenges: ["Industry-specific problems", "Canadian market scenarios"],
          system_design_topics: ["Scalability", "Best practices", "Industry standards"]
        },
        cultural_fit_preparation: {
          company_culture_research: ["Values alignment", "Team dynamics", "Work environment"],
          canadian_workplace_norms: ["Communication style", "Collaboration approach", "Professional etiquette"],
          questions_to_ask: ["Team structure", "Growth opportunities", "Company vision"]
        }
      },
      "90_day_action_plan": {
        week_1_2: [
          "Research Canadian market trends",
          "Update resume with Canadian format",
          "Identify key networking opportunities"
        ],
        month_1: [
          "Apply to relevant positions",
          "Attend industry networking events",
          "Complete relevant online courses"
        ],
        month_2: [
          "Follow up on applications",
          "Expand professional network",
          "Gain Canadian work experience"
        ],
        month_3: [
          "Evaluate progress and opportunities",
          "Adjust strategy based on feedback",
          "Secure position or continue optimization"
        ],
        success_metrics: [
          "Number of applications submitted",
          "Networking connections made",
          "Interview opportunities secured"
        ]
      }
    };

    console.log('🤖 Enhanced profile generated successfully');
    console.log('📏 Enhanced profile size:', JSON.stringify(enhancedProfile).length, 'characters');

    // Save enhanced profile to AI database
    console.log('💾 Attempting to save enhanced profile to database...');
    console.log('💾 Save parameters - userId:', req.user?.id, 'hasTargetPosition:', !!targetPosition, 'hasEnhancedProfile:', !!enhancedProfile);
    
    try {
      console.log('💾 Before saveEnhancedCareerProfile call');
      const savedProfile = await aiDatabase.saveEnhancedCareerProfile(req.user.id, {
        targetPosition,
        enhancedProfile,
        resumeAnalysisId: resumeAnalysis.analysisId
      });
      console.log('💾 Enhanced profile saved to database successfully:', savedProfile);
    } catch (saveError) {
      console.error('⚠️ Warning: Could not save to database - Full Error:', saveError);
      console.error('⚠️ Error message:', saveError.message);
      console.error('⚠️ Error stack:', saveError.stack);
      // Continue with response even if save fails
    }

    console.log('📤 Preparing response...');
    console.log('📤 Response data size:', JSON.stringify({ enhancedProfile, targetPosition }).length, 'characters');
    
    res.json({
      success: true,
      message: 'Enhanced career profile generated successfully',
      data: {
        enhancedProfile,
        targetPosition
      }
    });
    
    console.log('✅ Response sent successfully');

  } catch (error) {
    console.error('❌ Enhanced profile generation error - FULL ERROR:', error);
    console.error('❌ Error name:', error.name);
    console.error('❌ Error message:', error.message);
    console.error('❌ Error stack:', error.stack);
    console.error('❌ Error properties:', Object.keys(error));
    
    res.status(500).json({
      success: false,
      message: 'Failed to generate enhanced profile',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
    
    console.log('❌ Error response sent');
  }
});

// Get user's resume analyses
router.get('/resume/analyses', authenticateUser, checkImmigrantRole, async (req, res) => {
  try {
    const analyses = await aiDatabase.getUserResumeAnalyses(req.user.id);
    
    // Parse JSON strings back to objects for response
    const formattedAnalyses = analyses.map(analysis => ({
      ...analysis,
      personalInfo: JSON.parse(analysis.personalInfo || '{}'),
      skills: JSON.parse(analysis.skills || '[]'),
      workExperience: JSON.parse(analysis.workExperience || '[]'),
      education: JSON.parse(analysis.education || '[]'),
      canadianMarketAnalysis: JSON.parse(analysis.canadianMarketAnalysis || '{}'),
      confidenceScores: JSON.parse(analysis.confidenceScores || '{}'),
      metadata: JSON.parse(analysis.metadata || '{}')
    }));

    res.json({
      success: true,
      data: formattedAnalyses
    });
  } catch (error) {
    console.error('❌ Error fetching resume analyses:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch resume analyses'
    });
  }
});

// Get user's career profile
router.get('/career-profile', authenticateUser, checkImmigrantRole, async (req, res) => {
  try {
    const profile = await aiDatabase.getUserCareerProfile(req.user.id);
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'No career profile found'
      });
    }

    // Parse JSON strings back to objects for response
    const formattedProfile = {
      ...profile,
      skills: JSON.parse(profile.skills || '[]'),
      targetIndustries: JSON.parse(profile.targetIndustries || '[]')
    };

    res.json({
      success: true,
      data: formattedProfile
    });
  } catch (error) {
    console.error('❌ Error fetching career profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch career profile'
    });
  }
});

// Get API rate limit status
router.get('/rate-limit-status', authenticateUser, (req, res) => {
  try {
    const rateLimitStatus = geminiService.getRateLimitStatus();
    
    res.json({
      success: true,
      data: {
        rateLimits: rateLimitStatus,
        apiInfo: {
          provider: 'Gemini Developer API',
          model: 'gemini-1.5-flash',
          features: [
            'Direct PDF processing',
            '1000 requests/minute',
            '50,000 requests/day',
            'Canadian job market analysis',
            'Enhanced confidence scoring'
          ]
        },
        improvements: {
          rateLimitIncrease: '67x faster (1000 vs 15 req/min)',
          directPdfSupport: true,
          fileSizeLimit: '10MB (vs 5MB)',
          canadianMarketFocus: true
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get rate limit status',
      error: error.message
    });
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'AI Routes (Local) are working!',
    database: 'SQLite Local',
    timestamp: new Date().toISOString(),
    apiProvider: 'Gemini Developer API',
    improvements: '67x faster rate limits, direct PDF processing'
  });
});

module.exports = router; 