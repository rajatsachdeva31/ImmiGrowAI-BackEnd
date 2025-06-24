/*
  Warnings:

  - A unique constraint covering the columns `[phoneNo]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `DOB` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusInCanada" AS ENUM ('STUDY_PERMIT', 'WORK_PERMIT', 'PR', 'CITIZENSHIP');

-- CreateEnum
CREATE TYPE "YearsOfExperience" AS ENUM ('ONE_TO_FIVE', 'FIVE_TO_TEN', 'TEN_PLUS');

-- CreateEnum
CREATE TYPE "WorkType" AS ENUM ('BROKERAGE', 'INDEPENDENT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "DOB" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "phoneNo" TEXT NOT NULL,
ADD COLUMN     "statusInCanada" "StatusInCanada";

-- CreateTable
CREATE TABLE "Realtor" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "businessName" TEXT NOT NULL,
    "businessAddress" TEXT,
    "realEstateLicenseNumber" TEXT NOT NULL,
    "yearsOfExperience" "YearsOfExperience" NOT NULL,
    "affiliatedAssociations" TEXT,
    "areasCovered" TEXT[],
    "specialties" TEXT[],
    "portfolioWebsite" TEXT,
    "businessRegistration" TEXT NOT NULL,
    "workType" "WorkType" NOT NULL,
    "brokerageName" TEXT,
    "officeLocationAvailable" BOOLEAN NOT NULL,
    "officeAddress" TEXT NOT NULL,
    "teamMembers" INTEGER NOT NULL,
    "virtualPropertyTour" BOOLEAN NOT NULL,

    CONSTRAINT "Realtor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarDealership" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "showroomLocations" TEXT[],
    "testDrivePolicy" TEXT NOT NULL,
    "financingOptions" TEXT[],
    "tradeInAvailable" BOOLEAN NOT NULL,
    "serviceWarrantyInfo" TEXT NOT NULL,
    "businessRegistration" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "yearsInBusiness" "YearsOfExperience" NOT NULL,
    "dealershipLicenseNumber" TEXT NOT NULL,
    "carBrandsSold" TEXT[],
    "newOrUsedCars" TEXT[],
    "officeLocationAvailable" BOOLEAN NOT NULL,
    "officeAddress" TEXT,

    CONSTRAINT "CarDealership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImmigrationConsultant" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "countriesServed" TEXT[],
    "consultationFee" DOUBLE PRECISION,
    "businessRegistration" TEXT NOT NULL,
    "partneredLegalFirms" TEXT,
    "websiteOrSocialMedia" TEXT,
    "businessName" TEXT NOT NULL,
    "businessAddress" TEXT NOT NULL,
    "yearsOfExperience" "YearsOfExperience" NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "servicesOffered" TEXT[],
    "languagesSpoken" TEXT[],

    CONSTRAINT "ImmigrationConsultant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Realtor_userId_key" ON "Realtor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CarDealership_userId_key" ON "CarDealership"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ImmigrationConsultant_userId_key" ON "ImmigrationConsultant"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNo_key" ON "User"("phoneNo");

-- AddForeignKey
ALTER TABLE "Realtor" ADD CONSTRAINT "Realtor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarDealership" ADD CONSTRAINT "CarDealership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImmigrationConsultant" ADD CONSTRAINT "ImmigrationConsultant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
