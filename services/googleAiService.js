const { GoogleGenerativeAI } = require('@google/generative-ai');
const aiConfig = require('./aiConfig');

class GoogleAIService {
  constructor() {
    this.genAI = new GoogleGenerativeAI(aiConfig.googleAI.apiKey);
    this.flashModel = this.genAI.getGenerativeModel({ model: aiConfig.googleAI.models.flash });
    this.proModel = this.genAI.getGenerativeModel({ model: aiConfig.googleAI.models.pro });
    
    // Rate limiting tracking
    this.requestCount = {
      minute: { count: 0, resetTime: Date.now() + 60000 },
      day: { count: 0, resetTime: Date.now() + 86400000 }
    };
  }

  // Rate limiting check
  checkRateLimit() {
    const now = Date.now();
    
    // Reset minute counter if needed
    if (now > this.requestCount.minute.resetTime) {
      this.requestCount.minute = { count: 0, resetTime: now + 60000 };
    }
    
    // Reset day counter if needed
    if (now > this.requestCount.day.resetTime) {
      this.requestCount.day = { count: 0, resetTime: now + 86400000 };
    }
    
    // Check limits
    if (this.requestCount.minute.count >= aiConfig.rateLimits.maxRequestsPerMinute) {
      throw new Error('Rate limit exceeded: too many requests per minute');
    }
    
    if (this.requestCount.day.count >= aiConfig.rateLimits.maxRequestsPerDay) {
      throw new Error('Rate limit exceeded: too many requests per day');
    }
    
    return true;
  }

  // Increment request counters
  incrementRequestCount() {
    this.requestCount.minute.count++;
    this.requestCount.day.count++;
  }

  // Generic AI request method
  async makeAIRequest(prompt, useProModel = false, retries = 3) {
    this.checkRateLimit();
    
    try {
      const model = useProModel ? this.proModel : this.flashModel;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      
      this.incrementRequestCount();
      return response.text();
    } catch (error) {
      if (retries > 0 && error.message.includes('rate limit')) {
        console.log(`Rate limit hit, retrying in 2 seconds... (${retries} retries left)`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        return this.makeAIRequest(prompt, useProModel, retries - 1);
      }
      throw error;
    }
  }

  // Resume Analysis Feature
  async analyzeResume(extractedText, userProfile = {}) {
    const prompt = `
Analyze this resume and extract structured data in JSON format. Provide confidence scores for each field (0-1).

Resume Text:
${extractedText}

User Context:
${JSON.stringify(userProfile)}

Extract the following information in this exact JSON structure:
{
  "personalInfo": {
    "name": "",
    "email": "",
    "phone": "",
    "location": "",
    "confidence": 0.0
  },
  "education": [
    {
      "degree": "",
      "institution": "",
      "year": "",
      "location": "",
      "confidence": 0.0
    }
  ],
  "workExperience": [
    {
      "title": "",
      "company": "",
      "startDate": "",
      "endDate": "",
      "location": "",
      "responsibilities": [],
      "confidence": 0.0
    }
  ],
  "skills": {
    "technical": [],
    "soft": [],
    "languages": [],
    "confidence": 0.0
  },
  "certifications": [
    {
      "name": "",
      "issuer": "",
      "year": "",
      "confidence": 0.0
    }
  ],
  "summary": {
    "professionalSummary": "",
    "careerLevel": "",
    "industries": [],
    "confidence": 0.0
  }
}

Return only valid JSON. For missing information, use empty strings or arrays.
    `;

    try {
      const response = await this.makeAIRequest(prompt, false);
      return JSON.parse(response);
    } catch (error) {
      console.error('Resume analysis error:', error);
      throw new Error('Failed to analyze resume');
    }
  }

  // Career Profile Generation Feature
  async generateCareerProfile(resumeData, userObjectives = {}) {
    const prompt = `
Create a comprehensive career profile for a newcomer to Canada based on resume data and career objectives.

Resume Data:
${JSON.stringify(resumeData)}

User Objectives:
${JSON.stringify(userObjectives)}

Generate a detailed career profile in this JSON structure:
{
  "professionalSummary": "3-4 paragraph professional summary highlighting experience, strengths, and Canadian market relevance",
  "skillsCategories": {
    "technical": {
      "skills": [],
      "marketRelevance": "High/Medium/Low",
      "improvement_suggestions": []
    },
    "soft": {
      "skills": [],
      "marketRelevance": "High/Medium/Low", 
      "improvement_suggestions": []
    },
    "industry": {
      "skills": [],
      "marketRelevance": "High/Medium/Low",
      "improvement_suggestions": []
    }
  },
  "marketAlignmentScore": 85,
  "skillGaps": [
    {
      "skill": "",
      "priority": "High/Medium/Low",
      "learningPath": "",
      "estimatedTime": ""
    }
  ],
  "improvementRoadmap": {
    "immediate": ["0-3 months actions"],
    "shortTerm": ["3-6 months goals"],
    "mediumTerm": ["6-12 months objectives"],
    "longTerm": ["1-2 years vision"]
  },
  "canadianMarketInsights": {
    "industryDemand": "",
    "salaryExpectations": "",
    "certificationRecommendations": [],
    "networkingOpportunities": []
  }
}

Focus on Canadian job market alignment, newcomer advantages, and specific improvement paths.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Career profile generation error:', error);
      throw new Error('Failed to generate career profile');
    }
  }

  // Mentor Matching Feature
  async calculateMentorCompatibility(menteeProfile, mentorProfile) {
    const prompt = `
Analyze mentor-mentee compatibility for Canadian career development context.

Mentee Profile:
${JSON.stringify(menteeProfile)}

Mentor Profile:
${JSON.stringify(mentorProfile)}

Calculate compatibility and return this JSON structure:
{
  "compatibilityScore": 85,
  "compatibilityBreakdown": {
    "industryAlignment": {
      "score": 90,
      "reasoning": "Direct experience in target industry"
    },
    "experienceLevel": {
      "score": 80,
      "reasoning": "Appropriate mentor experience for mentee level"
    },
    "culturalCompatibility": {
      "score": 85,
      "reasoning": "Shared cultural background and language"
    },
    "careerGoals": {
      "score": 88,
      "reasoning": "Aligned career objectives and growth path"
    },
    "communicationStyle": {
      "score": 75,
      "reasoning": "Compatible communication preferences"
    }
  },
  "matchReasoning": {
    "strengths": ["Why this is a good match"],
    "potential_challenges": ["What to be aware of"],
    "recommended_approach": "How to structure the mentorship",
    "expected_outcomes": ["What mentee can expect to gain"]
  },
  "actionPlan": {
    "first_meeting": "Suggested agenda for initial meeting",
    "ongoing_structure": "Recommended meeting frequency and format",
    "success_metrics": ["How to measure progress"]
  }
}

Consider Canadian workplace culture, newcomer needs, and professional development best practices.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Mentor compatibility calculation error:', error);
      throw new Error('Failed to calculate mentor compatibility');
    }
  }

  // AI Career Coaching Feature
  async processCoachingQuery(query, userProfile, sessionHistory = []) {
    const prompt = `
You are an AI career coach specializing in helping newcomers to Canada navigate their career development.

User Profile:
${JSON.stringify(userProfile)}

Session History (last 5 interactions):
${JSON.stringify(sessionHistory.slice(-5))}

User Query: "${query}"

Provide coaching response in this JSON structure:
{
  "response": "Detailed coaching response addressing the user's query",
  "actionItems": ["Specific actionable steps the user should take"],
  "resources": [
    {
      "title": "Resource name",
      "type": "website/course/certification/book",
      "url": "URL if available",
      "description": "How this resource helps"
    }
  ],
  "followUpQuestions": ["Questions to ask in next session"],
  "sessionSummary": "Key points covered in this interaction",
  "progressMetrics": {
    "area": "What area this helps improve",
    "measurable_outcome": "How user can measure progress"
  }
}

Coaching Guidelines:
- Focus on Canadian job market specifics
- Consider newcomer challenges (credential recognition, cultural adaptation)
- Provide practical, actionable advice
- Encourage confidence building
- Suggest networking and skill development opportunities
- Be supportive and understanding of immigrant experience
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Coaching query processing error:', error);
      throw new Error('Failed to process coaching query');
    }
  }

  // Job Opportunity Analysis Feature
  async analyzeJobCompatibility(userProfile, jobDescription) {
    const prompt = `
Analyze job compatibility for a newcomer to Canada.

User Profile:
${JSON.stringify(userProfile)}

Job Description:
${jobDescription}

Analyze compatibility and return this JSON structure:
{
  "matchScore": 85,
  "compatibility": {
    "skills": {
      "score": 90,
      "matched": ["Skills that match"],
      "missing": ["Skills that are missing"],
      "transferable": ["International skills that transfer"]
    },
    "experience": {
      "score": 80,
      "relevance": "How relevant is the experience",
      "gaps": ["Experience gaps to address"]
    },
    "education": {
      "score": 85,
      "alignment": "How education aligns with requirements",
      "additional_needed": ["Additional education/certifications needed"]
    },
    "cultural_fit": {
      "score": 75,
      "newcomer_advantages": ["Advantages as a newcomer"],
      "adaptation_areas": ["Areas requiring cultural adaptation"]
    }
  },
  "preparation": {
    "immediate": ["What to do before applying"],
    "short_term": ["Skills to develop in 1-3 months"],
    "application_strategy": "How to position yourself for this role"
  },
  "coverLetter": {
    "key_points": ["Main points to emphasize"],
    "newcomer_positioning": "How to address newcomer status positively",
    "template_suggestions": ["Specific phrases or approaches"]
  },
  "interview_prep": {
    "likely_questions": ["Questions they might ask"],
    "strength_examples": ["Examples to showcase strengths"],
    "cultural_considerations": ["Canadian interview norms to consider"]
  }
}

Focus on realistic assessment while being encouraging about newcomer potential.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Job compatibility analysis error:', error);
      throw new Error('Failed to analyze job compatibility');
    }
  }

  // Skill Gap Analysis Feature
  async analyzeSkillGaps(currentSkills, targetRole, marketData = {}) {
    const prompt = `
Perform comprehensive skill gap analysis for Canadian job market.

Current Skills:
${JSON.stringify(currentSkills)}

Target Role:
${targetRole}

Market Data:
${JSON.stringify(marketData)}

Return detailed analysis in this JSON structure:
{
  "analysis": {
    "current_strengths": ["Skills that are strong and marketable"],
    "skill_gaps": [
      {
        "skill": "Missing skill name",
        "importance": "Critical/Important/Nice-to-have",
        "market_demand": "High/Medium/Low",
        "learning_difficulty": "Easy/Medium/Hard",
        "time_to_acquire": "Estimated time",
        "priority_score": 95
      }
    ],
    "transferable_skills": ["International skills that apply in Canada"],
    "market_advantages": ["Unique advantages in Canadian market"]
  },
  "learning_path": {
    "phase_1": {
      "duration": "0-3 months",
      "focus": ["Most critical skills to learn first"],
      "resources": [
        {
          "type": "course/certification/practice",
          "name": "Resource name",
          "provider": "Where to get it",
          "cost": "Free/Paid/Estimate",
          "url": "URL if available"
        }
      ]
    },
    "phase_2": {
      "duration": "3-6 months", 
      "focus": ["Next priority skills"],
      "resources": []
    },
    "phase_3": {
      "duration": "6-12 months",
      "focus": ["Advanced skills for career growth"],
      "resources": []
    }
  },
  "canadian_certifications": [
    {
      "certification": "Name",
      "relevance": "How it helps",
      "provider": "Who offers it",
      "timeline": "How long to complete",
      "cost": "Estimated cost"
    }
  ],
  "progress_tracking": {
    "milestones": ["How to measure progress"],
    "portfolio_projects": ["Projects to demonstrate skills"],
    "networking_opportunities": ["Where to connect with industry professionals"]
  }
}

Focus on practical, achievable learning paths specific to the Canadian job market.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Skill gap analysis error:', error);
      throw new Error('Failed to analyze skill gaps');
    }
  }

  // Cultural Integration Support Feature
  async generateCulturalGuidance(userBackground, targetWorkplace = {}) {
    const prompt = `
Provide cultural integration guidance for Canadian workplace.

User Background:
${JSON.stringify(userBackground)}

Target Workplace/Industry:
${JSON.stringify(targetWorkplace)}

Generate guidance in this JSON structure:
{
  "workplace_culture": {
    "communication": {
      "key_differences": ["How Canadian communication differs"],
      "best_practices": ["What to do"],
      "common_mistakes": ["What to avoid"],
      "examples": ["Specific scenarios and responses"]
    },
    "hierarchy": {
      "structure": "How Canadian workplaces are structured",
      "interaction_norms": ["How to interact with managers/colleagues"],
      "feedback_culture": "How feedback works in Canada"
    },
    "meeting_culture": {
      "participation": "How to contribute effectively",
      "etiquette": ["Meeting norms and expectations"],
      "follow_up": "Post-meeting protocols"
    }
  },
  "networking": {
    "professional_associations": ["Relevant associations to join"],
    "networking_events": ["Types of events to attend"],
    "online_presence": ["How to build professional online presence"],
    "conversation_starters": ["What to talk about at networking events"]
  },
  "career_development": {
    "performance_reviews": "How they work in Canada",
    "promotion_pathways": "How to advance in Canadian companies",
    "professional_development": ["Expected self-improvement activities"]
  },
  "practical_tips": {
    "first_90_days": ["What to focus on in first 3 months"],
    "building_relationships": ["How to connect with colleagues"],
    "work_life_balance": ["Canadian expectations and norms"]
  },
  "potential_challenges": [
    {
      "challenge": "Common challenge newcomers face",
      "solution": "How to address it",
      "resources": ["Where to get help"]
    }
  ]
}

Be specific about Canadian workplace norms and practical integration strategies.
    `;

    try {
      const response = await this.makeAIRequest(prompt, false);
      return JSON.parse(response);
    } catch (error) {
      console.error('Cultural guidance generation error:', error);
      throw new Error('Failed to generate cultural guidance');
    }
  }

  // Career Profile Generation for the Resume Page
  async generateCareerProfileWithGemini(data) {
    const { resumeAnalysis, userProfile } = data;
    
    const prompt = `
Analyze the following resume data and user profile to create an intelligent career profile suitable for the Canadian job market.

Resume Analysis:
${JSON.stringify(resumeAnalysis)}

User Profile:
${JSON.stringify(userProfile)}

Generate a comprehensive career profile in this JSON structure:
{
  "profile_summary": {
    "title": "Professional title based on background",
    "summary": "2-3 sentence professional summary",
    "unique_value_proposition": "What makes this person valuable",
    "years_experience": "Total years of relevant experience"
  },
  "skills_analysis": {
    "core_skills": [
      {
        "skill": "Skill name",
        "level": "Beginner/Intermediate/Advanced/Expert",
        "years_experience": 3,
        "market_demand": "High/Medium/Low",
        "canadian_relevance": "How relevant in Canadian market"
      }
    ],
    "transferable_skills": ["Skills that transfer well to Canada"],
    "skill_gaps": ["Key skills missing for Canadian market"],
    "emerging_skills": ["New skills to consider learning"]
  },
  "canadian_market_analysis": {
    "overall_marketability": {
      "score": 85,
      "reasoning": "Why this score was given",
      "improvement_areas": ["Areas to focus on for better marketability"]
    },
    "industry_fit": [
      {
        "industry": "Technology",
        "fit_score": 90,
        "opportunities": ["Specific opportunities in this industry"],
        "entry_barriers": ["Challenges to overcome"],
        "growth_potential": "Career growth prospects"
      }
    ],
    "geographic_recommendations": [
      {
        "location": "Toronto, ON",
        "reasoning": "Why this location is recommended",
        "industry_presence": "Strong tech industry",
        "newcomer_support": "Available support systems",
        "cost_of_living": "Relative cost considerations"
      }
    ],
    "salary_expectations": {
      "entry_level": "$50,000 - $65,000",
      "mid_level": "$65,000 - $85,000",
      "senior_level": "$85,000 - $120,000",
      "factors_affecting_salary": ["Location", "Company size", "Industry"]
    }
  },
  "career_pathways": [
    {
      "pathway": "Software Developer",
      "match_score": 88,
      "timeline": "3-6 months preparation",
      "required_skills": ["Skills needed for this path"],
      "certification_recommendations": ["Relevant certifications"],
      "typical_progression": "Career advancement path",
      "market_demand": "High",
      "advantages": ["Why this is a good fit"],
      "challenges": ["Potential obstacles"]
    }
  ],
  "next_steps": {
    "immediate": ["Actions to take in next 30 days"],
    "short_term": ["Goals for next 3-6 months"],
    "long_term": ["Career goals for next 1-2 years"]
  },
  "newcomer_specific": {
    "strengths": ["Advantages as a newcomer"],
    "cultural_considerations": ["Things to be aware of"],
    "networking_strategies": ["How to build professional network"],
    "credential_recognition": "Status of credentials in Canada"
  }
}

Focus on providing actionable, Canada-specific guidance that acknowledges both opportunities and challenges for newcomers.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Career profile generation error:', error);
      throw new Error('Failed to generate career profile');
    }
  }

  // Position Recommendations Generation
  async generatePositionRecommendationsWithGemini(resumeAnalysis) {
    const prompt = `
Based on the following resume analysis, generate specific position recommendations for the Canadian job market.

Resume Analysis:
${JSON.stringify(resumeAnalysis)}

Generate position recommendations in this JSON structure:
{
  "recommendations": [
    {
      "position_title": "Software Developer",
      "match_score": 88,
      "success_probability": 85,
      "reasoning": "Why this position is a good match",
      "required_skills": ["Skills needed for this position"],
      "matching_skills": ["Current skills that match"],
      "skill_gaps": ["Skills that need development"],
      "experience_relevance": {
        "score": 80,
        "relevant_experience": ["Which experiences are applicable"],
        "transferable_experience": ["How international experience applies"]
      },
      "market_analysis": {
        "demand": "High/Medium/Low",
        "growth_trend": "Growing/Stable/Declining",
        "average_salary": "$65,000 - $85,000",
        "top_hiring_companies": ["Company names"],
        "job_locations": ["Cities with most opportunities"]
      },
      "preparation_timeline": "3-6 months",
      "immediate_actions": ["What to do first"],
      "certification_recommendations": ["Relevant certifications"],
      "canadian_specific_requirements": ["Canada-specific needs"],
      "newcomer_advantages": ["How being a newcomer helps"],
      "potential_challenges": ["Obstacles to overcome"]
    }
  ],
  "overall_assessment": {
    "profile_strength": "Strong/Moderate/Developing",
    "market_readiness": "Ready/Needs preparation/Significant development needed",
    "key_recommendations": ["Top 3 recommendations"],
    "timeline_to_employment": "Estimated time to find suitable position"
  },
  "industry_insights": {
    "best_fit_industries": ["Industries that match well"],
    "emerging_opportunities": ["New areas to consider"],
    "market_trends": ["Current trends affecting job search"]
  }
}

Provide realistic but encouraging recommendations that consider the unique position of newcomers to Canada.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Position recommendations generation error:', error);
      throw new Error('Failed to generate position recommendations');
    }
  }

  // Enhanced Profile Generation for Specific Position
  async generateEnhancedProfileWithGemini(targetPosition, resumeAnalysis) {
    const prompt = `
Create an enhanced career profile tailored specifically for the target position, based on the resume analysis.

Target Position:
${JSON.stringify(targetPosition)}

Resume Analysis:
${JSON.stringify(resumeAnalysis)}

Generate an enhanced profile in this JSON structure:
{
  "optimized_profile": {
    "professional_title": "Title optimized for target position",
    "elevator_pitch": "30-second introduction tailored to this role",
    "value_proposition": "Unique value for this specific position",
    "key_achievements": ["Top achievements relevant to this role"]
  },
  "skills_positioning": {
    "primary_skills": [
      {
        "skill": "Skill name",
        "relevance_to_role": "How it applies to target position",
        "evidence": "Proof/examples of this skill",
        "positioning_statement": "How to present this skill"
      }
    ],
    "skill_development_plan": [
      {
        "skill": "Skill to develop",
        "importance": "Critical/Important/Beneficial",
        "learning_path": "How to acquire this skill",
        "timeline": "Time needed",
        "resources": ["Where to learn"]
      }
    ]
  },
  "experience_repositioning": {
    "relevant_experience": [
      {
        "original_role": "Previous job title",
        "repositioned_as": "How to present this role",
        "key_transferable_elements": ["What transfers to target role"],
        "success_metrics": ["Quantifiable achievements"],
        "canadian_context": "How to frame for Canadian employers"
      }
    ],
    "project_highlights": [
      {
        "project": "Project name",
        "relevance": "Why it matters for target role",
        "technologies_used": ["Relevant technologies"],
        "impact": "Measurable impact/results",
        "presentation_tip": "How to discuss in interviews"
      }
    ]
  },
  "application_strategy": {
    "resume_optimization": {
      "key_changes": ["Main changes to make to resume"],
      "keywords_to_include": ["Important keywords for ATS"],
      "sections_to_emphasize": ["Which resume sections to highlight"],
      "formatting_tips": ["How to structure for this role"]
    },
    "cover_letter_strategy": {
      "opening_approach": "How to start the cover letter",
      "key_points_to_address": ["Main points to cover"],
      "company_research_areas": ["What to research about companies"],
      "closing_strategy": "How to end strongly"
    },
    "networking_approach": {
      "target_professionals": ["Types of people to connect with"],
      "conversation_starters": ["How to initiate conversations"],
      "value_you_bring": ["What you offer to your network"],
      "follow_up_strategies": ["How to maintain connections"]
    }
  },
  "interview_preparation": {
    "common_questions": [
      {
        "question": "Likely interview question",
        "strategy": "How to approach this question",
        "key_points": ["Main points to cover"],
        "example_answer_structure": "Framework for answering"
      }
    ],
    "behavioral_examples": [
      {
        "situation": "STAR method situation",
        "task": "Task you had",
        "action": "Action you took",
        "result": "Result achieved",
        "relevance": "Why this example works for target role"
      }
    ],
    "technical_preparation": {
      "skills_to_demonstrate": ["Technical skills to showcase"],
      "portfolio_items": ["What to include in portfolio"],
      "coding_challenges": ["Types of challenges to practice"],
      "system_design_topics": ["Areas to study"]
    },
    "cultural_fit_preparation": {
      "company_culture_research": ["What to research"],
      "canadian_workplace_norms": ["Cultural aspects to understand"],
      "questions_to_ask": ["Good questions to ask interviewer"]
    }
  },
  "90_day_action_plan": {
    "week_1_2": ["Immediate actions"],
    "month_1": ["Goals for first month"],
    "month_2": ["Second month objectives"],
    "month_3": ["Third month targets"],
    "success_metrics": ["How to measure progress"]
  }
}

Create a comprehensive, actionable plan that positions the candidate optimally for the specific target role.
    `;

    try {
      const response = await this.makeAIRequest(prompt, true);
      return JSON.parse(response);
    } catch (error) {
      console.error('Enhanced profile generation error:', error);
      throw new Error('Failed to generate enhanced profile');
    }
  }
}

// Export the class and standalone functions for backwards compatibility
const googleAIService = new GoogleAIService();

// Export individual functions for direct use
const generateCareerProfileWithGemini = (data) => googleAIService.generateCareerProfileWithGemini(data);
const generatePositionRecommendationsWithGemini = (resumeAnalysis) => googleAIService.generatePositionRecommendationsWithGemini(resumeAnalysis);
const generateEnhancedProfileWithGemini = (targetPosition, resumeAnalysis) => googleAIService.generateEnhancedProfileWithGemini(targetPosition, resumeAnalysis);

module.exports = {
  GoogleAIService,
  generateCareerProfileWithGemini,
  generatePositionRecommendationsWithGemini, 
  generateEnhancedProfileWithGemini,
  default: googleAIService
}; 