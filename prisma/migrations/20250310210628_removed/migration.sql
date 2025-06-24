/*
  Warnings:

  - You are about to drop the `Checklist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserChecklistItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `CarBooking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserChecklistItem" DROP CONSTRAINT "UserChecklistItem_checklistId_fkey";

-- DropForeignKey
ALTER TABLE "UserChecklistItem" DROP CONSTRAINT "UserChecklistItem_userId_fkey";

-- AlterTable
ALTER TABLE "CarBooking" ADD COLUMN     "meetLink" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "HouseBooking" ADD COLUMN     "meetLink" TEXT;

-- DropTable
DROP TABLE "Checklist";

-- DropTable
DROP TABLE "UserChecklistItem";

-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "listingType" TEXT,
    "ListingId" INTEGER,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
