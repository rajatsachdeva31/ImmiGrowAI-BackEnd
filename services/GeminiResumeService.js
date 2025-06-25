const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

class GeminiResumeService {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Use Gemini 1.5 Flash for faster, cost-effective processing
    // Rate limit: 1000 requests/minute (vs 15 with AI Studio)
    this.model = this.genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.1, // Low temperature for consistent structured output
        topK: 1,
        topP: 1,
        maxOutputTokens: 8192,
      }
    });
    
    // Rate limiting (much higher limits with Developer API)
    this.requestCount = {
      minute: { count: 0, resetTime: Date.now() + 60000 },
      day: { count: 0, resetTime: Date.now() + 86400000 }
    };
    
    this.maxRequestsPerMinute = 1000; // Increased from 15
    this.maxRequestsPerDay = 50000;   // Much higher daily limit
  }

  // Enhanced rate limiting check
  checkRateLimit() {
    const now = Date.now();
    
    if (now > this.requestCount.minute.resetTime) {
      this.requestCount.minute = { count: 0, resetTime: now + 60000 };
    }
    
    if (now > this.requestCount.day.resetTime) {
      this.requestCount.day = { count: 0, resetTime: now + 86400000 };
    }
    
    if (this.requestCount.minute.count >= this.maxRequestsPerMinute) {
      throw new Error('Rate limit exceeded: too many requests per minute (1000/min limit)');
    }
    
    if (this.requestCount.day.count >= this.maxRequestsPerDay) {
      throw new Error('Rate limit exceeded: too many requests per day');
    }
    
    return true;
  }

  incrementRequestCount() {
    this.requestCount.minute.count++;
    this.requestCount.day.count++;
  }

  // Direct PDF processing with Gemini (no need for text extraction)
  async analyzeResumePDF(filePath, originalFileName) {
    this.checkRateLimit();
    
    try {
      console.log('🔍 Processing PDF directly with Gemini API...');
      
      // Read PDF file as base64
      const fileBuffer = fs.readFileSync(filePath);
      const mimeType = 'application/pdf';
      
      const prompt = this.createResumeAnalysisPrompt();
      
      const result = await this.model.generateContent([
        {
          inlineData: {
            data: fileBuffer.toString('base64'),
            mimeType: mimeType
          }
        },
        { text: prompt }
      ]);

      const response = await result.response;
      const analysisText = response.text();
      
      this.incrementRequestCount();
      
      // Parse JSON response
      let analysis;
      try {
        analysis = JSON.parse(analysisText);
      } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        // Try to extract JSON from response if it's wrapped in markdown
        const jsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/) || 
                         analysisText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          analysis = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          throw new Error('Failed to parse AI response as JSON');
        }
      }
      
      // Validate and enhance analysis
      analysis = this.validateAndEnhanceAnalysis(analysis, originalFileName);
      
      console.log('✅ PDF analysis completed successfully');
      return analysis;
      
    } catch (error) {
      console.error('❌ PDF analysis error:', error);
      throw new Error(`Resume analysis failed: ${error.message}`);
    }
  }

  // Enhanced resume analysis prompt with Canadian job market focus
  createResumeAnalysisPrompt() {
    return `
Analyze this resume and extract structured data with Canadian job market focus. Provide confidence scores (0-1).

Extract in this exact JSON structure:
{
  "personalInfo": {
    "name": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": "",
    "confidence": 0.0
  },
  "professionalSummary": {
    "summary": "",
    "careerLevel": "Entry/Mid/Senior/Executive",
    "yearsOfExperience": 0,
    "confidence": 0.0
  },
  "education": [
    {
      "degree": "",
      "institution": "",
      "year": "",
      "location": "",
      "gpa": "",
      "relevantCoursework": [],
      "canadianEquivalency": "",
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
      "achievements": [],
      "canadianRelevance": "High/Medium/Low",
      "confidence": 0.0
    }
  ],
  "skills": {
    "technical": [],
    "soft": [],
    "languages": [
      {
        "language": "",
        "proficiency": "Native/Fluent/Intermediate/Basic"
      }
    ],
    "canadianWorkplaceRelevance": "High/Medium/Low",
    "confidence": 0.0
  },
  "certifications": [
    {
      "name": "",
      "issuer": "",
      "year": "",
      "expiryDate": "",
      "canadianRecognition": "Recognized/Partially/Not Recognized",
      "confidence": 0.0
    }
  ],
  "projects": [
    {
      "name": "",
      "description": "",
      "technologies": [],
      "role": "",
      "year": "",
      "confidence": 0.0
    }
  ],
  "canadianMarketAnalysis": {
    "overallRelevance": "High/Medium/Low",
    "strengthsForCanadianMarket": [],
    "potentialChallenges": [],
    "recommendedImprovements": [],
    "targetIndustries": [],
    "salaryRangeEstimate": "",
    "confidence": 0.0
  },
  "confidenceScores": {
    "overall": 0.0,
    "dataExtraction": 0.0,
    "marketAnalysis": 0.0
  }
}

Canadian Context:
- Assess education equivalency to Canadian standards
- Evaluate work experience relevance to Canadian job market
- Consider language proficiency requirements
- Analyze certification recognition in Canada
- Provide Canadian-specific career guidance

Return only valid JSON. Use empty strings/arrays for missing data.
    `;
  }

  // Analyze text-based resume (fallback for non-PDF files)
  async analyzeResumeText(extractedText, originalFileName) {
    this.checkRateLimit();
    
    try {
      console.log('🔍 Processing text-based resume with Gemini...');
      
      const prompt = `
${this.createResumeAnalysisPrompt()}

Resume Text:
${extractedText}

File: ${originalFileName}
      `;
      
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const analysisText = response.text();
      
      this.incrementRequestCount();
      
      // Parse and validate response
      let analysis;
      try {
        analysis = JSON.parse(analysisText);
      } catch (parseError) {
        const jsonMatch = analysisText.match(/```json\n([\s\S]*?)\n```/) || 
                         analysisText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          analysis = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          throw new Error('Failed to parse AI response as JSON');
        }
      }
      
      analysis = this.validateAndEnhanceAnalysis(analysis, originalFileName);
      
      console.log('✅ Text analysis completed successfully');
      return analysis;
      
    } catch (error) {
      console.error('❌ Text analysis error:', error);
      throw new Error(`Resume analysis failed: ${error.message}`);
    }
  }

  // Validate and enhance analysis results
  validateAndEnhanceAnalysis(analysis, originalFileName) {
    // Ensure all required fields exist
    const defaults = {
      personalInfo: { confidence: 0 },
      professionalSummary: { confidence: 0 },
      education: [],
      workExperience: [],
      skills: { technical: [], soft: [], languages: [], confidence: 0 },
      certifications: [],
      projects: [],
      canadianMarketAnalysis: { confidence: 0 },
      confidenceScores: { overall: 0, dataExtraction: 0, marketAnalysis: 0 }
    };

    // Deep merge with defaults
    analysis = { ...defaults, ...analysis };
    
    // Calculate overall confidence if not provided
    if (!analysis.confidenceScores.overall) {
      const confidences = [
        analysis.personalInfo.confidence || 0,
        analysis.professionalSummary.confidence || 0,
        analysis.skills.confidence || 0,
        analysis.canadianMarketAnalysis.confidence || 0
      ];
      analysis.confidenceScores.overall = 
        confidences.reduce((a, b) => a + b, 0) / confidences.length;
    }

    // Add metadata
    analysis.metadata = {
      processedAt: new Date().toISOString(),
      originalFileName: originalFileName,
      processingMethod: originalFileName.toLowerCase().endsWith('.pdf') ? 'direct_pdf' : 'text_extraction',
      apiVersion: 'gemini-1.5-flash'
    };

    return analysis;
  }

  // Get rate limit status
  getRateLimitStatus() {
    const now = Date.now();
    return {
      minute: {
        used: this.requestCount.minute.count,
        limit: this.maxRequestsPerMinute,
        resetIn: Math.max(0, this.requestCount.minute.resetTime - now)
      },
      day: {
        used: this.requestCount.day.count,
        limit: this.maxRequestsPerDay,
        resetIn: Math.max(0, this.requestCount.day.resetTime - now)
      }
    };
  }
}

module.exports = GeminiResumeService; 