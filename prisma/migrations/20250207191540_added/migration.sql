-- AlterTable
ALTER TABLE "User" ADD COLUMN     "backgroundVerification" BOOLEAN DEFAULT false,
ADD COLUMN     "termsConditionCheck" BOOLEAN DEFAULT false;
