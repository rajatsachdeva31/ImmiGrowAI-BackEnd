-- AlterTable
ALTER TABLE "HouseListing" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "endTime" TEXT,
ADD COLUMN     "openhouse" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "startTime" TEXT,
ADD COLUMN     "startdate" TIMESTAMP(3);
