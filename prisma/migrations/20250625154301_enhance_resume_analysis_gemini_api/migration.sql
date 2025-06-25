-- AlterTable
ALTER TABLE "ResumeAnalysis" ADD COLUMN     "canadianMarketAnalysis" JSONB,
ADD COLUMN     "certifications" JSONB,
ADD COLUMN     "education" JSONB,
ADD COLUMN     "metadata" JSONB,
ADD COLUMN     "personalInfo" JSONB,
ADD COLUMN     "processingMethod" TEXT,
ADD COLUMN     "professionalSummary" TEXT,
ADD COLUMN     "projects" JSONB,
ADD COLUMN     "skills" JSONB,
ADD COLUMN     "workExperience" JSONB;
