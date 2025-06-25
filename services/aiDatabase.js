const { PrismaClient } = require('../ai-generated');

class AIDatabase {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async connect() {
    try {
      await this.prisma.$connect();
      console.log('✅ AI Database connected successfully');
    } catch (error) {
      console.error('❌ AI Database connection failed:', error);
      throw error;
    }
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }

  // User management for AI features
  async findOrCreateUser(userData) {
    try {
      // Try to find existing user by firebaseUid first
      let user = await this.prisma.user.findUnique({
        where: { firebaseUid: userData.firebaseUid }
      });

      if (user) {
        console.log('✅ Found existing AI user by firebaseUid:', user.email);
        return user;
      }

      // If not found by firebaseUid, try to find by email
      user = await this.prisma.user.findUnique({
        where: { email: userData.email }
      });

      if (user) {
        // User exists with email but different firebaseUid, update it
        user = await this.prisma.user.update({
          where: { email: userData.email },
          data: {
            firebaseUid: userData.firebaseUid,
            fullName: userData.fullName || user.fullName
          }
        });
        console.log('✅ Updated existing AI user with new firebaseUid:', user.email);
        return user;
      }

      // If user doesn't exist at all, create them
      user = await this.prisma.user.create({
        data: {
          email: userData.email,
          firebaseUid: userData.firebaseUid,
          fullName: userData.fullName || 'User',
          roleId: 4 // Default to immigrant role
        }
      });
      console.log('✅ New AI user created:', user.id);
      return user;

    } catch (error) {
      console.error('❌ Error finding/creating AI user:', error);
      
      // If it's a unique constraint error, try to find the existing user
      if (error.code === 'P2002') {
        console.log('🔄 Unique constraint error, attempting to find existing user...');
        try {
          // Try to find by email first
          let existingUser = await this.prisma.user.findUnique({
            where: { email: userData.email }
          });
          
          if (existingUser) {
            console.log('✅ Found existing user after constraint error:', existingUser.email);
            return existingUser;
          }

          // Try to find by firebaseUid
          existingUser = await this.prisma.user.findUnique({
            where: { firebaseUid: userData.firebaseUid }
          });
          
          if (existingUser) {
            console.log('✅ Found existing user by firebaseUid after constraint error:', existingUser.email);
            return existingUser;
          }
        } catch (findError) {
          console.error('❌ Error finding user after constraint error:', findError);
        }
      }
      
      throw error;
    }
  }

  // Resume Analysis methods
  async saveResumeAnalysis(userId, analysisData) {
    return await this.prisma.resumeAnalysis.create({
      data: {
        userId,
        originalFileName: analysisData.originalFileName,
        extractedText: analysisData.rawText || analysisData.extractedText,
        personalInfo: JSON.stringify(analysisData.personalInfo),
        professionalSummary: analysisData.professionalSummary ? JSON.stringify(analysisData.professionalSummary) : null,
        skills: JSON.stringify(analysisData.skills),
        workExperience: JSON.stringify(analysisData.workExperience),
        education: JSON.stringify(analysisData.education),
        certifications: analysisData.certifications ? JSON.stringify(analysisData.certifications) : null,
        projects: analysisData.projects ? JSON.stringify(analysisData.projects) : null,
        canadianMarketAnalysis: JSON.stringify(analysisData.canadianMarketAnalysis),
        confidenceScores: JSON.stringify(analysisData.confidenceScores),
        metadata: JSON.stringify(analysisData.metadata),
        processingMethod: analysisData.processingMethod || 'direct_pdf'
      }
    });
  }

  async getUserResumeAnalyses(userId) {
    return await this.prisma.resumeAnalysis.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  // Career Profile methods
  async saveCareerProfile(userId, profileData) {
    return await this.prisma.userCareerProfile.upsert({
      where: { userId },
      update: {
        professionalSummary: profileData.professionalSummary,
        skills: JSON.stringify(profileData.skills),
        targetIndustries: JSON.stringify(profileData.targetIndustries),
        careerObjectives: profileData.careerObjectives,
        marketAlignmentScore: profileData.marketAlignmentScore,
        lastUpdated: new Date()
      },
      create: {
        userId,
        professionalSummary: profileData.professionalSummary,
        skills: JSON.stringify(profileData.skills),
        targetIndustries: JSON.stringify(profileData.targetIndustries),
        careerObjectives: profileData.careerObjectives,
        marketAlignmentScore: profileData.marketAlignmentScore
      }
    });
  }

  async getUserCareerProfile(userId) {
    return await this.prisma.userCareerProfile.findUnique({
      where: { userId }
    });
  }

  // Coaching Session methods
  async createCoachingSession(userId, sessionData) {
    return await this.prisma.coachingSession.create({
      data: {
        userId,
        sessionType: sessionData.sessionType,
        conversationLog: JSON.stringify(sessionData.conversationLog || []),
        actionItems: JSON.stringify(sessionData.actionItems || []),
        goals: JSON.stringify(sessionData.goals || []),
        progress: JSON.stringify(sessionData.progress || {})
      }
    });
  }

  async updateCoachingSession(sessionId, updateData) {
    return await this.prisma.coachingSession.update({
      where: { id: sessionId },
      data: {
        conversationLog: updateData.conversationLog ? JSON.stringify(updateData.conversationLog) : undefined,
        actionItems: updateData.actionItems ? JSON.stringify(updateData.actionItems) : undefined,
        goals: updateData.goals ? JSON.stringify(updateData.goals) : undefined,
        progress: updateData.progress ? JSON.stringify(updateData.progress) : undefined,
        status: updateData.status,
        updatedAt: new Date()
      }
    });
  }

  async getUserCoachingSessions(userId) {
    return await this.prisma.coachingSession.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  // Job Match methods
  async saveJobOpportunity(jobData) {
    return await this.prisma.jobOpportunity.create({
      data: {
        title: jobData.title,
        company: jobData.company,
        location: jobData.location,
        description: jobData.description,
        requirements: JSON.stringify(jobData.requirements),
        salary: jobData.salary,
        jobType: jobData.jobType,
        industry: jobData.industry,
        sourceUrl: jobData.sourceUrl,
        postedDate: jobData.postedDate
      }
    });
  }

  async createJobMatch(userId, jobOpportunityId, matchData) {
    return await this.prisma.jobMatch.create({
      data: {
        userId,
        jobOpportunityId,
        relevanceScore: matchData.relevanceScore,
        matchReason: matchData.matchReason
      }
    });
  }

  async getUserJobMatches(userId) {
    return await this.prisma.jobMatch.findMany({
      where: { userId },
      include: { jobOpportunity: true },
      orderBy: { relevanceScore: 'desc' }
    });
  }

  // Skill Gap Analysis methods
  async saveSkillGapAnalysis(userId, analysisData) {
    return await this.prisma.skillGapAnalysis.create({
      data: {
        userId,
        targetRole: analysisData.targetRole,
        currentSkills: JSON.stringify(analysisData.currentSkills),
        requiredSkills: JSON.stringify(analysisData.requiredSkills),
        skillGaps: JSON.stringify(analysisData.skillGaps),
        improvementRoadmap: JSON.stringify(analysisData.improvementRoadmap),
        progressTracking: JSON.stringify(analysisData.progressTracking),
        industryBenchmark: JSON.stringify(analysisData.industryBenchmark)
      }
    });
  }

  async getUserSkillGapAnalyses(userId) {
    return await this.prisma.skillGapAnalysis.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  // Mentor Profile methods
  async createMentorProfile(userId, profileData) {
    return await this.prisma.mentorProfile.create({
      data: {
        userId,
        industry: profileData.industry,
        expertise: JSON.stringify(profileData.expertise),
        yearsOfExperience: profileData.yearsOfExperience,
        availableHours: JSON.stringify(profileData.availableHours),
        bio: profileData.bio,
        linkedInProfile: profileData.linkedInProfile,
        languages: JSON.stringify(profileData.languages),
        culturalBackground: profileData.culturalBackground
      }
    });
  }

  async findMentors(criteria = {}) {
    return await this.prisma.mentorProfile.findMany({
      where: criteria,
      include: { user: true }
    });
  }

  async createMentorshipMatch(menteeId, mentorId, matchData) {
    return await this.prisma.mentorshipMatch.create({
      data: {
        menteeId,
        mentorId,
        compatibilityScore: matchData.compatibilityScore,
        matchReason: matchData.matchReason,
        status: 'pending'
      }
    });
  }
}

// Create singleton instance
const aiDatabase = new AIDatabase();

module.exports = aiDatabase; 