-- CreateTable
CREATE TABLE "UserCareerProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "professionalSummary" TEXT,
    "skillsCategories" JSONB,
    "careerObjectives" TEXT,
    "targetIndustries" TEXT[],
    "marketAlignmentScore" INTEGER,
    "skillGaps" JSONB,
    "improvementRoadmap" JSONB,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserCareerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeAnalysis" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "fileData" BYTEA,
    "extractedText" TEXT,
    "structuredData" JSONB,
    "confidenceScores" JSONB,
    "userCorrections" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResumeAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "industryExpertise" TEXT[],
    "yearsOfExperience" TEXT NOT NULL,
    "specializations" TEXT[],
    "culturalBackground" TEXT,
    "languagesSpoken" TEXT[],
    "mentorshipCapacity" INTEGER NOT NULL DEFAULT 3,
    "availabilityHours" JSONB,
    "communicationStyle" TEXT[],
    "successStories" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MentorProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorshipMatch" (
    "id" SERIAL NOT NULL,
    "mentorId" INTEGER NOT NULL,
    "menteeId" INTEGER NOT NULL,
    "compatibilityScore" INTEGER NOT NULL,
    "matchReasoning" JSONB,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MentorshipMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoachingSession" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "sessionType" TEXT NOT NULL,
    "conversationHistory" JSONB,
    "sessionObjectives" TEXT[],
    "outcomes" JSONB,
    "progressMetrics" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoachingSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOpportunity" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,
    "requirements" TEXT[],
    "salaryRange" JSONB,
    "jobUrl" TEXT,
    "isNewcomerFriendly" BOOLEAN NOT NULL DEFAULT false,
    "discoveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "JobOpportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobMatch" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "matchScore" INTEGER NOT NULL,
    "matchAnalysis" JSONB,
    "skillsGaps" TEXT[],
    "applicationStatus" TEXT NOT NULL DEFAULT 'not_applied',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillGapAnalysis" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "currentSkills" JSONB,
    "targetSkills" JSONB,
    "identifiedGaps" JSONB,
    "learningPath" JSONB,
    "progressTracking" JSONB,
    "lastUpdated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SkillGapAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserCareerProfile_userId_key" ON "UserCareerProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "MentorProfile_userId_key" ON "MentorProfile"("userId");

-- AddForeignKey
ALTER TABLE "UserCareerProfile" ADD CONSTRAINT "UserCareerProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeAnalysis" ADD CONSTRAINT "ResumeAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorProfile" ADD CONSTRAINT "MentorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipMatch" ADD CONSTRAINT "MentorshipMatch_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "MentorProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorshipMatch" ADD CONSTRAINT "MentorshipMatch_menteeId_fkey" FOREIGN KEY ("menteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoachingSession" ADD CONSTRAINT "CoachingSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobMatch" ADD CONSTRAINT "JobMatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobMatch" ADD CONSTRAINT "JobMatch_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "JobOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SkillGapAnalysis" ADD CONSTRAINT "SkillGapAnalysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
