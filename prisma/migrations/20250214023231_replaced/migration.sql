-- AlterTable
ALTER TABLE "CarDealership" ALTER COLUMN "showroomLocations" SET NOT NULL,
ALTER COLUMN "showroomLocations" SET DATA TYPE TEXT,
ALTER COLUMN "financingOptions" SET NOT NULL,
ALTER COLUMN "financingOptions" SET DATA TYPE TEXT,
ALTER COLUMN "carBrandsSold" SET NOT NULL,
ALTER COLUMN "carBrandsSold" SET DATA TYPE TEXT,
ALTER COLUMN "newOrUsedCars" SET NOT NULL,
ALTER COLUMN "newOrUsedCars" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ImmigrationConsultant" ALTER COLUMN "countriesServed" SET NOT NULL,
ALTER COLUMN "countriesServed" SET DATA TYPE TEXT,
ALTER COLUMN "servicesOffered" SET NOT NULL,
ALTER COLUMN "servicesOffered" SET DATA TYPE TEXT,
ALTER COLUMN "languagesSpoken" SET NOT NULL,
ALTER COLUMN "languagesSpoken" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Realtor" ALTER COLUMN "areasCovered" SET NOT NULL,
ALTER COLUMN "areasCovered" SET DATA TYPE TEXT,
ALTER COLUMN "specialties" SET NOT NULL,
ALTER COLUMN "specialties" SET DATA TYPE TEXT;
