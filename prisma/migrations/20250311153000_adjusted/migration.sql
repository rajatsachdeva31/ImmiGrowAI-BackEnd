/*
  Warnings:

  - You are about to drop the column `ListingId` on the `Availability` table. All the data in the column will be lost.
  - You are about to drop the column `listingType` on the `Availability` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `CarBooking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "ListingId",
DROP COLUMN "listingType";

-- AlterTable
ALTER TABLE "CarBooking" DROP COLUMN "updatedAt";
