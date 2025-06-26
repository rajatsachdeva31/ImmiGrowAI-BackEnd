const express = require("express");
const { google } = require("googleapis");
const verifyToken = require("../middleware/authMiddleware");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { getAccessToken } = require("../middleware/oauthTokenMiddleware");
const appointmentRouter = express.Router();

const convertToUserTimezone = (utcDate, userTimezone) => {
  const date = new Date(utcDate);
  if (isNaN(date.getTime())) return "Invalid Date"; // Prevents errors

  return date.toISOString(); // Returns valid ISO 8601 format
};
// Function to Schedule Google Calendar Event
async function scheduleEvent(
  accessToken,
  userEmail,
  attendeesEmails,
  startTime,
  endTime,
  title
) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const calendar = google.calendar({ version: "v3", auth });

  const event = {
    summary: title,
    description: "Appointment scheduled via platform",
    start: { dateTime: startTime.toISOString(), timeZone: "UTC" },
    end: { dateTime: endTime.toISOString(), timeZone: "UTC" },
    attendees: [
      { email: userEmail }, // Add the current user
      { email: attendeesEmails }, // Add all attendees
    ],
    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: "all", // Ensures attendees receive email notifications
    });

    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw new Error({
      message: "Failed to schedule event",
      error: error.message,
    });
  }
}

// API Endpoint to Schedule an Appointment
appointmentRouter.post("/schedule", verifyToken, async (req, res) => {
  try {
    const listingId = parseInt(req.body.listingId);
    const availabilityId = parseInt(req.body.availabilityId);

    // Fetch the availability record from the database
    const availability = await prisma.availability.findUnique({
      where: { id: availabilityId },
      include: { user: { include: { role: true } } },
    });

    if (!availability) {
      return res.status(404).json({ error: "Availability not found" });
    }

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.googleRefreshToken) {
      return res.status(403).json({
        error:
          "Google Calendar access required. Please connect your Google account.",
        connectUrl: "http://localhost:5500/api/protected/oauth/auth/google",
      });
    }

    // Extract Start and End Time from the availability object
    const startTime = availability.startTime; // Ensure this field exists in your DB
    const endTime = availability.endTime; // Ensure this field exists in your DB

    if (!startTime || !endTime) {
      return res
        .status(400)
        .json({
          error: "Invalid availability data: Missing start or end time.",
        });
    }

    // Get Access Token from Refresh Token
    const accessToken = await getAccessToken(user.googleRefreshToken);
    const title = "Meeting with your mentor";

    // Schedule the event with attendees
    const event = await scheduleEvent(
      accessToken,
      req.user.email,
      availability.user.email,
      startTime,
      endTime,
      title
    );

    let appointment;
    if (availability.user.role.name === "Realtor") {
      appointment = await prisma.HouseBooking.create({
        data: {
          userId: user.id,
          listingId,
          startDate: startTime,
          endDate: endTime,
          status: "Confirmed",
          meetLink: event.hangoutLink,
        },
      });
    } else if (availability.user.role.name === "Car Dealership") {
      appointment = await prisma.CarBooking.create({
        data: {
          userId: user.id,
          listingId,
          startDate: startTime,
          endDate: endTime,
          status: "Confirmed",
          meetLink: event.hangoutLink,
        },
      });
    } else if (availability.user.role.name === "Immigration Consultant") {
      appointment = await prisma.ConsultationBooking.create({
        data: {
          userId: user.id,
          startDate: startTime,
          endDate: endTime,
          status: "Confirmed",
          meetLink: event.hangoutLink,
          consultantId: listingId,
        },
      });
    }

    await prisma.availability.update({
      where: { id: availabilityId },
      data: { status: "Booked" },
    });

    return res.status(201).json({ message: "Event scheduled", appointment });
  } catch (error) {
    console.error("Error scheduling appointment:", error);
    return res.status(500).json({ error: error.message });
  }
});

appointmentRouter.get("/user-info", verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { role: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Fetch house bookings with user details
    const houseBookings = await prisma.houseBooking.findMany({
      where: { listing: { landlordId: user.id }, status: "Confirmed" },
      include: {
        listing: true,
        user: true, // Fetch user who made the booking
      },
    });

    // Fetch car bookings with user details
    const carBookings = await prisma.CarBooking.findMany({
      where: { listing: { dealershipId: user.id }, status: "Confirmed" },
      include: {
        listing: true,
        user: true, // Fetch user who made the booking
      },
    });

    const consultationBookings = await prisma.ConsultationBooking.findMany({
      where: { consultantId: user.id, status: "Confirmed" },
      include: {
        user: true, // Fetch user who made the booking
      },
    });

    // Format house bookings with user details
    const formattedHouseBookings = houseBookings.map((slot) => ({
      id: slot.id,
      user: {
        id: slot.user.id,
        fullName: slot.user.fullName,
        email: slot.user.email,
        phoneNo: slot.user.phoneNo,
      },
      listing: {
        id: slot.listing.id,
        title: slot.listing.title,
        price: slot.listing.price,
        location: slot.listing.location,
      },
      startDate: convertToUserTimezone(slot.startDate, userTimezone),
      endDate: convertToUserTimezone(slot.endDate, userTimezone),
      status: slot.status,
      meetLink: slot.meetLink || null,
      createdAt: convertToUserTimezone(slot.createdAt, userTimezone),
    }));

    // Format car bookings with user details
    const formattedCarBookings = carBookings.map((slot) => ({
      id: slot.id,
      user: {
        id: slot.user.id,
        fullName: slot.user.fullName,
        email: slot.user.email,
        phoneNo: slot.user.phoneNo,
      },
      listing: {
        id: slot.listing.id,
        make: slot.listing.make,
        model: slot.listing.model,
        price: slot.listing.price,
        year: slot.listing.year,
      },
      startDate: convertToUserTimezone(slot.startDate, userTimezone),
      endDate: convertToUserTimezone(slot.endDate, userTimezone),
      status: slot.status,
      meetLink: slot.meetLink || null,
      createdAt: convertToUserTimezone(slot.createdAt, userTimezone),
    }));

    const formattedConsultationBookings = consultationBookings.map((slot) => ({
      id: slot.id,
      user: {
        id: slot.user.id,
        fullName: slot.user.fullName,
        email: slot.user.email,
        phoneNo: slot.user.phoneNo,
      },
      startDate: convertToUserTimezone(slot.startDate, userTimezone),
      endDate: convertToUserTimezone(slot.endDate, userTimezone),
      status: slot.status,
      meetLink: slot.meetLink || null,
      createdAt: convertToUserTimezone(slot.createdAt, userTimezone),
    }));

    // Structure the response
    const response = {
      success: true,

      houseBookings: formattedHouseBookings,
      carBookings: formattedCarBookings,
      icBookings: formattedConsultationBookings,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Error fetching user info" });
  }
});

appointmentRouter.get("/view-booking", verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { role: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Fetch house bookings with user details
    const houseBookings = await prisma.HouseBooking.findMany({
      where: { userId: user.id, status: "Confirmed" },
      include: {
        listing: {
          include: { landlord: true },
        }, // Fetch user who made the booking
      },
    });

    // Fetch car bookings with user details
    const carBookings = await prisma.CarBooking.findMany({
      where: { userId: user.id, status: "Confirmed" },
      include: {
        listing: {
          include: { dealership: true },
        }, // Fetch user who made the booking
      },
    });

    // Format house bookings with user details
    const formattedHouseBookings = houseBookings.map((slot) => ({
      id: slot.id,
      listing: {
        id: slot.listing.id,
        title: slot.listing.title,
        price: slot.listing.price,
        location: slot.listing.location,
        landlord: {
          id: slot.listing.landlord.id,
          fullName: slot.listing.landlord.fullName,
          email: slot.listing.landlord.email,
          phoneNo: slot.listing.landlord.phoneNo,
        },
      },
      startDate: convertToUserTimezone(slot.startDate, userTimezone),
      endDate: convertToUserTimezone(slot.endDate, userTimezone),
      status: slot.status,
      meetLink: slot.meetLink || null,
      createdAt: convertToUserTimezone(slot.createdAt, userTimezone),
    }));

    // Format car bookings with user details
    const formattedCarBookings = carBookings.map((slot) => ({
      id: slot.id,

      listing: {
        id: slot.listing.id,
        make: slot.listing.make,
        model: slot.listing.model,
        price: slot.listing.price,
        year: slot.listing.year,
        dealership: {
          id: slot.listing.dealership.id,
          fullName: slot.listing.dealership.fullName,
          email: slot.listing.dealership.email,
          phoneNo: slot.listing.dealership.phoneNo,
        },
      },
      startDate: convertToUserTimezone(slot.startDate, userTimezone),
      endDate: convertToUserTimezone(slot.endDate, userTimezone),
      status: slot.status,
      meetLink: slot.meetLink || null,
      createdAt: convertToUserTimezone(slot.createdAt, userTimezone),
    }));

    // Structure the response
    const response = {
      success: true,

      houseBookings: formattedHouseBookings,
      carBookings: formattedCarBookings,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching user info:", error);
    res.status(500).json({ error: "Error fetching user info" });
  }
});

appointmentRouter.put("/complete", verifyToken, async (req, res) => {
  try {
    const { id, type } = req.body;

    if (type === "car") {
      await prisma.CarBooking.update({
        where: { id: parseInt(id) },
        data: {
          status: "Completed",
        },
      });
    } else if (type === "house") {
      await prisma.HouseBooking.update({
        where: { id: parseInt(id) },
        data: {
          status: "Completed",
        },
      });
    } else if (type === "consultant") {
      await prisma.ConsultationBooking.update({
        where: { id: parseInt(id) },
        data: {
          status: "Completed",
        },
      });
    }

    res.status(200).json("Updated");
  } catch (error) {
    console.error("Error updating availability:", error);
    res.status(500).json({ error: "Error updating availability" });
  }
});

appointmentRouter.get("/booking-status", verifyToken, async (req, res) => {
  try {
    console.log("sam");
    const { listingId, type } = req.query; // Now we use req.body instead of req.query

    const user = await prisma.User.findUnique({
      where: { email: req.user.email },
    });
    console.log(req.query);

    if (!user) return res.status(404).json({ error: "User not found" });

    let booking = [];

    if (type == "car") {
      booking = await prisma.CarBooking.findMany({
        where: {
          listingId: parseInt(listingId),
          userId: user.id,
          status: "Confirmed",
        },
      });
    } else if (type == "house") {
      booking = await prisma.HouseBooking.findMany({
        where: {
          listingId: parseInt(listingId),
          userId: user.id,
          status: "Confirmed",
        },
      });
    } else if (type == "consultant") {
      booking = await prisma.ConsultationBooking.findMany({
        select: { endDate: true },
        where: {
          consultantId: parseInt(listingId),
          userId: user.id,
          status: "Confirmed",
        },
      });
    }

    if (booking.length > 0) {
      const response = { booking: booking };
      return res.status(200).json(response);
    } else {
      return res.status(404).json("Redirect to Booking");
    }
  } catch (error) {
    console.error("Error checking booking status:", error);
    res.status(500).json({ error: "Error checking booking status" });
  }
});

appointmentRouter.get("/view-Cbooking", verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { role: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Fetch consultation bookings for this user, including consultant and consultant.user info
    const consultationBookings = await prisma.consultationBooking.findMany({
      where: { userId: user.id, status: "Confirmed" },
      include: {
        consultant: true,
      },
    });

    // Format bookings
    const formattedConsultationBookings = consultationBookings.map((slot) => ({
      id: slot.id,
      consultantId: slot.consultantId,
      startDate: convertToUserTimezone(slot.startDate, userTimezone),
      endDate: convertToUserTimezone(slot.endDate, userTimezone),
      createdAt: convertToUserTimezone(slot.createdAt, userTimezone),
      status: slot.status,
      meetLink: slot.meetLink || null,
      consultant: {
        fullName: slot.consultant.fullName,
        email: slot.consultant.email,
        phoneNo: slot.consultant.phoneNo,
      },
    }));

    return res.json(formattedConsultationBookings);
  } catch (error) {
    console.error("Error fetching consultation bookings:", error);
    res.status(500).json({ error: "Error fetching consultation bookings" });
  }
});

module.exports = appointmentRouter;
