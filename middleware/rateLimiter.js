const rateLimit = require('express-rate-limit');

// Rate limiter for Gemini API calls (1000 requests per minute)
const geminiRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 950, // Slightly under the 1000 limit for safety buffer
  message: {
    success: false,
    message: 'Too many AI requests from this IP, please try again later.',
    retryAfter: '1 minute'
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use user ID if authenticated, otherwise IP
    return req.user?.id || req.ip;
  },
  handler: (req, res) => {
    console.log(`🚫 Rate limit exceeded for ${req.user?.email || req.ip}`);
    res.status(429).json({
      success: false,
      message: 'Rate limit exceeded. The Gemini API allows 1000 requests per minute.',
      retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),
      rateLimitInfo: {
        limit: req.rateLimit.limit,
        current: req.rateLimit.current,
        remaining: req.rateLimit.remaining,
        resetTime: new Date(req.rateLimit.resetTime).toISOString()
      }
    });
  }
});

// Rate limiter for file uploads (more restrictive)
const uploadRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 uploads per 15 minutes
  message: {
    success: false,
    message: 'Too many file uploads from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  keyGenerator: (req) => {
    return req.user?.id || req.ip;
  }
});

// Daily limit tracker for Gemini API
class DailyLimitTracker {
  constructor() {
    this.dailyLimits = new Map();
    this.maxDailyRequests = 45000; // Conservative limit under 50k
  }

  checkDailyLimit(userId) {
    const today = new Date().toDateString();
    const userKey = `${userId}-${today}`;
    
    const currentCount = this.dailyLimits.get(userKey) || 0;
    
    if (currentCount >= this.maxDailyRequests) {
      throw new Error(`Daily API limit exceeded (${this.maxDailyRequests} requests per day)`);
    }
    
    return true;
  }

  incrementDailyCount(userId) {
    const today = new Date().toDateString();
    const userKey = `${userId}-${today}`;
    
    const currentCount = this.dailyLimits.get(userKey) || 0;
    this.dailyLimits.set(userKey, currentCount + 1);
    
    // Clean up old entries (keep only today and yesterday)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    for (const key of this.dailyLimits.keys()) {
      if (!key.includes(today) && !key.includes(yesterdayStr)) {
        this.dailyLimits.delete(key);
      }
    }
  }

  getDailyUsage(userId) {
    const today = new Date().toDateString();
    const userKey = `${userId}-${today}`;
    return this.dailyLimits.get(userKey) || 0;
  }
}

const dailyTracker = new DailyLimitTracker();

// Middleware to check daily limits
const checkDailyLimit = (req, res, next) => {
  try {
    if (req.user?.id) {
      dailyTracker.checkDailyLimit(req.user.id);
    }
    next();
  } catch (error) {
    res.status(429).json({
      success: false,
      message: error.message,
      dailyUsage: req.user?.id ? dailyTracker.getDailyUsage(req.user.id) : 0,
      dailyLimit: dailyTracker.maxDailyRequests
    });
  }
};

// Middleware to increment daily count after successful API call
const incrementDailyCount = (req, res, next) => {
  if (req.user?.id) {
    dailyTracker.incrementDailyCount(req.user.id);
  }
  next();
};

module.exports = {
  geminiRateLimit,
  uploadRateLimit,
  checkDailyLimit,
  incrementDailyCount,
  dailyTracker
}; 