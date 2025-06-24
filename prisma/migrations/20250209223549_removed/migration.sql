/*
  Warnings:

  - You are about to drop the column `officeAddress` on the `CarDealership` table. All the data in the column will be lost.
  - You are about to drop the column `officeLocationAvailable` on the `CarDealership` table. All the data in the column will be lost.
  - You are about to drop the column `officeAddress` on the `Realtor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CarDealership" DROP COLUMN "officeAddress",
DROP COLUMN "officeLocationAvailable";

-- AlterTable
ALTER TABLE "Realtor" DROP COLUMN "officeAddress";
