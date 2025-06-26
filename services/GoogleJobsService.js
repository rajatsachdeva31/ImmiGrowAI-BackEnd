const { JobServiceClient } = require('@google-cloud/talent');

class GoogleJobsService {
  constructor() {
    // Check if Google Cloud credentials are configured
    if (process.env.GOOGLE_CLOUD_PROJECT_ID && process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      try {
        // Initialize Google Cloud Talent Solution client
        this.client = new JobServiceClient({
          projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
          keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
        });
        
        this.projectPath = this.client.projectPath(process.env.GOOGLE_CLOUD_PROJECT_ID);
        this.isConfigured = true;
        console.log('✅ Google Cloud Talent API configured successfully');
      } catch (error) {
        console.log('⚠️ Google Cloud Talent API configuration failed:', error.message);
        this.isConfigured = false;
      }
    } else {
      console.log('⚠️ Google Cloud Talent API not configured - missing environment variables');
      this.isConfigured = false;
    }
  }

  /**
   * Search for jobs using Google for Jobs API
   * @param {Object} careerPath - Career path object with title and industry
   * @param {string} location - Location to search jobs (default: 'Canada')
   * @param {Object} filters - Additional search filters
   * @returns {Array} Array of job results
   */
  async searchJobs(careerPath, location = 'Canada', filters = {}) {
    // If Google Cloud API is not configured, return mock data
    if (!this.isConfigured) {
      return this.getMockJobData(careerPath, location);
    }

    try {
      console.log(`🔍 Searching jobs for: ${careerPath.title} in ${location}`);
      
      const request = {
        parent: this.projectPath,
        requestMetadata: {
          userId: filters.userId || 'anonymous',
          sessionId: filters.sessionId || this.generateSessionId(),
          domain: 'immigrowai.com'
        },
        jobQuery: {
          query: this.buildJobQuery(careerPath, location),
          jobTitleFilters: [{
            jobTitle: careerPath.title,
            negated: false
          }],
          locationFilters: [{
            address: location
          }],
          languageCodes: ['en-CA', 'fr-CA'],
          publishTimeRange: {
            startTime: {
              seconds: Math.floor((Date.now() - 30 * 24 * 60 * 60 * 1000) / 1000) // Last 30 days
            },
            endTime: {
              seconds: Math.floor(Date.now() / 1000)
            }
          }
        },
        histogramQueries: [{
          histogramQuery: 'COMPANY_SIZE'
        }],
        jobView: 'JOB_VIEW_FULL',
        maxResults: 20,
        orderBy: 'relevance desc'
      };

      const [response] = await this.client.searchJobs(request);
      
      const jobs = this.parseJobResults(response.jobs || []);
      console.log(`✅ Found ${jobs.length} jobs for ${careerPath.title}`);
      
      return {
        jobs,
        totalCount: response.totalSize || 0,
        nextPageToken: response.nextPageToken,
        metadata: {
          searchQuery: careerPath.title,
          location: location,
          searchedAt: new Date().toISOString()
        }
      };

    } catch (error) {
      console.error('❌ Google Jobs API error:', error);
      
      // Fallback to mock data if Google Jobs API fails
      return this.getMockJobData(careerPath, location);
    }
  }

  /**
   * Build search query string for job search
   */
  buildJobQuery(careerPath, location) {
    const queryParts = [
      careerPath.title,
      careerPath.industry || '',
      location
    ].filter(Boolean);
    
    return queryParts.join(' ');
  }

  /**
   * Parse job results from Google Jobs API response
   */
  parseJobResults(jobs) {
    return jobs.map(job => ({
      id: job.name,
      title: job.title,
      company: job.companyDisplayName || job.companyName,
      location: this.formatLocation(job.addresses),
      description: this.cleanDescription(job.description),
      salaryInfo: this.formatSalary(job.compensationInfo),
      jobLevel: job.jobLevel,
      employmentTypes: job.employmentTypes || [],
      applicationInfo: {
        applicationUrls: job.applicationInfo?.uris || [],
        applicationEmails: job.applicationInfo?.emails || [],
        instruction: job.applicationInfo?.instruction || ''
      },
      postingPublishTime: job.postingPublishTime,
      postingExpireTime: job.postingExpireTime,
      jobBenefits: job.jobBenefits || [],
      qualifications: job.qualifications,
      responsibilities: job.responsibilities,
      companySize: job.companySize,
      jobCategory: job.jobCategory,
      languageCode: job.languageCode,
      promotionValue: job.promotionValue || 0,
      customAttributes: job.customAttributes || {}
    }));
  }

  /**
   * Format location information
   */
  formatLocation(addresses) {
    if (!addresses || addresses.length === 0) return 'Location not specified';
    
    const address = addresses[0];
    const parts = [];
    
    if (address.locality) parts.push(address.locality);
    if (address.administrativeArea) parts.push(address.administrativeArea);
    if (address.country) parts.push(address.country);
    
    return parts.join(', ') || 'Remote';
  }

  /**
   * Clean and truncate job description
   */
  cleanDescription(description) {
    if (!description) return 'No description available';
    
    // Remove HTML tags and extra whitespace
    const cleaned = description
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Truncate to 300 characters
    return cleaned.length > 300 ? cleaned.substring(0, 300) + '...' : cleaned;
  }

  /**
   * Format salary information
   */
  formatSalary(compensationInfo) {
    if (!compensationInfo || !compensationInfo.entries) {
      return null;
    }

    const salaryEntry = compensationInfo.entries.find(entry => 
      entry.type === 'BASE' || entry.type === 'SALARY'
    );

    if (!salaryEntry || !salaryEntry.range) {
      return null;
    }

    const range = salaryEntry.range;
    const currency = range.currencyCode || 'CAD';
    
    return {
      min: range.min?.currencyCode ? range.min.units || 0 : 0,
      max: range.max?.currencyCode ? range.max.units || 0 : 0,
      currency: currency,
      period: salaryEntry.unit || 'YEAR',
      formatted: this.formatSalaryRange(range, currency)
    };
  }

  /**
   * Format salary range for display
   */
  formatSalaryRange(range, currency) {
    if (!range.min && !range.max) return null;
    
    const formatAmount = (amount) => {
      if (!amount || !amount.units) return null;
      return new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
      }).format(amount.units);
    };

    const minFormatted = formatAmount(range.min);
    const maxFormatted = formatAmount(range.max);

    if (minFormatted && maxFormatted) {
      return `${minFormatted} - ${maxFormatted}`;
    } else if (minFormatted) {
      return `From ${minFormatted}`;
    } else if (maxFormatted) {
      return `Up to ${maxFormatted}`;
    }
    
    return null;
  }

  /**
   * Returns mock job data when Google Cloud API is not configured
   * This allows the feature to work during development/testing
   */
  getMockJobData(careerPath, location) {
    console.log(`📋 Returning mock job data for: ${careerPath.title} in ${location}`);
    
    const mockJobs = [
      {
        id: 'mock-job-1',
        title: `${careerPath.title}`,
        company: 'TechCorp Canada',
        location: `${location}`,
        description: `We are looking for an experienced ${careerPath.title} to join our growing team. This role offers exciting opportunities for professional growth and development.`,
        salaryInfo: {
          formatted: 'CAD $70,000 - $90,000 per year',
          currency: 'CAD'
        },
        jobLevel: 'Mid-level',
        employmentTypes: ['Full-time'],
        applicationInfo: {
          applicationUrls: ['https://indeed.ca'],
          applicationEmails: [],
          instruction: 'Apply through company website'
        },
        postingDate: new Date().toISOString()
      },
      {
        id: 'mock-job-2',
        title: `Senior ${careerPath.title}`,
        company: 'InnovateTech Solutions',
        location: `${location}`,
        description: `Join our dynamic team as a Senior ${careerPath.title}. We offer competitive salary, excellent benefits, and a collaborative work environment.`,
        salaryInfo: {
          formatted: 'CAD $80,000 - $100,000 per year',
          currency: 'CAD'
        },
        jobLevel: 'Senior-level',
        employmentTypes: ['Full-time'],
        applicationInfo: {
          applicationUrls: ['https://linkedin.com/jobs'],
          applicationEmails: [],
          instruction: 'Apply through LinkedIn'
        },
        postingDate: new Date().toISOString()
      },
      {
        id: 'mock-job-3',
        title: `${careerPath.title} - Remote`,
        company: 'Global Remote Solutions',
        location: `Remote, ${location}`,
        description: `Remote opportunity for a skilled ${careerPath.title}. Work from anywhere in Canada with flexible hours and modern technology stack.`,
        salaryInfo: {
          formatted: 'CAD $75,000 - $95,000 per year',
          currency: 'CAD'
        },
        jobLevel: 'Mid-level',
        employmentTypes: ['Full-time', 'Remote'],
        applicationInfo: {
          applicationUrls: ['https://workopolis.com'],
          applicationEmails: [],
          instruction: 'Apply through Workopolis'
        },
        postingDate: new Date().toISOString()
      }
    ];

    return {
      jobs: mockJobs,
      totalCount: mockJobs.length,
      searchQuery: careerPath.title,
      location: location,
      nextPageToken: null,
      source: 'mock',
      message: 'These are sample job listings. Configure Google Cloud Talent API for real job data.'
    };
  }

  /**
   * Generate unique session ID for tracking
   */
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Map industry to Google Jobs category
   */
  mapIndustryToCategory(industry) {
    const industryMap = {
      'Technology': 'COMPUTER_AND_IT',
      'Healthcare': 'HEALTHCARE',
      'Finance': 'ACCOUNTING_AND_FINANCE',
      'Education': 'EDUCATION',
      'Engineering': 'ARCHITECTURE_AND_ENGINEERING',
      'Marketing': 'SALES_AND_RETAIL',
      'Sales': 'SALES_AND_RETAIL',
      'Manufacturing': 'MANUFACTURING_AND_WAREHOUSE',
      'Legal': 'LEGAL',
      'Construction': 'CONSTRUCTION_AND_MINING',
      'Transportation': 'TRANSPORTATION_AND_LOGISTICS',
      'Hospitality': 'RESTAURANT_AND_HOSPITALITY',
      'Real Estate': 'REAL_ESTATE',
      'Media': 'ARTS_ENTERTAINMENT_AND_MEDIA'
    };

    return industryMap[industry] || 'OTHER';
  }

  /**
   * Get available job categories
   */
  getJobCategories() {
    return [
      'ACCOUNTING_AND_FINANCE',
      'ADMINISTRATIVE_AND_OFFICE',
      'ADVERTISING_AND_MARKETING',
      'ANIMAL_CARE',
      'ART_FASHION_AND_DESIGN',
      'BUSINESS_OPERATIONS',
      'CLEANING_AND_FACILITIES',
      'COMPUTER_AND_IT',
      'CONSTRUCTION_AND_MINING',
      'EDUCATION',
      'ENTERTAINMENT_AND_TRAVEL',
      'FARMING_AND_OUTDOORS',
      'HEALTHCARE',
      'HUMAN_RESOURCES',
      'INSTALLATION_MAINTENANCE_AND_REPAIR',
      'LEGAL',
      'MANAGEMENT',
      'MANUFACTURING_AND_WAREHOUSE',
      'MEDIA_COMMUNICATIONS_AND_WRITING',
      'OIL_GAS_AND_MINING',
      'PERSONAL_CARE_AND_SERVICES',
      'PROTECTIVE_SERVICES',
      'REAL_ESTATE',
      'RESTAURANT_AND_HOSPITALITY',
      'SALES_AND_RETAIL',
      'SCIENCE_AND_ENGINEERING',
      'SOCIAL_SERVICES_AND_NON_PROFIT',
      'SPORTS_FITNESS_AND_RECREATION',
      'TRANSPORTATION_AND_LOGISTICS'
    ];
  }
}

module.exports = GoogleJobsService; 