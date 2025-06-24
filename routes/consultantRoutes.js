const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const { createSupabaseAdmin } = require("../config/supabase");
const consultantRouter = express.Router();



consultantRouter.get("/view-consultant", verifyToken, async (req, res) => {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.user.email },
      });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      if (!user.countryOfOrigin) {
        return res.status(400).json({ error: "User's country of origin not set" });
      }
  
      const consultants = await prisma.immigrationConsultant.findMany({
        include: {
          user: true,
        },
      });
      if(user.alreadyInCanada){
        return res.status(200).json({ consultants: consultants });
      }
      const filteredConsultants = consultants.filter((consultant) => {
        const countries = consultant.countriesServed
          .split(",")
          .map((c) => c.trim().toLowerCase());
        return countries.includes(user.countryOfOrigin.toLowerCase());
      });
  
      return res.status(200).json({ consultants: filteredConsultants });
    } catch (error) {
      console.error("Error fetching consultants:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  
  consultantRouter.get("/upcoming", verifyToken, async (req, res) => {
  try {
      const user = await prisma.user.findUnique({
        where: { email: req.user.email },
      });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const rawMeetings = await prisma.consultationBooking.findMany({
        where: {
          consultantId: user.id,
          startDate: {
            gte: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6-hour buffer to catch borderline cases
          },
          status: "Confirmed",
        },
        orderBy: { startDate: "asc" },
        include: {
          user: {
            select: {
              fullName: true,
              email: true,
              phoneNo: true,
            },
          },
        },
      });
      
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const nowInUserTZ = new Date().toLocaleString("en-US", { timeZone: userTimezone });
      const nowDate = new Date(nowInUserTZ);
  
      const convertToUserTimezone = (utcDate, userTimezone) => {
        const date = new Date(utcDate);
        if (isNaN(date.getTime())) return null;
        return new Date(date.toLocaleString("en-US", { timeZone: userTimezone }));
      };
  
      const upcoming = rawMeetings
        .map((meeting) => ({
          ...meeting,
          startDate: convertToUserTimezone(meeting.startDate, userTimezone),
        }))
        .filter((meeting) => meeting.startDate && meeting.startDate > nowDate)
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
        .slice(0, 3);
  
      return res.json({ success: true, meetings: upcoming });
    } catch (error) {
      console.error("Error fetching upcoming meetings:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  });
  

module.exports = consultantRouter;