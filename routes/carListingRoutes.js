const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');

// Configure Multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const carListingRouter = express.Router();

carListingRouter.post('/add-car-listing', verifyToken, upload.array('images', 3), async (req, res) => {
    try {
        if (!req.body.model || !req.body.make || !req.body.price) {
            return res.status(400).json({ error: "Missing required fields: model, make, or price" });
        }

        const user = await prisma.user.findUnique({
            where: { email: req.user.email }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        const { model, make, price, year, mileage, exteriorColor, interiorColor, transmission, vin, vehicleType, fuelType, noOfSeats, status } = req.body;
        const imageBuffers = req.files.map(file => ({ imageData: file.buffer }));

        const listing = await prisma.carListing.create({
            data: {
                model: model.trim(),
                make: make.trim(),
                price: parseFloat(price),
                year: parseInt(year),
                mileage: parseInt(mileage),
                exteriorColor: exteriorColor.trim(),
                interiorColor: interiorColor.trim(),
                transmission: transmission.trim(),
                vin: vin.trim(),
                vehicleType: vehicleType.trim(),
                fuelType: fuelType.trim(),
                noOfSeats: parseInt(noOfSeats),
                status: status.trim(),
                dealershipId: user.id,
                carImages: {
                    create: imageBuffers
                }
            },
            include: { carImages: true }
        });

        res.status(201).json({ message: "Car listing created successfully!", listing });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

carListingRouter.get('/all-car-listing', verifyToken, async (req, res) => {
    try {
        const carList = await prisma.carListing.findMany({
            include: { carImages: true }
        });

        if (!carList || carList.length === 0) {
            return res.status(404).json({ error: 'No car listings found' });
        }

        const formattedCarList = carList.map(car => ({
            ...car,
            carImages: car.carImages
                ? car.carImages.map(image => {
                    if (image.imageData && image.imageData instanceof Uint8Array) {
                        const base64String = `data:image/jpeg;base64,${Buffer.from(image.imageData).toString('base64')}`;
                        return {
                            id: image.id,
                            base64: base64String,
                        };
                    } else {
                        return {
                            id: image.id,
                            base64: null,
                        };
                    }
                })
                : [],
        }));

        res.status(200).json(formattedCarList);
    } catch (error) {
        console.error('Error fetching car listings:', error.message);
        res.status(500).json({ error: 'Failed to fetch car listings' });
    }
});

carListingRouter.get('/by-id-car-listing', verifyToken, async (req, res) => {
    try {
        const userWithListings = await prisma.user.findUnique({
            where: { email: req.user.email },
            include: {
                carListings: {
                    include: { carImages: true }
                }
            }
        });

        if (!userWithListings || userWithListings.carListings.length === 0) {
            return res.status(404).json({ error: 'No car listings found' });
        }

        const formattedCarList = userWithListings.carListings.map(car => ({
            ...car,
            carImages: car.carImages
                ? car.carImages.map(image => {
                    if (image.imageData && image.imageData instanceof Uint8Array) {
                        const base64String = `data:image/jpeg;base64,${Buffer.from(image.imageData).toString('base64')}`;
                        return {
                            id: image.id,
                            base64: base64String,
                        };
                    } else {
                        return {
                            id: image.id,
                            base64: null,
                        };
                    }
                })
                : [],
        }));

        res.status(200).json(formattedCarList);
    } catch (error) {
        console.error('Error fetching car listings:', error.message);
        res.status(500).json({ error: 'Failed to fetch car listings' });
    }
});

carListingRouter.get('/carlisting/:carListingId', verifyToken, async (req, res) => {
    try {
      const carListingId = parseInt(req.params.carListingId, 10);
  
      if (!carListingId) {
        return res.status(400).json({ error: 'houseListingId is required' });
      }
  
      // Ensure the listing exists before proceeding
      const carListing = await prisma.carListing.findUnique({
        where: { id: carListingId },
        select: { 
            id: true,
            make: true,
            model: true,
            price: true,
            year: true,
            mileage: true,
            exteriorColor: true,
            interiorColor: true,
            transmission: true,
            vin: true,
            vehicleType: true,
            noOfSeats: true,
            status: true,
            fuelType: true,
            createdAt:true,
            carImages: true, // Fetches all fields from the houseImages table
            dealership: { 
              select: { 
                fullName: true,
                phoneNo: true,
                email: true,
                carDealership: { 
                  select: { 
                    showroomLocations: true,
                    businessName: true,
                    financingOptions: true 
                  } 
                }
              } 
            }
          }
        });
  
      if (!carListing) {
        return res.status(404).json({ error: 'No house listings found' });
      }
  
      const formattedCarList = {
        ...carListing,
        carImages: carListing.carImages
          ? carListing.carImages.map(image => {
              // Convert Uint8Array to Base64 if valid
              if (image.imageData && image.imageData instanceof Uint8Array) {
                const base64String = `data:image/jpeg;base64,${Buffer.from(image.imageData).toString('base64')}`;
                return {
                  id: image.id,
                  base64: base64String,
                };
              } else {
                return {
                  id: image.id,
                  base64: null, // If imageData is invalid, return null
                };
              }
            })
          : [], // Ensure an empty array if no images
      };
  
      res.status(200).json(formattedCarList);
    } catch (error) {
      console.error('Error fetching car listings:', error.message);
      res.status(500).json({ error: 'Failed to fetch car listings' });
    }
  });

carListingRouter.delete('/delete-car-listing/:carListingId', verifyToken, async (req, res) => {
    try {
        const carListingId = parseInt(req.params.carListingId, 10);

        if (!carListingId) {
            return res.status(400).json({ error: 'carListingId is required' });
        }

        const carListing = await prisma.carListing.findUnique({
            where: { id: carListingId },
            include: { carImages: true }
        });

        if (!carListing) {
            return res.status(404).json({ error: 'Car listing not found' });
        }

        await prisma.carImage.deleteMany({
            where: { listingId: carListingId }
        });

        await prisma.carListing.delete({
            where: { id: carListingId }
        });

        res.status(200).json({ message: 'Car listing deleted successfully' });
    } catch (error) {
        console.error('Error deleting car listing:', error.message);
        res.status(500).json({ error: 'Failed to delete car listing' });
    }
});

carListingRouter.put('/update-car-listing/:id', verifyToken, upload.array('images', 3), async (req, res) => {
    try {
        const carId = parseInt(req.params.id);
        const { model, make, price, dealershipId,  year, mileage, exteriorColor, interiorColor, transmission, vin, vehicleType, fuelType, noOfSeats, status } = req.body;
        const imageBuffers = req.files.map(file => ({ imageData: file.buffer }));

        const updatedCar = await prisma.carListing.update({
            where: { id: carId },
            data: {
                model,
                make,
                price: parseFloat(price),
                dealershipId: dealershipId,
                year: parseInt(year, 10),
                mileage: parseInt(mileage, 10),
                exteriorColor: exteriorColor.trim(),
                interiorColor: interiorColor.trim(),
                transmission: transmission.trim(),
                vin: vin.trim(),
                vehicleType: vehicleType.trim(),
                fuelType: fuelType.trim(),
                noOfSeats: parseInt(noOfSeats),
                status: status.trim(),
                carImages: {
                    deleteMany: {},
                    create: imageBuffers
                }
            },
            include: { carImages: true }
        });

        res.status(200).json(updatedCar);
    } catch (error) {
        console.error('Error updating car listing:', error.message);
        res.status(500).json({ error: 'Failed to update car listing' });
    }
});

carListingRouter.delete('/delete-car-image/:id', verifyToken, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (!id) {
            return res.status(400).json({ error: 'Image Id is required' });
        }

        await prisma.carImage.delete({
            where: { id: id }
        });

        res.status(200).json({ message: 'Car Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting car image:', error.message);
        res.status(500).json({ error: 'Failed to delete car image' });
    }
});

// Add to FavouriteCar
carListingRouter.post('/add-to-favourites', verifyToken, async (req, res) => {
    const { listingId } = req.body;
  
    if (!listingId) {
      return res.status(400).json({ error: "listingId is required" });
    }
  
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.user.email },
        include: { role: true }
      });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      if (user.roleId !== 1) {
        return res.status(403).json({ error: "Only immigrants can add favourites" });
      }
  
      const favourite = await prisma.favouriteCar.create({
        data: {
          userId: user.id,
          listingId
        }
      });
  
      res.status(201).json({ message: "Car added to favourites", favourite });
    } catch (error) {
      if (error.code === 'P2002') {
        return res.status(400).json({ error: "Car already favourited" });
      }
      console.error("Add car to favourites error:", error);
      res.status(500).json({ error: "Failed to add to favourites" });
    }
  });

  // remove from favourite
  carListingRouter.delete('/remove-from-favourites/:listingId', verifyToken, async (req, res) => {
    const listingId = parseInt(req.params.listingId, 10);
  
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.user.email }
      });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await prisma.favouriteCar.delete({
        where: {
          userId_listingId: {
            userId: user.id,
            listingId
          }
        }
      });
  
      res.status(200).json({ message: 'Car removed from favourites' });
    } catch (error) {
      console.error("Remove favourite car error:", error);
      res.status(500).json({ error: 'Failed to remove car from favourites' });
    }
  });
  
  //All Favourite Cars
 carListingRouter.get('/favourites', verifyToken, async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.user.email }
      });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const favourites = await prisma.favouriteCar.findMany({
        where: { userId: user.id },
        include: {
          listing: {
            include: {
              carImages: true
            }
          }
        }
      });
  
      // Format image buffers
      const formatted = favourites.map(fav => {
        const listing = fav.listing;
  
        const formattedImages = listing.carImages.map(img => ({
          id: img.id,
          base64: img.imageData
            ? `data:image/jpeg;base64,${Buffer.from(img.imageData).toString('base64')}`
            : null
        }));
  
        return {
          ...listing,
          carImages: formattedImages
        };
      });
  
      res.status(200).json(formatted);
    } catch (error) {
      console.error("Fetch car favourites error:", error);
      res.status(500).json({ error: "Failed to fetch favourites" });
    }
  });
  
module.exports = carListingRouter;
