const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const { PrismaClient } = require('@prisma/client');

const GoogleAIService = require('../services/googleAiService');
const DocumentProcessor = require('../services/documentProcessor');
const authMiddleware = require('../middleware/authMiddleware');
const aiConfig = require('../services/aiConfig');

const router = express.Router();
const prisma = new PrismaClient();
const aiService = new GoogleAIService();
const docProcessor = new DocumentProcessor();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = aiConfig.fileUpload.uploadDir;
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${req.user.id}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: aiConfig.fileUpload.maxFileSize
  },
  fileFilter: (req, file, cb) => {
    const validation = docProcessor.validateFile(file);
    if (validation.isValid) {
      cb(null, true);
    } else {
      cb(new Error(validation.errors.join(', ')), false);
    }
  }
});

// Apply authentication to all routes
router.use(authMiddleware);

// Middleware to check if user is immigrant
const checkImmigrantRole = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { role: true }
    });

    if (!user || user.role.name !== 'Immigrant') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. AI features are only available for immigrants.'
      });
    }

    req.userProfile = user;
    next();
  } catch (error) {
    console.error('Role check error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

router.use(checkImmigrantRole);

// 1. Resume Analysis Routes
router.post('/resume/upload', upload.single('resume'), async (req, res) => {
  let filePath = null;
  
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No resume file uploaded' });
    }

    filePath = req.file.path;
    
    // Process document
    const processed = await docProcessor.processDocument(filePath, req.file.originalname);
    
    // Analyze with AI
    const analysis = await aiService.analyzeResume(processed.extractedText, {
      userId: req.user.id,
      currentLocation: req.userProfile.currentLocation,
      countryOfOrigin: req.userProfile.countryOfOrigin
    });

    // Save to database
    const resumeAnalysis = await prisma.resumeAnalysis.create({
      data: {
        userId: req.user.id,
        originalFileName: processed.originalFileName,
        extractedText: processed.extractedText,
        structuredData: analysis,
        confidenceScores: analysis.confidenceScores || {}
      }
    });

    // Clean up file
    await docProcessor.cleanupFile(filePath);

    res.json({
      success: true,
      data: {
        analysisId: resumeAnalysis.id,
        analysis: analysis,
        quality: docProcessor.validateExtractedData(analysis)
      }
    });

  } catch (error) {
    console.error('Resume upload error:', error);
    
    if (filePath) {
      await docProcessor.cleanupFile(filePath);
    }

    res.status(500).json({
      success: false,
      message: error.message || 'Failed to process resume'
    });
  }
});

router.get('/resume/history', async (req, res) => {
  try {
    const analyses = await prisma.resumeAnalysis.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    res.json({ success: true, data: analyses });
  } catch (error) {
    console.error('Resume history error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch resume history' });
  }
});

router.put('/resume/:id/corrections', async (req, res) => {
  try {
    const { corrections } = req.body;
    
    const updated = await prisma.resumeAnalysis.update({
      where: { 
        id: parseInt(req.params.id),
        userId: req.user.id 
      },
      data: { userCorrections: corrections }
    });

    res.json({ success: true, data: updated });
  } catch (error) {
    console.error('Resume corrections error:', error);
    res.status(500).json({ success: false, message: 'Failed to save corrections' });
  }
});

// 2. Career Profile Routes
router.post('/career-profile/generate', async (req, res) => {
  try {
    const { resumeAnalysisId, careerObjectives } = req.body;

    // Get resume data
    const resumeAnalysis = await prisma.resumeAnalysis.findFirst({
      where: { 
        id: resumeAnalysisId,
        userId: req.user.id 
      }
    });

    if (!resumeAnalysis) {
      return res.status(404).json({ success: false, message: 'Resume analysis not found' });
    }

    // Generate career profile
    const profile = await aiService.generateCareerProfile(
      resumeAnalysis.structuredData,
      careerObjectives
    );

    // Save or update career profile
    const careerProfile = await prisma.userCareerProfile.upsert({
      where: { userId: req.user.id },
      update: {
        professionalSummary: profile.professionalSummary,
        skillsCategories: profile.skillsCategories,
        careerObjectives: careerObjectives?.objectives || '',
        targetIndustries: profile.canadianMarketInsights?.targetIndustries || [],
        marketAlignmentScore: profile.marketAlignmentScore,
        skillGaps: profile.skillGaps,
        improvementRoadmap: profile.improvementRoadmap,
        lastUpdated: new Date()
      },
      create: {
        userId: req.user.id,
        professionalSummary: profile.professionalSummary,
        skillsCategories: profile.skillsCategories,
        careerObjectives: careerObjectives?.objectives || '',
        targetIndustries: profile.canadianMarketInsights?.targetIndustries || [],
        marketAlignmentScore: profile.marketAlignmentScore,
        skillGaps: profile.skillGaps,
        improvementRoadmap: profile.improvementRoadmap
      }
    });

    res.json({ success: true, data: { profile, careerProfile } });
  } catch (error) {
    console.error('Career profile generation error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate career profile' });
  }
});

router.get('/career-profile', async (req, res) => {
  try {
    const profile = await prisma.userCareerProfile.findUnique({
      where: { userId: req.user.id }
    });

    res.json({ success: true, data: profile });
  } catch (error) {
    console.error('Career profile fetch error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch career profile' });
  }
});

// 3. Mentor Matching Routes
router.post('/mentors/register', async (req, res) => {
  try {
    const mentorData = req.body;

    const mentorProfile = await prisma.mentorProfile.create({
      data: {
        userId: req.user.id,
        industryExpertise: mentorData.industryExpertise,
        yearsOfExperience: mentorData.yearsOfExperience,
        specializations: mentorData.specializations,
        culturalBackground: mentorData.culturalBackground,
        languagesSpoken: mentorData.languagesSpoken,
        mentorshipCapacity: mentorData.mentorshipCapacity || 3,
        availabilityHours: mentorData.availabilityHours,
        communicationStyle: mentorData.communicationStyle,
        successStories: mentorData.successStories
      }
    });

    res.json({ success: true, data: mentorProfile });
  } catch (error) {
    console.error('Mentor registration error:', error);
    res.status(500).json({ success: false, message: 'Failed to register as mentor' });
  }
});

router.get('/mentors/find-matches', async (req, res) => {
  try {
    // Get user's career profile
    const userProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!userProfile) {
      return res.status(404).json({ 
        success: false, 
        message: 'Please create a career profile first' 
      });
    }

    // Get available mentors
    const mentors = await prisma.mentorProfile.findMany({
      where: { isActive: true },
      include: { 
        user: { 
          select: { fullName: true, currentLocation: true } 
        } 
      },
      take: 10
    });

    // Calculate compatibility for each mentor
    const matches = [];
    for (const mentor of mentors) {
      try {
        const compatibility = await aiService.calculateMentorCompatibility(
          userProfile,
          mentor
        );

        if (compatibility.compatibilityScore >= aiConfig.features.mentorMatching.minCompatibilityScore) {
          matches.push({
            mentor: mentor,
            compatibility: compatibility
          });
        }
      } catch (error) {
        console.error(`Error calculating compatibility for mentor ${mentor.id}:`, error);
      }
    }

    // Sort by compatibility score
    matches.sort((a, b) => b.compatibility.compatibilityScore - a.compatibility.compatibilityScore);

    res.json({ 
      success: true, 
      data: matches.slice(0, aiConfig.features.mentorMatching.maxMatches) 
    });

  } catch (error) {
    console.error('Mentor matching error:', error);
    res.status(500).json({ success: false, message: 'Failed to find mentor matches' });
  }
});

router.post('/mentors/:mentorId/request', async (req, res) => {
  try {
    const { message } = req.body;
    const mentorId = parseInt(req.params.mentorId);

    // Create mentorship match request
    const match = await prisma.mentorshipMatch.create({
      data: {
        mentorId: mentorId,
        menteeId: req.user.id,
        compatibilityScore: req.body.compatibilityScore || 0,
        matchReasoning: req.body.matchReasoning || {},
        status: 'pending'
      }
    });

    res.json({ success: true, data: match });
  } catch (error) {
    console.error('Mentor request error:', error);
    res.status(500).json({ success: false, message: 'Failed to send mentor request' });
  }
});

// 4. AI Career Coaching Routes
router.post('/coaching/session', async (req, res) => {
  try {
    const { query, sessionType } = req.body;

    // Get user profile and recent session history
    const userProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: req.user.id }
    });

    const recentSessions = await prisma.coachingSession.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      take: 5
    });

    // Process coaching query
    const response = await aiService.processCoachingQuery(
      query,
      userProfile,
      recentSessions.map(s => s.conversationHistory).filter(Boolean)
    );

    // Save session
    const session = await prisma.coachingSession.create({
      data: {
        userId: req.user.id,
        sessionType: sessionType || 'general',
        conversationHistory: {
          query: query,
          response: response.response,
          timestamp: new Date().toISOString()
        },
        sessionObjectives: response.actionItems || [],
        outcomes: response.sessionSummary ? { summary: response.sessionSummary } : {},
        progressMetrics: response.progressMetrics || {}
      }
    });

    res.json({ success: true, data: { session, response } });

  } catch (error) {
    console.error('Coaching session error:', error);
    res.status(500).json({ success: false, message: 'Failed to process coaching session' });
  }
});

router.get('/coaching/history', async (req, res) => {
  try {
    const sessions = await prisma.coachingSession.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      take: 20
    });

    res.json({ success: true, data: sessions });
  } catch (error) {
    console.error('Coaching history error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch coaching history' });
  }
});

// 5. Job Discovery Routes
router.get('/jobs/discover', async (req, res) => {
  try {
    const { location, industry, keywords } = req.query;

    // Get user profile for personalized matching
    const userProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: req.user.id }
    });

    // Get recent job opportunities from database
    let jobs = await prisma.jobOpportunity.findMany({
      where: {
        isActive: true,
        location: location ? { contains: location, mode: 'insensitive' } : undefined,
        description: keywords ? { contains: keywords, mode: 'insensitive' } : undefined
      },
      orderBy: { discoveredAt: 'desc' },
      take: 50
    });

    // If we have a user profile, calculate match scores
    if (userProfile && jobs.length > 0) {
      const jobsWithMatches = [];
      
      for (const job of jobs) {
        try {
          const analysis = await aiService.analyzeJobCompatibility(
            userProfile,
            `${job.title}\n${job.description}\nRequirements: ${job.requirements.join(', ')}`
          );

          jobsWithMatches.push({
            ...job,
            matchScore: analysis.matchScore,
            compatibility: analysis.compatibility,
            preparation: analysis.preparation
          });
        } catch (error) {
          console.error(`Error analyzing job ${job.id}:`, error);
          jobsWithMatches.push({ ...job, matchScore: 0 });
        }
      }

      // Sort by match score
      jobs = jobsWithMatches.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    }

    res.json({ success: true, data: jobs });

  } catch (error) {
    console.error('Job discovery error:', error);
    res.status(500).json({ success: false, message: 'Failed to discover jobs' });
  }
});

router.post('/jobs/:jobId/analyze', async (req, res) => {
  try {
    const jobId = parseInt(req.params.jobId);
    
    const job = await prisma.jobOpportunity.findUnique({
      where: { id: jobId }
    });

    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    const userProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!userProfile) {
      return res.status(404).json({ 
        success: false, 
        message: 'Please create a career profile first' 
      });
    }

    const analysis = await aiService.analyzeJobCompatibility(
      userProfile,
      `${job.title}\n${job.description}\nRequirements: ${job.requirements.join(', ')}`
    );

    // Save job match
    const jobMatch = await prisma.jobMatch.create({
      data: {
        userId: req.user.id,
        jobId: jobId,
        matchScore: analysis.matchScore,
        matchAnalysis: analysis,
        skillsGaps: analysis.compatibility?.skills?.missing || []
      }
    });

    res.json({ success: true, data: { analysis, jobMatch } });

  } catch (error) {
    console.error('Job analysis error:', error);
    res.status(500).json({ success: false, message: 'Failed to analyze job' });
  }
});

// 6. Skill Gap Analysis Routes
router.post('/skills/analyze-gaps', async (req, res) => {
  try {
    const { targetRole, currentSkills } = req.body;

    const analysis = await aiService.analyzeSkillGaps(
      currentSkills,
      targetRole,
      { location: req.userProfile.currentLocation }
    );

    // Save analysis
    const skillGapAnalysis = await prisma.skillGapAnalysis.create({
      data: {
        userId: req.user.id,
        currentSkills: currentSkills,
        targetSkills: { targetRole },
        identifiedGaps: analysis.analysis.skill_gaps,
        learningPath: analysis.learning_path,
        progressTracking: analysis.progress_tracking
      }
    });

    res.json({ success: true, data: { analysis, skillGapAnalysis } });

  } catch (error) {
    console.error('Skill gap analysis error:', error);
    res.status(500).json({ success: false, message: 'Failed to analyze skill gaps' });
  }
});

router.get('/skills/gap-history', async (req, res) => {
  try {
    const analyses = await prisma.skillGapAnalysis.findMany({
      where: { userId: req.user.id },
      orderBy: { lastUpdated: 'desc' },
      take: 10
    });

    res.json({ success: true, data: analyses });
  } catch (error) {
    console.error('Skill gap history error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch skill gap history' });
  }
});

// 7. Cultural Integration Support Routes
router.post('/cultural/guidance', async (req, res) => {
  try {
    const { targetIndustry, workplaceType } = req.body;

    const userBackground = {
      countryOfOrigin: req.userProfile.countryOfOrigin,
      currentLocation: req.userProfile.currentLocation,
      alreadyInCanada: req.userProfile.alreadyInCanada
    };

    const guidance = await aiService.generateCulturalGuidance(
      userBackground,
      { industry: targetIndustry, workplaceType }
    );

    res.json({ success: true, data: guidance });

  } catch (error) {
    console.error('Cultural guidance error:', error);
    res.status(500).json({ success: false, message: 'Failed to generate cultural guidance' });
  }
});

// Error handling middleware
router.use((error, req, res, next) => {
  console.error('AI Route Error:', error);
  
  if (error instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: `File upload error: ${error.message}`
    });
  }

  res.status(500).json({
    success: false,
    message: error.message || 'Internal server error'
  });
});

module.exports = router; 