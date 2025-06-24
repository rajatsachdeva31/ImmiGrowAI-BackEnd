-- AlterTable
ALTER TABLE "CarListing" ADD COLUMN     "exteriorColor" TEXT,
ADD COLUMN     "fuelType" TEXT,
ADD COLUMN     "interiorColor" TEXT,
ADD COLUMN     "mileage" INTEGER,
ADD COLUMN     "noOfSeats" INTEGER,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "transmission" TEXT,
ADD COLUMN     "vehicleType" TEXT,
ADD COLUMN     "vin" TEXT,
ADD COLUMN     "year" INTEGER;

-- AlterTable
ALTER TABLE "HouseListing" ADD COLUMN     "bathrooms" INTEGER,
ADD COLUMN     "bedrooms" INTEGER,
ADD COLUMN     "squareFeet" INTEGER;
