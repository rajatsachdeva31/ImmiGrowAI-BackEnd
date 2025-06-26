const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const CareerProfileService = require('../services/CareerProfileService');
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require('../middleware/authMiddleware');

const prisma = new PrismaClient();
const careerService = new CareerProfileService();

// Configure multer for resume uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/resumes/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `resume-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

/**
 * POST /api/career/analyze-resume
 * Analyze resume and generate position recommendations
 */
router.post('/analyze-resume', authMiddleware, upload.single('resume'), async (req, res) => {
  try {
    const userId = req.user.uid;
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({
        success: false,
        error: 'Resume file is required'
      });
    }

    console.log(`📄 Processing resume for user: ${userId}`);

    // Analyze resume
    const resumeAnalysis = await careerService.analyzeResumePDF(file.path, file.originalname);
    
    // Save resume analysis to database
    const savedAnalysis = await prisma.resumeAnalysis.create({
      data: {
        userId: parseInt(userId),
        originalFileName: file.originalname,
        structuredData: resumeAnalysis,
        personalInfo: resumeAnalysis.personalInfo,
        professionalSummary: resumeAnalysis.professionalSummary?.summary,
        skills: resumeAnalysis.skills,
        workExperience: resumeAnalysis.workExperience,
        education: resumeAnalysis.education,
        certifications: resumeAnalysis.certifications,
        projects: resumeAnalysis.projects,
        canadianMarketAnalysis: resumeAnalysis.canadianMarketAnalysis,
        confidenceScores: resumeAnalysis.confidenceScores,
        metadata: resumeAnalysis.metadata,
        processingMethod: 'direct_pdf'
      }
    });

    // Get existing career profile if available
    const existingProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: parseInt(userId) }
    });

    // Generate position recommendations
    const recommendations = await careerService.generatePositionRecommendations(
      resumeAnalysis, 
      existingProfile || {}
    );

    // Save job matches
    if (recommendations.positions && recommendations.positions.length > 0) {
      await careerService.saveJobMatches(parseInt(userId), recommendations.positions);
    }

    res.json({
      success: true,
      data: {
        analysisId: savedAnalysis.id,
        resumeAnalysis,
        positionRecommendations: recommendations,
        rateLimitStatus: careerService.getRateLimitStatus()
      }
    });

  } catch (error) {
    console.error('❌ Resume analysis error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Resume analysis failed'
    });
  }
});

/**
 * POST /api/career/enhanced-profile
 * Generate enhanced profile for a specific position
 */
router.post('/enhanced-profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const { targetPosition, resumeAnalysisId, userPreferences } = req.body;

    if (!targetPosition || !resumeAnalysisId) {
      return res.status(400).json({
        success: false,
        error: 'Target position and resume analysis ID are required'
      });
    }

    console.log(`🚀 Generating enhanced profile for user: ${userId}`);

    // Get resume analysis
    const resumeAnalysis = await prisma.resumeAnalysis.findFirst({
      where: {
        id: resumeAnalysisId,
        userId: parseInt(userId)
      }
    });

    if (!resumeAnalysis) {
      return res.status(404).json({
        success: false,
        error: 'Resume analysis not found'
      });
    }

    // Generate enhanced profile
    const enhancedProfile = await careerService.generateEnhancedProfile(
      resumeAnalysis.structuredData,
      targetPosition,
      userPreferences || {}
    );

    // Generate skill gap analysis
    const skillGapAnalysis = await careerService.generateSkillGapAnalysis(
      resumeAnalysis.structuredData,
      targetPosition
    );

    // Save career profile
    const savedProfile = await careerService.saveCareerProfile(parseInt(userId), {
      ...enhancedProfile,
      targetPosition,
      skillGapAnalysis,
      overallMatchScore: targetPosition.matchScore || 0
    });

    // Save skill gap analysis
    await prisma.skillGapAnalysis.create({
      data: {
        userId: parseInt(userId),
        currentSkills: resumeAnalysis.structuredData?.skills,
        targetSkills: targetPosition.requiredSkills,
        identifiedGaps: skillGapAnalysis.skillGapAnalysis?.gaps,
        learningPath: skillGapAnalysis.developmentRoadmap,
        progressTracking: skillGapAnalysis.learningRecommendations
      }
    });

    res.json({
      success: true,
      data: {
        enhancedProfile,
        skillGapAnalysis,
        careerProfileId: savedProfile.id,
        rateLimitStatus: careerService.getRateLimitStatus()
      }
    });

  } catch (error) {
    console.error('❌ Enhanced profile generation error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Enhanced profile generation failed'
    });
  }
});

/**
 * GET /api/career/position-recommendations/:analysisId
 * Get position recommendations for a resume analysis
 */
router.get('/position-recommendations/:analysisId', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const { analysisId } = req.params;

    // Get resume analysis
    const resumeAnalysis = await prisma.resumeAnalysis.findFirst({
      where: {
        id: parseInt(analysisId),
        userId: parseInt(userId)
      }
    });

    if (!resumeAnalysis) {
      return res.status(404).json({
        success: false,
        error: 'Resume analysis not found'
      });
    }

    // Get existing career profile
    const careerProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: parseInt(userId) }
    });

    // Generate fresh position recommendations
    const recommendations = await careerService.generatePositionRecommendations(
      resumeAnalysis.structuredData,
      careerProfile || {}
    );

    res.json({
      success: true,
      data: {
        recommendations,
        analysisId: resumeAnalysis.id,
        rateLimitStatus: careerService.getRateLimitStatus()
      }
    });

  } catch (error) {
    console.error('❌ Position recommendations error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get position recommendations'
    });
  }
});

/**
 * GET /api/career/job-matches
 * Get saved job matches for the user
 */
router.get('/job-matches', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;

    const jobMatches = await prisma.jobMatch.findMany({
      where: { userId: parseInt(userId) },
      include: {
        jobOpportunity: true
      },
      orderBy: { matchScore: 'desc' }
    });

    res.json({
      success: true,
      data: {
        jobMatches,
        totalMatches: jobMatches.length
      }
    });

  } catch (error) {
    console.error('❌ Job matches retrieval error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to retrieve job matches'
    });
  }
});

/**
 * GET /api/career/profile
 * Get user's career profile
 */
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;

    const careerProfile = await prisma.userCareerProfile.findUnique({
      where: { userId: parseInt(userId) }
    });

    const skillGapAnalyses = await prisma.skillGapAnalysis.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { lastUpdated: 'desc' },
      take: 5
    });

    const resumeAnalyses = await prisma.resumeAnalysis.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: 'desc' },
      take: 10,
      select: {
        id: true,
        originalFileName: true,
        createdAt: true,
        confidenceScores: true,
        canadianMarketAnalysis: true
      }
    });

    res.json({
      success: true,
      data: {
        careerProfile,
        skillGapAnalyses,
        resumeAnalyses
      }
    });

  } catch (error) {
    console.error('❌ Career profile retrieval error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to retrieve career profile'
    });
  }
});

/**
 * PUT /api/career/application-status
 * Update job application status
 */
router.put('/application-status', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const { jobMatchId, status } = req.body;

    if (!jobMatchId || !status) {
      return res.status(400).json({
        success: false,
        error: 'Job match ID and status are required'
      });
    }

    const updatedMatch = await prisma.jobMatch.updateMany({
      where: {
        id: jobMatchId,
        userId: parseInt(userId)
      },
      data: {
        applicationStatus: status
      }
    });

    if (updatedMatch.count === 0) {
      return res.status(404).json({
        success: false,
        error: 'Job match not found'
      });
    }

    res.json({
      success: true,
      message: 'Application status updated successfully'
    });

  } catch (error) {
    console.error('❌ Application status update error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to update application status'
    });
  }
});

/**
 * GET /api/career/skill-gap/:analysisId
 * Get skill gap analysis for a specific target position
 */
router.get('/skill-gap/:analysisId', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.uid;
    const { analysisId } = req.params;
    const { targetPosition } = req.query;

    if (!targetPosition) {
      return res.status(400).json({
        success: false,
        error: 'Target position data is required'
      });
    }

    // Get resume analysis
    const resumeAnalysis = await prisma.resumeAnalysis.findFirst({
      where: {
        id: parseInt(analysisId),
        userId: parseInt(userId)
      }
    });

    if (!resumeAnalysis) {
      return res.status(404).json({
        success: false,
        error: 'Resume analysis not found'
      });
    }

    // Parse target position from query parameter
    const parsedTargetPosition = JSON.parse(decodeURIComponent(targetPosition));

    // Generate skill gap analysis
    const skillGapAnalysis = await careerService.generateSkillGapAnalysis(
      resumeAnalysis.structuredData,
      parsedTargetPosition
    );

    res.json({
      success: true,
      data: {
        skillGapAnalysis,
        targetPosition: parsedTargetPosition,
        rateLimitStatus: careerService.getRateLimitStatus()
      }
    });

  } catch (error) {
    console.error('❌ Skill gap analysis error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Skill gap analysis failed'
    });
  }
});

module.exports = router; 