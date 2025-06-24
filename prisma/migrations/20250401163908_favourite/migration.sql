-- CreateTable
CREATE TABLE "FavouriteCar" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "listingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavouriteCar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavouriteHouse" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "listingId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavouriteHouse_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavouriteCar_userId_listingId_key" ON "FavouriteCar"("userId", "listingId");

-- CreateIndex
CREATE UNIQUE INDEX "FavouriteHouse_userId_listingId_key" ON "FavouriteHouse"("userId", "listingId");

-- AddForeignKey
ALTER TABLE "FavouriteCar" ADD CONSTRAINT "FavouriteCar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteCar" ADD CONSTRAINT "FavouriteCar_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "CarListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteHouse" ADD CONSTRAINT "FavouriteHouse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteHouse" ADD CONSTRAINT "FavouriteHouse_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "HouseListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
