const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const { createSupabaseAdmin } = require("../config/supabase");

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

    const supabase = createSupabaseAdmin();
    
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('email', req.user.email)
      .single();

    if (userError || !user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { data: availability, error } = await supabase
      .from('availability')
      .insert({
        user_id: user.id,
        start_time: startTimeUTC,
        end_time: endTimeUTC,
        status: status || "Available",
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating availability:", error);
      return res.status(500).json({ error: "Error creating availability" });
    }

    res.json(availability);
  } catch (error) {
    console.error("Error creating availability:", error);
    res.status(500).json({ error: "Error creating availability" });
  }
});

// GET User Availability (Convert UTC to Local Time)
availabilityRouter.get("/byId", verifyToken, async (req, res) => {
  try {
    const supabase = createSupabaseAdmin();
    
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('id')
      .eq('email', req.user.email)
      .single();

    if (userError || !user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Calculate UTC timestamp for 2 days ago
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    // Fetch availability with UTC filter
    const { data: availability, error } = await supabase
      .from('availability')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'Available')
      .gte('start_time', twoDaysAgo.toISOString());

    if (error) {
      console.error("Error fetching availability:", error);
      return res.status(500).json({ error: "Error fetching availability" });
    }

    if (!availability || !availability.length) {
      return res.status(200).json([]);
    }

    // Convert UTC times to User's Timezone for display
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const convertToUserTimezone = (date) =>
      new Date(date).toLocaleString("en-US", { timeZone: userTimezone });

    const formattedAvailability = availability.map((slot) => ({
      id: slot.id,
      startTime: convertToUserTimezone(slot.start_time),
      endTime: convertToUserTimezone(slot.end_time),
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

    const supabase = createSupabaseAdmin();
    
    const { data: availability, error } = await supabase
      .from('availability')
      .update({
        start_time: startTimeUTC,
        end_time: endTimeUTC,
        status,
      })
      .eq('id', parseInt(id))
      .select()
      .single();

    if (error) {
      console.error("Error updating availability:", error);
      return res.status(500).json({ error: "Error updating availability" });
    }

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
    
    const supabase = createSupabaseAdmin();
    
    const { error } = await supabase
      .from('availability')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      console.error("Error deleting availability:", error);
      return res.status(500).json({ error: "Error deleting availability" });
    }

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

    const supabase = createSupabaseAdmin();
    let listing, user;

    if (type === "car") {
      const { data: carListing, error: carError } = await supabase
        .from('car_listings')
        .select('dealership_id')
        .eq('id', parseInt(listingId))
        .single();

      if (carError || !carListing) {
        return res.status(404).json({ error: "Car listing not found" });
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('id', carListing.dealership_id)
        .single();

      user = userData;
    } else {
      const { data: houseListing, error: houseError } = await supabase
        .from('house_listings')
        .select('landlord_id')
        .eq('id', parseInt(listingId))
        .single();

      if (houseError || !houseListing) {
        return res.status(404).json({ error: "House listing not found" });
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('id', houseListing.landlord_id)
        .single();

      user = userData;
    }

    if (!user) return res.status(404).json({ error: "Owner not found" });

    const { data: availability, error: availError } = await supabase
      .from('availability')
      .select('*')
      .eq('user_id', user.id)
      .eq('status', 'Available');

    if (availError) {
      console.error("Error fetching availability:", availError);
      return res.status(500).json({ error: "Error fetching availability" });
    }

    if (!availability || !availability.length) {
      return res.status(200).json([]);
    }

    // Get user timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get current time in user's timezone
    const currentTime = new Date().toLocaleString("en-US", { timeZone: userTimezone });

    const filteredAvailability = availability
      .map((slot) => ({
        id: slot.id,
        startTime: new Date(slot.start_time).toLocaleString("en-US", { timeZone: userTimezone }),
        endTime: new Date(slot.end_time).toLocaleString("en-US", { timeZone: userTimezone }),
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
