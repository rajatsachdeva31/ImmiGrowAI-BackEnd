const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();
const availabilityRouter = express.Router();

// Convert Local Time to UTC Before Storing in DB
const convertToUTC = (dateString) => {
  return new Date(dateString).toISOString(); // Converts local datetime to UTC format
};

// // Convert UTC Time from DB to User's System Timezone Before Responding
// const convertToUserTimezone = (utcDate, userTimezone) => {
//   const date = new Date(utcDate);
//   if (isNaN(date.getTime())) return "Invalid Date"; // Prevents errors

//   return date.toISOString(); // Returns valid ISO 8601 format
// };


// ADD Availability (Store UTC in DB)
availabilityRouter.post("/add", verifyToken, async (req, res) => {
  try {
    const { startTime, endTime, status } = req.body;

    // Convert input time to UTC before storing
    const startTimeUTC = convertToUTC(startTime);
    const endTimeUTC = convertToUTC(endTime);

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const availability = await prisma.availability.create({
      data: {
        userId: user.id,
        startTime: startTimeUTC,
        endTime: endTimeUTC,
        status: status || "Available",
      },
    });

    res.json(availability);
  } catch (error) {
    console.error("Error creating availability:", error);
    res.status(500).json({ error: "Error creating availability" });
  }
});

// GET User Availability (Convert UTC to Local Time)
availabilityRouter.get("/byId", verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    // Calculate UTC timestamp for 2 days ago
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    // Fetch availability with UTC filter
    const availability = await prisma.availability.findMany({
      where: {
        userId: user.id,
        status: "Available",
        startTime: { gte: twoDaysAgo.toISOString() }, // Ensure startTime is >= 2 days ago (UTC)
      },
    });

    if (!availability.length) return res.status(200).json([]);

    // Convert UTC times to User's Timezone for display
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const convertToUserTimezone = (date) =>
      new Date(date).toLocaleString("en-US", { timeZone: userTimezone });

    const formattedAvailability = availability.map((slot) => ({
      id: slot.id,
      startTime: convertToUserTimezone(slot.startTime),
      endTime: convertToUserTimezone(slot.endTime),
      status: slot.status,
    }));


    res.json(formattedAvailability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ error: "Error fetching availability" });
  }
});

// UPDATE Availability (Convert Local Time to UTC Before Updating)
availabilityRouter.put("/update/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { startTime, endTime, status } = req.body;

    const startTimeUTC = convertToUTC(startTime);
    const endTimeUTC = convertToUTC(endTime);

    const availability = await prisma.availability.update({
      where: { id: parseInt(id) },
      data: {
        startTime: startTimeUTC,
        endTime: endTimeUTC,
        status,
      },
    });

    res.json(availability);
  } catch (error) {
    console.error("Error updating availability:", error);
    res.status(500).json({ error: "Error updating availability" });
  }
});

// DELETE Availability (Added `verifyToken`)
availabilityRouter.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.availability.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting availability:", error);
    res.status(500).json({ error: "Error deleting availability" });
  }
});

//  GET Available Slots Based on Car or House Listing (Convert UTC to User's Timezone)


availabilityRouter.get("/express-interest", verifyToken, async (req, res) => {
  try {
    const { type, listingId } = req.query;

    if (!type || !listingId) {
      return res.status(400).json({ error: "Missing type or listingId" });
    }

    let listing, user;

    if (type === "car") {
      listing = await prisma.carListing.findUnique({
        where: { id: parseInt(listingId) },
        select: { dealershipId: true },
      });
      user = await prisma.user.findUnique({
        where: { id: listing?.dealershipId },
      });
    } else {
      listing = await prisma.houseListing.findUnique({
        where: { id: parseInt(listingId) },
        select: { landlordId: true },
      });
      user = await prisma.user.findUnique({
        where: { id: listing?.landlordId },
      });
    }

    if (!user) return res.status(404).json({ error: "Owner not found" });

    let availability = await prisma.availability.findMany({
      where: { userId: user.id, status: "Available" },
    });

    if (!availability.length) return res.status(200).json([]);

    // Get user timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get current time in user's timezone
    const currentTime = new Date().toLocaleString("en-US", { timeZone: userTimezone });

    const filteredAvailability = availability
      .map((slot) => ({
        id: slot.id,
        startTime: new Date(slot.startTime).toLocaleString("en-US", { timeZone: userTimezone }),
        endTime: new Date(slot.endTime).toLocaleString("en-US", { timeZone: userTimezone }),
        status: slot.status,
      }))
      .filter((slot) => new Date(slot.startTime) > new Date(currentTime));

    res.json(filteredAvailability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ error: "Error fetching availability" });
  }
});

availabilityRouter.get("/consultant-availability/:listingId", verifyToken, async (req, res) => {
  try {

    const { listingId } = req.params;
  
    // Fetch availability with UTC filter
    const availability = await prisma.availability.findMany({
      where: {
        userId: parseInt(listingId),
        status: "Available",
      },
    });

    if (!availability.length) return res.status(200).json([]);

    // Convert UTC times to User's Timezone for display
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get current time in user's timezone
    const currentTime = new Date().toLocaleString("en-US", { timeZone: userTimezone });

    const filteredAvailability = availability
      .map((slot) => ({
        id: slot.id,
        startTime: new Date(slot.startTime).toLocaleString("en-US", { timeZone: userTimezone }),
        endTime: new Date(slot.endTime).toLocaleString("en-US", { timeZone: userTimezone }),
        status: slot.status,
      }))
      .filter((slot) => new Date(slot.startTime) > new Date(currentTime));


    res.json(filteredAvailability);
  } catch (error) {
    console.error("Error fetching availability:", error);
    res.status(500).json({ error: "Error fetching availability" });
  }
});



module.exports = availabilityRouter;
