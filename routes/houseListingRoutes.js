const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const { createSupabaseAdmin } = require('../config/supabase');
const multer = require('multer');

// Configure Multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const houseListingRouter = express.Router();

 // Change this to match the field name in Postman
  
  houseListingRouter.post('/add-house-listing', verifyToken, upload.array('images', 3), async (req, res) => {
    try {

        // Validate request body
        if (!req.body.title || !req.body.price || !req.body.location) {
            return res.status(400).json({ error: "Missing required fields: title, price, or location" });
        }

        const user = await prisma.user.findUnique({
            where: { email: req.user.email }
        });

        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }

        const { title, description, price, location, openhouse, bedrooms, bathrooms, sqft } = req.body;
         // Convert uploaded images to Buffer
        const imageBuffers = req.files.map(file => ({
          imageData: file.buffer // Save image as Buffer (BLOB)
        }));;

        // Create House Listing
        const listing = await prisma.houseListing.create({
            data: {
                title: title.trim(),
                description: description ? description.trim() : null,
                price: parseFloat(price) || 0, // Ensure it's a valid number
                location: location.trim(),
                landlordId: user.id,
                bedrooms: parseInt(bedrooms),
                bathrooms: parseInt(bathrooms),
                squareFeet: parseInt(sqft),
                openhouse : JSON.parse(openhouse) ? JSON.parse(openhouse) : false,
                startdate : JSON.parse(openhouse) ? new Date(req.body.startDate) : null,
                endDate : JSON.parse(openhouse) ? new Date(req.body.endDate) : null,
                startTime: JSON.parse(openhouse) ? req.body.startTime : null,
                endTime: JSON.parse(openhouse) ? req.body.endTime : null,
                houseImages: {
                  create: imageBuffers // Insert new images as BLOB
              }
            },
            include: { houseImages: true } 
        });

  

        res.status(201).json({ message: "Listing created successfully!", listing });
    } catch (error) {
        console.error(" Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

houseListingRouter.get('/download/:documentId', verifyToken, async (req, res) => {
    try {
      // Get the documentId from the request params
      const documentId = parseInt(req.params.documentId, 10);
  
      // Retrieve the image from the database (assuming you store the image as a buffer in `houseImage`)
      const document = await prisma.houseImage.findUnique({
        where: { id: documentId }
      });
  
      if (!document) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      // Set appropriate headers for the response based on file type
      const mimeType = 'image/jpeg';  // You can dynamically set this based on the file type if needed
  
      res.setHeader('Content-Type', mimeType);  // Set the correct MIME type for the image
      res.setHeader('Content-Disposition', `attachment; filename="image_${documentId}.jpg"`);  // Change file name as needed
  
      // Send the file buffer directly to the response
      res.end(document.imageData);  // This sends the image data as a response to the client
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Failed to download image' });
    }
  });

  houseListingRouter.get('/all-house-listing', verifyToken, async (req, res) => {
    try {
      const houseList = await prisma.houseListing.findMany({
        include: {
          houseImages: true, // Ensure images are included
        },
      });
  
      if (!houseList || houseList.length === 0) {
        return res.status(404).json({ error: 'No house listings found' });
      }
  
      const formattedHouseList = houseList.map(house => ({
        ...house,
        houseImages: house.houseImages
          ? house.houseImages.map(image => {
              // Convert Uint8Array to Base64
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
          : [],
      }));
  
      res.status(200).json(formattedHouseList);
    } catch (error) {
      console.error('Error fetching house listings:', error.message);
      res.status(500).json({ error: 'Failed to fetch house listings' });
    }
  });

  houseListingRouter.get('/by-id-house-listing', verifyToken, async (req, res) => {
    try {

 
      const userWithListings = await prisma.user.findUnique({
        where: { email: req.user.email },
        include: {
          houseListings: {
            include: {
              houseImages: true, // Fetch images for each house listing
            },
          },
        },
      });

  
      if (!userWithListings || userWithListings.length === 0) {
        return res.status(404).json({ error: 'No house listings found' });
      }
  
      const formattedHouseList = userWithListings.houseListings.map(house => ({
        ...house,
        houseImages: house.houseImages
          ? house.houseImages.map(image => {
              // Convert Uint8Array to Base64
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
          : [],
      }));
  
      res.status(200).json(formattedHouseList);
    } catch (error) {
      console.error('Error fetching house listings:', error.message);
      res.status(500).json({ error: 'Failed to fetch house listings' });
    }
  });

  houseListingRouter.get('/houselisting/:houseListingId', verifyToken, async (req, res) => {
    try {
      const houseListingId = parseInt(req.params.houseListingId, 10);
  
      if (!houseListingId) {
        return res.status(400).json({ error: 'houseListingId is required' });
      }
  
      // Ensure the listing exists before proceeding
      const houseListing = await prisma.houseListing.findUnique({
        where: { id: houseListingId },
        select: { 
          id: true,
          title: true,
          description: true,
          price: true,
          location:true,
          bedrooms: true,
          bathrooms: true,
          squareFeet:true,
          openhouse:true,
          startdate: true,
          endDate: true,
          startTime: true,
          endTime: true,
          createdAt:true,
          houseImages: true, 
          landlord: { 
            select: { 
              fullName: true,
              phoneNo: true,
              email: true,
              realtor: { 
                select: { 
                  businessName: true,
                  businessAddress: true,
                  portfolioWebsite: true 
                } 
              }
            } 
          }
        }
      });
       
  
      if (!houseListing) {
        return res.status(404).json({ error: 'No house listings found' });
      }
  
      const formattedHouseList = {
        ...houseListing,
        houseImages: houseListing.houseImages
          ? houseListing.houseImages.map(image => {
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
  
      res.status(200).json(formattedHouseList);
    } catch (error) {
      console.error('Error fetching house listings:', error.message);
      res.status(500).json({ error: 'Failed to fetch house listings' });
    }
  });
  

  houseListingRouter.delete('/delete-house-listing/:houseListingId', verifyToken, async (req, res) => {
    try {
      const houseListingId = parseInt(req.params.houseListingId, 10)
  
      if (!houseListingId) {
        return res.status(400).json({ error: 'houseListingId is required' });
      }
  
      // Ensure the listing exists before deleting
      const houseListing = await prisma.houseListing.findUnique({
        where: { id: houseListingId },
        include: { houseImages: true }, // To check if images exist
      });
  
      if (!houseListing) {
        return res.status(404).json({ error: 'House listing not found' });
      }
  
      // Delete house images first (only needed if cascade delete is not enabled in Prisma schema)
      await prisma.houseImage.deleteMany({
        where: { listingId: houseListingId },
      });
  
      // Delete the house listing
      await prisma.houseListing.delete({
        where: { id: houseListingId },
      });
  
      res.status(200).json({ message: 'House listing deleted successfully' });
    } catch (error) {
      console.error('Error deleting house listing:', error.message);
      res.status(500).json({ error: 'Failed to delete house listing' });
    }
  });
  
  
houseListingRouter.put('/update-house-listing/:id', verifyToken, upload.array('images', 3), async (req, res) => {
  try {
    const houseId = parseInt(req.params.id);
    const { title, description, price, location, landlordId, openhouse, bedrooms, bathrooms, sqft} = req.body;
    
    // Convert uploaded images to Buffer
    const imageBuffers = req.files.map(file => ({
        imageData: file.buffer // Save image as Buffer (BLOB)
    }));

    // Update house listing and images
    const updatedHouse = await prisma.houseListing.update({
        where: { id: houseId },
        data: {
            title,
            description,
            price: parseFloat(price),
            location,
            landlordId: landlordId,
            bedrooms: parseInt(bedrooms),
            bathrooms: parseInt(bathrooms),
            squareFeet: parseInt(sqft),
            openhouse : JSON.parse(openhouse) ? JSON.parse(openhouse) : false,
            startdate : JSON.parse(openhouse) ? new Date(req.body.startDate) : null,
            endDate : JSON.parse(openhouse) ? new Date(req.body.endDate) : null,
            startTime: JSON.parse(openhouse) ? req.body.startTime : null,
            endTime: JSON.parse(openhouse) ? req.body.endTime : null,
            houseImages: {
                deleteMany: {}, // Delete old images (optional)
                create: imageBuffers // Insert new images as BLOB
            }
        },
        include: { houseImages: true } // Return updated images
    });

    res.status(200).json(updatedHouse);
} catch (error) {
    console.error('Error updating house listing:', error.message);
    res.status(500).json({ error: 'Failed to update house listing' });
}
});

houseListingRouter.put('/openhouse/:id', verifyToken, async (req, res) => {
  try {
    const houseId = parseInt(req.params.id);
 

    // Update house listing and images
    const updatedHouse = await prisma.houseListing.update({
        where: { id: houseId },
        data: {
           
            openhouse : JSON.parse(req.body.openhouse) ? JSON.parse(req.body.openhouse) : false,
            startdate : JSON.parse(req.body.openhouse) ? new Date(req.body.startDate) : null,
            endDate : JSON.parse(req.body.openhouse) ? new Date(req.body.endDate) : null,
            startTime: JSON.parse(req.body.openhouse) ? req.body.startTime : null,
            endTime: JSON.parse(req.body.openhouse) ? req.body.endTime : null,
           
        } 
    });

    res.status(200).json(updatedHouse);
} catch (error) {
    console.error('Error updating house listing:', error.message);
    res.status(500).json({ error: 'Failed to update house listing' });
}
});


houseListingRouter.delete('/delete-house-image/:id', verifyToken, async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10)

    if (!id) {
      return res.status(400).json({ error: 'Image Id is required' });
    }

    // Delete house image
    await prisma.houseImage.delete({
      where: { id: id },
    });

    res.status(200).json({ message: 'House Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting house listing:', error.message);
    res.status(500).json({ error: 'Failed to delete house listing' });
  }
});
  

// Add to FavouriteHouse

houseListingRouter.post('/add-to-favourites', verifyToken, async (req, res) => {
  const { listingId } = req.body;
  

  if (!listingId) {
    return res.status(400).json({ error: 'listingId is required' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {email:req.user.email },
      include: { role: true } // to get roleId or role name
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if user is immigrant
    if (user.roleId !== 1) {
      return res.status(403).json({ error: 'Only immigrants can add favourites' });
    }

    const favourite = await prisma.favouriteHouse.create({
      data: {
        userId: user.id,
        listingId
      }
    });

    res.status(201).json({ message: 'House added to favourites', favourite });

  } catch (error) {
    console.error("Add house to favourites error:", error);
    res.status(500).json({ error: 'Failed to add to favourites' });
  }
});

//remove from FavouriteHouse
houseListingRouter.delete('/remove-from-favourites/:listingId', verifyToken, async (req, res) => {
  const listingId = parseInt(req.params.listingId, 10);
      console.log('Decoded User ID:', req.user.id);
  try {
    const user = await prisma.user.findUnique({
      where: { email:req.user.email }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await prisma.favouriteHouse.delete({
      where: {
        userId_listingId: {
          userId: user.id,      
          listingId
        }
      }
    });

    res.status(200).json({ message: 'House removed from favourites' });

  } catch (error) {
    console.error('Remove favourite error:', error);
    res.status(500).json({ error: 'Failed to remove house from favourites' });
  }
});

//all favourites
houseListingRouter.get('/favourites', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const favourites = await prisma.favouriteHouse.findMany({
      where: {
        userId: user.id,
      },
      include: {
        listing: {
          include: {
            houseImages: true
          }
        }
      }
    });

    // Extract and format listing data including images
    const listings = favourites.map(fav => {
      const listing = fav.listing;
      const formattedImages = listing.houseImages.map(image => ({
        id: image.id,
        base64: image.imageData
          ? `data:image/jpeg;base64,${Buffer.from(image.imageData).toString('base64')}`
          : null,
      }));

      return {
        ...listing,
        houseImages: formattedImages
      };
    });

    res.status(200).json(listings);
  } catch (error) {
    console.error('Fetch house favourites error:', error);
    res.status(500).json({ error: 'Failed to fetch favourite houses' });
  }
});

module.exports = houseListingRouter;