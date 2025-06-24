/*
  Warnings:

  - Changed the type of `yearsInBusiness` on the `CarDealership` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `yearsOfExperience` on the `ImmigrationConsultant` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `yearsOfExperience` on the `Realtor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CarDealership" DROP COLUMN "yearsInBusiness",
ADD COLUMN     "yearsInBusiness" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ImmigrationConsultant" DROP COLUMN "yearsOfExperience",
ADD COLUMN     "yearsOfExperience" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Realtor" DROP COLUMN "yearsOfExperience",
ADD COLUMN     "yearsOfExperience" TEXT NOT NULL;

-- DropEnum
DROP TYPE "YearsOfExperience";
