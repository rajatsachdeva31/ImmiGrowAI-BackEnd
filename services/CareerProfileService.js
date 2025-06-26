const { GoogleGenerativeAI } = require('@google/generative-ai');
const GeminiResumeService = require('./GeminiResumeService');
const { PrismaClient } = require('@prisma/client');

class CareerProfileService extends GeminiResumeService {
  constructor() {
    super();
    this.prisma = new PrismaClient();
    
    // Use Gemini 1.5 Pro for complex career analysis
    this.proModel = this.genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 0.2, // Slightly higher for creative recommendations
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      }
    });
  }

  /**
   * Generate position recommendations based on resume analysis
   * @param {Object} resumeAnalysis - Analyzed resume data
   * @param {Object} userProfile - User's career profile data
   * @returns {Array} Array of position recommendations with success probabilities
   */
  async generatePositionRecommendations(resumeAnalysis, userProfile = {}) {
    this.checkRateLimit();
    
    try {
      console.log('🎯 Generating position recommendations...');
      
      const prompt = this.createPositionRecommendationPrompt(resumeAnalysis, userProfile);
      
      const result = await this.proModel.generateContent(prompt);
      const response = await result.response;
      const recommendationsText = response.text();
      
      this.incrementRequestCount();
      
      // Parse JSON response
      let recommendations;
      try {
        recommendations = JSON.parse(recommendationsText);
      } catch (parseError) {
        const jsonMatch = recommendationsText.match(/```json\n([\s\S]*?)\n```/) || 
                         recommendationsText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          recommendations = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          throw new Error('Failed to parse AI response as JSON');
        }
      }
      
      // Validate and sort recommendations by success probability
      recommendations = this.validateRecommendations(recommendations);
      
      console.log(`✅ Generated ${recommendations.positions.length} position recommendations`);
      return recommendations;
      
    } catch (error) {
      console.error('❌ Position recommendation error:', error);
      throw new Error(`Position recommendation failed: ${error.message}`);
    }
  }

  /**
   * Generate enhanced profile for a specific position
   * @param {Object} resumeAnalysis - Analyzed resume data
   * @param {Object} targetPosition - Selected position details
   * @param {Object} userPreferences - User's career preferences
   * @returns {Object} Enhanced career profile for the position
   */
  async generateEnhancedProfile(resumeAnalysis, targetPosition, userPreferences = {}) {
    this.checkRateLimit();
    
    try {
      console.log(`🚀 Generating enhanced profile for: ${targetPosition.title}`);
      
      const prompt = this.createEnhancedProfilePrompt(resumeAnalysis, targetPosition, userPreferences);
      
      const result = await this.proModel.generateContent(prompt);
      const response = await result.response;
      const profileText = response.text();
      
      this.incrementRequestCount();
      
      // Parse JSON response
      let enhancedProfile;
      try {
        enhancedProfile = JSON.parse(profileText);
      } catch (parseError) {
        const jsonMatch = profileText.match(/```json\n([\s\S]*?)\n```/) || 
                         profileText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          enhancedProfile = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          throw new Error('Failed to parse AI response as JSON');
        }
      }
      
      // Validate and enhance the profile
      enhancedProfile = this.validateEnhancedProfile(enhancedProfile, targetPosition);
      
      console.log('✅ Enhanced profile generated successfully');
      return enhancedProfile;
      
    } catch (error) {
      console.error('❌ Enhanced profile generation error:', error);
      throw new Error(`Enhanced profile generation failed: ${error.message}`);
    }
  }

  /**
   * Generate detailed skill gap analysis for a target position
   * @param {Object} resumeAnalysis - Analyzed resume data
   * @param {Object} targetPosition - Target position requirements
   * @returns {Object} Detailed skill gap analysis
   */
  async generateSkillGapAnalysis(resumeAnalysis, targetPosition) {
    this.checkRateLimit();
    
    try {
      console.log(`📊 Analyzing skill gaps for: ${targetPosition.title}`);
      
      const prompt = this.createSkillGapAnalysisPrompt(resumeAnalysis, targetPosition);
      
      const result = await this.proModel.generateContent(prompt);
      const response = await result.response;
      const analysisText = response.text();
      
      this.incrementRequestCount();
      
      // Parse JSON response
      let skillGapAnalysis;
      try {
        skillGapAnalysis = JSON.parse(analysisText);
      } catch (parseError) {
        const jsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/) || 
                         analysisText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          skillGapAnalysis = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          throw new Error('Failed to parse AI response as JSON');
        }
      }
      
      console.log('✅ Skill gap analysis completed');
      return skillGapAnalysis;
      
    } catch (error) {
      console.error('❌ Skill gap analysis error:', error);
      throw new Error(`Skill gap analysis failed: ${error.message}`);
    }
  }

  // Create prompt for position recommendations
  createPositionRecommendationPrompt(resumeAnalysis, userProfile) {
    return `
Analyze this resume and generate position recommendations with success probabilities for the Canadian job market.

Resume Analysis:
${JSON.stringify(resumeAnalysis, null, 2)}

User Career Profile:
${JSON.stringify(userProfile, null, 2)}

Generate 5-8 position recommendations in this exact JSON structure:
{
  "marketAnalysis": {
    "overallMarketHealth": "Strong/Moderate/Weak",
    "keyTrends": [],
    "newcomerOpportunities": [],
    "regionalConsiderations": []
  },
  "positions": [
    {
      "title": "",
      "industry": "",
      "level": "Entry/Junior/Mid/Senior/Executive",
      "successProbability": 0.85,
      "matchScore": 0.92,
      "salaryRange": {
        "min": 50000,
        "max": 70000,
        "currency": "CAD"
      },
      "requiredSkills": [],
      "preferredSkills": [],
      "skillsMatch": {
        "matching": [],
        "missing": [],
        "transferable": []
      },
      "canadianRelevance": {
        "workExperienceValue": "High/Medium/Low",
        "educationRecognition": "Fully/Partially/Not Recognized",
        "certificationNeeds": [],
        "languageRequirements": "English/French/Bilingual"
      },
      "careerGrowth": {
        "nextLevelPositions": [],
        "typicalProgression": "",
        "timeToAdvancement": ""
      },
      "applicationStrategy": {
        "keyFocusAreas": [],
        "resumeOptimizations": [],
        "networkingTips": [],
        "interviewPreparation": []
      },
      "newcomerConsiderations": {
        "culturalAdaptation": [],
        "professionalNetworking": [],
        "credentialRecognition": []
      }
    }
  ],
  "overallRecommendations": {
    "topPriorities": [],
    "skillDevelopmentFocus": [],
    "networkingStrategy": [],
    "timelineRecommendations": ""
  }
}

Guidelines:
- Success probability: 0.0-1.0 based on skill match, experience, and market demand
- Match score: How well the candidate fits the role requirements
- Focus on Canadian job market specifics and newcomer-friendly opportunities
- Consider both immediate opportunities and career growth potential
- Include practical application strategies for each position
- Sort positions by success probability (highest first)

Return only valid JSON.
    `;
  }

  // Create prompt for enhanced profile generation
  createEnhancedProfilePrompt(resumeAnalysis, targetPosition, userPreferences) {
    return `
Generate an enhanced career profile tailored for this specific position in the Canadian job market.

Resume Analysis:
${JSON.stringify(resumeAnalysis, null, 2)}

Target Position:
${JSON.stringify(targetPosition, null, 2)}

User Preferences:
${JSON.stringify(userPreferences, null, 2)}

Generate enhanced profile in this exact JSON structure:
{
  "enhancedProfile": {
    "optimizedSummary": "",
    "keyStrengths": [],
    "skillsPresentation": {
      "technical": {
        "core": [],
        "supporting": [],
        "emerging": []
      },
      "soft": {
        "leadership": [],
        "communication": [],
        "problemSolving": []
      },
      "adaptability": []
    },
    "experienceRepositioning": [
      {
        "originalRole": "",
        "enhancedPresentation": "",
        "keyAchievements": [],
        "quantifiedImpacts": [],
        "canadianContextualization": ""
      }
    ],
    "educationHighlights": {
      "relevantCourses": [],
      "canadianEquivalency": "",
      "additionalValue": []
    }
  },
  "applicationStrategy": {
    "coverLetterTemplate": "",
    "resumeOptimizations": {
      "structuralChanges": [],
      "contentEnhancements": [],
      "keywordOptimization": []
    },
    "interviewPreparation": {
      "expectedQuestions": [],
      "strengthBasedAnswers": [],
      "canadianWorkplaceTips": []
    },
    "portfolioRecommendations": []
  },
  "skillDevelopment": {
    "immediateActions": [
      {
        "skill": "",
        "priority": "High/Medium/Low",
        "learningPath": "",
        "timeEstimate": "",
        "resources": []
      }
    ],
    "mediumTermGoals": [],
    "certificationRoadmap": []
  },
  "networkingStrategy": {
    "targetProfessionals": [],
    "industryEvents": [],
    "onlinePlatforms": [],
    "informationalInterviews": []
  },
  "newcomerSupport": {
    "culturalAdaptation": [],
    "professionalEtiquette": [],
    "canadianWorkplaceNorms": [],
    "settlingInCanada": []
  },
  "careerProjection": {
    "shortTerm": {
      "timeline": "3-6 months",
      "milestones": [],
      "successMetrics": []
    },
    "mediumTerm": {
      "timeline": "1-2 years",
      "careerProgression": [],
      "skillAdvancement": []
    },
    "longTerm": {
      "timeline": "3-5 years",
      "leadershipPotential": [],
      "industryExpertise": []
    }
  }
}

Guidelines:
- Focus on Canadian job market requirements and cultural fit
- Provide specific, actionable recommendations
- Consider newcomer challenges and opportunities
- Include quantifiable goals and timelines
- Emphasize transferable skills and international experience value

Return only valid JSON.
    `;
  }

  // Create prompt for skill gap analysis
  createSkillGapAnalysisPrompt(resumeAnalysis, targetPosition) {
    return `
Perform detailed skill gap analysis comparing current capabilities with target position requirements.

Current Resume Analysis:
${JSON.stringify(resumeAnalysis, null, 2)}

Target Position:
${JSON.stringify(targetPosition, null, 2)}

Generate skill gap analysis in this exact JSON structure:
{
  "skillGapAnalysis": {
    "overallGapScore": 0.25,
    "readinessLevel": "Ready/Nearly Ready/Needs Development/Significant Gap",
    "strengths": [
      {
        "skill": "",
        "proficiencyLevel": "Expert/Advanced/Intermediate/Basic",
        "marketValue": "High/Medium/Low",
        "evidence": []
      }
    ],
    "gaps": [
      {
        "skill": "",
        "currentLevel": "None/Basic/Intermediate",
        "requiredLevel": "Basic/Intermediate/Advanced/Expert",
        "priority": "Critical/High/Medium/Low",
        "impact": "",
        "learningPath": {
          "timeEstimate": "",
          "difficulty": "Easy/Moderate/Challenging",
          "resources": [],
          "prerequisites": []
        }
      }
    ],
    "transferableSkills": [
      {
        "currentSkill": "",
        "applicableAs": "",
        "adaptationNeeded": "",
        "strengthenedBy": []
      }
    ]
  },
  "developmentRoadmap": {
    "phase1": {
      "duration": "1-3 months",
      "focus": "Critical Skills",
      "skills": [],
      "milestones": []
    },
    "phase2": {
      "duration": "3-6 months",
      "focus": "Enhancement",
      "skills": [],
      "milestones": []
    },
    "phase3": {
      "duration": "6+ months",
      "focus": "Mastery & Specialization",
      "skills": [],
      "milestones": []
    }
  },
  "learningRecommendations": {
    "formalEducation": [],
    "onlineCourses": [],
    "certifications": [],
    "practicalExperience": [],
    "mentorship": []
  },
  "competitiveAdvantage": {
    "uniqueStrengths": [],
    "differentiators": [],
    "marketPositioning": ""
  }
}

Guidelines:
- Gap score: 0.0 (perfect fit) to 1.0 (major gaps)
- Focus on Canadian market standards and expectations
- Include both technical and soft skill gaps
- Provide realistic timelines and learning paths
- Consider newcomer context and international experience

Return only valid JSON.
    `;
  }

  // Validate position recommendations
  validateRecommendations(recommendations) {
    // Ensure required structure
    if (!recommendations.positions || !Array.isArray(recommendations.positions)) {
      recommendations.positions = [];
    }
    
    // Sort by success probability (highest first)
    recommendations.positions.sort((a, b) => (b.successProbability || 0) - (a.successProbability || 0));
    
    // Validate each position
    recommendations.positions = recommendations.positions.map(position => ({
      title: position.title || 'Unknown Position',
      industry: position.industry || 'Various',
      level: position.level || 'Mid',
      successProbability: Math.min(1.0, Math.max(0.0, position.successProbability || 0)),
      matchScore: Math.min(1.0, Math.max(0.0, position.matchScore || 0)),
      salaryRange: position.salaryRange || { min: 40000, max: 60000, currency: 'CAD' },
      ...position
    }));
    
    return recommendations;
  }

  // Validate enhanced profile
  validateEnhancedProfile(profile, targetPosition) {
    // Ensure required structure exists
    const defaults = {
      enhancedProfile: {
        optimizedSummary: '',
        keyStrengths: [],
        skillsPresentation: { technical: {}, soft: {} },
        experienceRepositioning: []
      },
      applicationStrategy: {
        coverLetterTemplate: '',
        resumeOptimizations: {},
        interviewPreparation: {}
      },
      skillDevelopment: {
        immediateActions: [],
        mediumTermGoals: [],
        certificationRoadmap: []
      }
    };
    
    // Deep merge with defaults
    profile = { ...defaults, ...profile };
    
    // Add metadata
    profile.metadata = {
      targetPosition: targetPosition.title,
      generatedAt: new Date().toISOString(),
      apiVersion: 'gemini-1.5-pro'
    };
    
    return profile;
  }

  // Save career profile to database
  async saveCareerProfile(userId, profileData) {
    try {
      const existingProfile = await this.prisma.userCareerProfile.findUnique({
        where: { userId }
      });
      
      if (existingProfile) {
        return await this.prisma.userCareerProfile.update({
          where: { userId },
          data: {
            professionalSummary: profileData.enhancedProfile?.optimizedSummary,
            skillsCategories: profileData.enhancedProfile?.skillsPresentation,
            careerObjectives: profileData.applicationStrategy?.coverLetterTemplate,
            targetIndustries: profileData.targetIndustries || [],
            marketAlignmentScore: Math.round((profileData.overallMatchScore || 0) * 100),
            skillGaps: profileData.skillDevelopment,
            improvementRoadmap: profileData.careerProjection,
            lastUpdated: new Date()
          }
        });
      } else {
        return await this.prisma.userCareerProfile.create({
          data: {
            userId,
            professionalSummary: profileData.enhancedProfile?.optimizedSummary,
            skillsCategories: profileData.enhancedProfile?.skillsPresentation,
            careerObjectives: profileData.applicationStrategy?.coverLetterTemplate,
            targetIndustries: profileData.targetIndustries || [],
            marketAlignmentScore: Math.round((profileData.overallMatchScore || 0) * 100),
            skillGaps: profileData.skillDevelopment,
            improvementRoadmap: profileData.careerProjection
          }
        });
      }
    } catch (error) {
      console.error('❌ Error saving career profile:', error);
      throw new Error(`Failed to save career profile: ${error.message}`);
    }
  }

  // Save job matches to database
  async saveJobMatches(userId, jobMatches) {
    try {
      const savedMatches = [];
      
      for (const match of jobMatches) {
        // Create or find job opportunity
        let jobOpportunity = await this.prisma.jobOpportunity.findFirst({
          where: {
            title: match.title,
            company: match.company || 'Various Companies'
          }
        });
        
        if (!jobOpportunity) {
          jobOpportunity = await this.prisma.jobOpportunity.create({
            data: {
              title: match.title,
              company: match.company || 'Various Companies',
              location: match.location || 'Canada',
              description: match.description || '',
              requirements: match.requiredSkills || [],
              salaryRange: match.salaryRange,
              isNewcomerFriendly: match.newcomerFriendly || false
            }
          });
        }
        
        // Create job match
        const jobMatch = await this.prisma.jobMatch.create({
          data: {
            userId,
            jobId: jobOpportunity.id,
            matchScore: Math.round((match.matchScore || 0) * 100),
            matchAnalysis: {
              successProbability: match.successProbability,
              skillsMatch: match.skillsMatch,
              applicationStrategy: match.applicationStrategy
            },
            skillsGaps: match.skillsMatch?.missing || []
          }
        });
        
        savedMatches.push(jobMatch);
      }
      
      return savedMatches;
    } catch (error) {
      console.error('❌ Error saving job matches:', error);
      throw new Error(`Failed to save job matches: ${error.message}`);
    }
  }
}

module.exports = CareerProfileService; 