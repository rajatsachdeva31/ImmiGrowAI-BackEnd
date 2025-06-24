/*
  Warnings:

  - The primary key for the `Appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Appointment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CarBooking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CarBooking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CarDocument` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CarDocument` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CarImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CarImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CarListing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CarListing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Checklist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Checklist` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Consultation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Consultation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HouseBooking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `HouseBooking` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HouseImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `HouseImage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `HouseListing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `HouseListing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PropertyDocument` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `PropertyDocument` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Role` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserChecklistItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserChecklistItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserDocument` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserDocument` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `userId` on the `Appointment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `consultationId` on the `Appointment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `CarBooking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `listingId` on the `CarBooking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `listingId` on the `CarDocument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `listingId` on the `CarImage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dealershipId` on the `CarListing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `consultantId` on the `Consultation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `HouseBooking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `listingId` on the `HouseBooking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `listingId` on the `HouseImage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `landlordId` on the `HouseListing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `listingId` on the `PropertyDocument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `roleId` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `UserChecklistItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `checklistId` on the `UserChecklistItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `UserDocument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_consultationId_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_userId_fkey";

-- DropForeignKey
ALTER TABLE "CarBooking" DROP CONSTRAINT "CarBooking_listingId_fkey";

-- DropForeignKey
ALTER TABLE "CarBooking" DROP CONSTRAINT "CarBooking_userId_fkey";

-- DropForeignKey
ALTER TABLE "CarDocument" DROP CONSTRAINT "CarDocument_listingId_fkey";

-- DropForeignKey
ALTER TABLE "CarImage" DROP CONSTRAINT "CarImage_listingId_fkey";

-- DropForeignKey
ALTER TABLE "CarListing" DROP CONSTRAINT "CarListing_dealershipId_fkey";

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_consultantId_fkey";

-- DropForeignKey
ALTER TABLE "HouseBooking" DROP CONSTRAINT "HouseBooking_listingId_fkey";

-- DropForeignKey
ALTER TABLE "HouseBooking" DROP CONSTRAINT "HouseBooking_userId_fkey";

-- DropForeignKey
ALTER TABLE "HouseImage" DROP CONSTRAINT "HouseImage_listingId_fkey";

-- DropForeignKey
ALTER TABLE "HouseListing" DROP CONSTRAINT "HouseListing_landlordId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "PropertyDocument" DROP CONSTRAINT "PropertyDocument_listingId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserChecklistItem" DROP CONSTRAINT "UserChecklistItem_checklistId_fkey";

-- DropForeignKey
ALTER TABLE "UserChecklistItem" DROP CONSTRAINT "UserChecklistItem_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserDocument" DROP CONSTRAINT "UserDocument_userId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "consultationId",
ADD COLUMN     "consultationId" INTEGER NOT NULL,
ADD CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CarBooking" DROP CONSTRAINT "CarBooking_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "listingId",
ADD COLUMN     "listingId" INTEGER NOT NULL,
ADD CONSTRAINT "CarBooking_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CarDocument" DROP CONSTRAINT "CarDocument_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "listingId",
ADD COLUMN     "listingId" INTEGER NOT NULL,
ADD CONSTRAINT "CarDocument_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CarImage" DROP CONSTRAINT "CarImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "listingId",
ADD COLUMN     "listingId" INTEGER NOT NULL,
ADD CONSTRAINT "CarImage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CarListing" DROP CONSTRAINT "CarListing_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "dealershipId",
ADD COLUMN     "dealershipId" INTEGER NOT NULL,
ADD CONSTRAINT "CarListing_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Checklist" DROP CONSTRAINT "Checklist_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Checklist_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "consultantId",
ADD COLUMN     "consultantId" INTEGER NOT NULL,
ADD CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HouseBooking" DROP CONSTRAINT "HouseBooking_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "listingId",
ADD COLUMN     "listingId" INTEGER NOT NULL,
ADD CONSTRAINT "HouseBooking_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HouseImage" DROP CONSTRAINT "HouseImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "listingId",
ADD COLUMN     "listingId" INTEGER NOT NULL,
ADD CONSTRAINT "HouseImage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "HouseListing" DROP CONSTRAINT "HouseListing_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "landlordId",
ADD COLUMN     "landlordId" INTEGER NOT NULL,
ADD CONSTRAINT "HouseListing_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Payment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PropertyDocument" DROP CONSTRAINT "PropertyDocument_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "listingId",
ADD COLUMN     "listingId" INTEGER NOT NULL,
ADD CONSTRAINT "PropertyDocument_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "roleId",
ADD COLUMN     "roleId" INTEGER NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserChecklistItem" DROP CONSTRAINT "UserChecklistItem_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "checklistId",
ADD COLUMN     "checklistId" INTEGER NOT NULL,
ADD CONSTRAINT "UserChecklistItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserDocument" DROP CONSTRAINT "UserDocument_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "UserDocument_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseListing" ADD CONSTRAINT "HouseListing_landlordId_fkey" FOREIGN KEY ("landlordId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarListing" ADD CONSTRAINT "CarListing_dealershipId_fkey" FOREIGN KEY ("dealershipId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseBooking" ADD CONSTRAINT "HouseBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseBooking" ADD CONSTRAINT "HouseBooking_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "HouseListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarBooking" ADD CONSTRAINT "CarBooking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarBooking" ADD CONSTRAINT "CarBooking_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "CarListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDocument" ADD CONSTRAINT "UserDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyDocument" ADD CONSTRAINT "PropertyDocument_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "HouseListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarDocument" ADD CONSTRAINT "CarDocument_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "CarListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChecklistItem" ADD CONSTRAINT "UserChecklistItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChecklistItem" ADD CONSTRAINT "UserChecklistItem_checklistId_fkey" FOREIGN KEY ("checklistId") REFERENCES "Checklist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_consultantId_fkey" FOREIGN KEY ("consultantId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "Consultation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseImage" ADD CONSTRAINT "HouseImage_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "HouseListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "CarListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
