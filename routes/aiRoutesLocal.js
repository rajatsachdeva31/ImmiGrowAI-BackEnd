const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const aiDatabase = require('../services/aiDatabase');
const DocumentProcessor = require('../services/documentProcessor');
const documentProcessor = new DocumentProcessor();
const GeminiResumeService = require('../services/GeminiResumeService');
const { generateCareerProfileWithGemini } = require('../services/googleAiService');
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
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        success: false, 
        message: 'No token provided' 
      });
    }

    // For local testing, use a consistent user to avoid unique constraint issues
    const token = authHeader.split(' ')[1];
    
    // Use consistent user data for local testing
    const localUser = {
      firebaseUid: 'local-test-user-123',
      email: 'local.test@example.com',
      fullName: 'Local Test User'
    };

    // Find or create user in AI database
    const user = await aiDatabase.findOrCreateUser(localUser);
    req.user = user;
    
    console.log('🔐 Authenticated local user:', user.email, '(ID:', user.id + ')');
    next();
  } catch (error) {
    console.error('❌ Authentication error:', error);
    res.status(401).json({ 
      success: false, 
      message: 'Authentication failed: ' + error.message 
    });
  }
};

// Check if user is immigrant (simplified for AI features)
const checkImmigrantRole = async (req, res, next) => {
  try {
    if (req.user && req.user.roleId === 4) {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: 'This feature is only available to immigrants'
      });
    }
  } catch (error) {
    console.error('Role check error:', error);
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
      rawText: isPDF ? 'PDF processed directly' : analysis.rawText,
      originalFileName: req.file.originalname,
      fileSize: req.file.size
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
      confidenceScores: JSON.parse(analysis.confidenceScores || '{}')
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