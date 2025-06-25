const fs = require('fs').promises;
const path = require('path');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');
const Tesseract = require('tesseract.js');
const sharp = require('sharp');

class DocumentProcessor {
  constructor() {
    this.supportedFormats = ['.pdf', '.docx', '.jpg', '.jpeg', '.png'];
  }

  // Main document processing method
  async processDocument(filePath, originalName) {
    try {
      const ext = path.extname(originalName).toLowerCase();
      
      if (!this.supportedFormats.includes(ext)) {
        throw new Error(`Unsupported file format: ${ext}`);
      }

      let extractedText = '';
      
      switch (ext) {
        case '.pdf':
          extractedText = await this.processPDF(filePath);
          break;
        case '.docx':
          extractedText = await this.processDocx(filePath);
          break;
        case '.jpg':
        case '.jpeg':
        case '.png':
          extractedText = await this.processImage(filePath);
          break;
        default:
          throw new Error(`Unsupported file format: ${ext}`);
      }

      return {
        extractedText: extractedText.trim(),
        originalFileName: originalName,
        fileSize: (await fs.stat(filePath)).size,
        processedAt: new Date().toISOString()
      };

    } catch (error) {
      console.error('Document processing error:', error);
      throw new Error(`Failed to process document: ${error.message}`);
    }
  }

  // Process PDF files
  async processPDF(filePath) {
    try {
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdf(dataBuffer);
      return data.text;
    } catch (error) {
      console.error('PDF processing error:', error);
      throw new Error('Failed to process PDF file');
    }
  }

  // Process DOCX files
  async processDocx(filePath) {
    try {
      const result = await mammoth.extractRawText({ path: filePath });
      return result.value;
    } catch (error) {
      console.error('DOCX processing error:', error);
      throw new Error('Failed to process DOCX file');
    }
  }

  // Process image files using OCR
  async processImage(filePath) {
    try {
      // Optimize image for better OCR results
      const optimizedBuffer = await sharp(filePath)
        .resize(null, 2000, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .grayscale()
        .normalize()
        .sharpen()
        .toBuffer();

      // Perform OCR
      const { data: { text } } = await Tesseract.recognize(optimizedBuffer, 'eng', {
        logger: m => console.log(m)
      });

      return text;
    } catch (error) {
      console.error('Image OCR processing error:', error);
      throw new Error('Failed to process image file');
    }
  }

  // Validate file before processing
  validateFile(file) {
    const errors = [];

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      errors.push('File size must be less than 5MB');
    }

    // Check file format
    const ext = path.extname(file.originalname).toLowerCase();
    if (!this.supportedFormats.includes(ext)) {
      errors.push(`Unsupported file format. Supported formats: ${this.supportedFormats.join(', ')}`);
    }

    // Check file name
    if (!file.originalname || file.originalname.trim().length === 0) {
      errors.push('Invalid file name');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Clean up temporary files
  async cleanupFile(filePath) {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error('File cleanup error:', error);
      // Don't throw error for cleanup failures
    }
  }

  // Extract structured data from raw text
  extractBasicInfo(text) {
    const info = {
      emails: [],
      phones: [],
      urls: []
    };

    // Extract emails
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    info.emails = [...new Set(text.match(emailRegex) || [])];

    // Extract phone numbers (various formats)
    const phoneRegex = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g;
    const phoneMatches = text.match(phoneRegex) || [];
    info.phones = [...new Set(phoneMatches.map(phone => phone.replace(/\D/g, '')))];

    // Extract URLs
    const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    info.urls = [...new Set(text.match(urlRegex) || [])];

    return info;
  }

  // Data quality validation
  validateExtractedData(data) {
    const quality = {
      score: 0,
      issues: [],
      suggestions: []
    };

    let score = 0;

    // Check personal info completeness
    if (data.personalInfo) {
      if (data.personalInfo.name) score += 20;
      else quality.issues.push('Missing name information');
      
      if (data.personalInfo.email) score += 15;
      else quality.issues.push('Missing email information');
      
      if (data.personalInfo.phone) score += 10;
      else quality.suggestions.push('Consider adding phone number');
    }

    // Check education section
    if (data.education && data.education.length > 0) {
      score += 20;
    } else {
      quality.issues.push('Missing education information');
    }

    // Check work experience
    if (data.workExperience && data.workExperience.length > 0) {
      score += 25;
      
      // Check if experience has details
      const hasDetailedExperience = data.workExperience.some(exp => 
        exp.responsibilities && exp.responsibilities.length > 0
      );
      
      if (!hasDetailedExperience) {
        quality.suggestions.push('Add more detailed job responsibilities');
      }
    } else {
      quality.issues.push('Missing work experience information');
    }

    // Check skills
    if (data.skills && (data.skills.technical?.length > 0 || data.skills.soft?.length > 0)) {
      score += 10;
    } else {
      quality.suggestions.push('Add skills section for better matching');
    }

    quality.score = score;
    
    if (score >= 80) quality.level = 'Excellent';
    else if (score >= 60) quality.level = 'Good';
    else if (score >= 40) quality.level = 'Fair';
    else quality.level = 'Needs Improvement';

    return quality;
  }
}

module.exports = DocumentProcessor; 