require('dotenv').config();

// Google AI Configuration
const aiConfig = {
  // Google AI API Settings
  googleAI: {
    apiKey: process.env.GOOGLE_AI_API_KEY || '',
    baseUrl: 'https://generativelanguage.googleapis.com',
    models: {
      flash: 'gemini-1.5-flash-001',
      pro: 'gemini-1.5-pro-001'
    }
  },
  
  // Google Custom Search Settings
  customSearch: {
    apiKey: process.env.GOOGLE_CUSTOM_SEARCH_API_KEY || '',
    engineId: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID || '',
    baseUrl: 'https://customsearch.googleapis.com'
  },
  
  // Rate Limiting (Google AI Free Tier)
  rateLimits: {
    maxRequestsPerMinute: parseInt(process.env.MAX_REQUESTS_PER_MINUTE) || 15,
    maxTokensPerMinute: parseInt(process.env.MAX_TOKENS_PER_MINUTE) || 1000000,
    maxRequestsPerDay: parseInt(process.env.MAX_REQUESTS_PER_DAY) || 1500
  },
  
  // File Upload Settings
  fileUpload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880, // 5MB
    allowedTypes: (process.env.ALLOWED_FILE_TYPES || '.pdf,.docx,.jpg,.jpeg,.png').split(','),
    uploadDir: './uploads/resumes'
  },
  
  // AI Feature Settings
  features: {
    resumeAnalysis: {
      enabled: true,
      maxRetries: 3,
      confidenceThreshold: 0.6
    },
    careerProfile: {
      enabled: true,
      marketAlignmentThreshold: 70
    },
    mentorMatching: {
      enabled: true,
      maxMatches: 10,
      minCompatibilityScore: 60
    },
    jobDiscovery: {
      enabled: true,
      searchInterval: 24, // hours
      maxJobsPerSearch: 100
    },
    coaching: {
      enabled: true,
      maxSessionHistory: 50,
      sessionTimeoutMinutes: 30
    }
  },
  
  // Validation
  validate() {
    const required = ['GOOGLE_AI_API_KEY'];
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
    
    return true;
  }
};

module.exports = aiConfig; 