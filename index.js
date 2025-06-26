// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Import cookie-parser
require("dotenv").config(); // Load environment variables
const admin = require("./middleware/firebaseAdminMiddleware");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userRoutes = require('./routes/authRoutes'); 
const onboardingRoutes = require('./routes/onboardingRoutes'); 
const dashboardRoutes = require('./routes/dashboardRoutes'); 
const adminVerificationRoutes = require('./routes/admin/verifyUserRoute'); 
const adminUserRoutes = require('./routes/admin/userDetailsRoute'); 
const adminStatsRoutes = require('./routes/admin/adminStatsRoute'); 
const houseListingRoutes = require("./routes/houseListingRoutes");
const carListingRoutes = require("./routes/carListingRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const appointmentRoutes = require("./routes/appointment");
const calAuthRoutes = require("./routes/calendarAuthRoutes");
const consultantRoutes = require("./routes/consultantRoutes");
const aiRoutes = require("./routes/aiRoutes");
const aiRoutesLocal = require("./routes/aiRoutesLocal");
const careerRoutes = require("./routes/careerRoutes");

const app = express();
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:3000", "http://127.0.0.1:3000","http://localhost:5500", "http://127.0.0.1:5500","http://localhost:5501", "http://127.0.0.1:5501"], // Add both origins
  credentials: true, // Allow cookies and credentials
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
};


// Middleware
app.use( cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000","http://localhost:5500", "http://127.0.0.1:5500","http://localhost:5501", "http://127.0.0.1:5501"], // Add both origins
  credentials: true, // Allow cookies and credentials
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
}));

app.options("*", cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // Add cookie parser

app.get("/auth/token", async (req, res) => {
  const token = req.cookies.token;
 const decodedToken = await admin.auth().verifyIdToken(token);
 const user = await prisma.user.findUnique({
  where: {
    email: decodedToken.email
  },
  include: {
    role: true
  }
});

let roleName = user?.role?.name;
const verification = user?.userVerified;

if (!roleName) {
    roleName = "Onboarding";
}
else if (verification === false) {
  roleName = "NotVerified";
}

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  res.json({ token, roleName });
});


// Routes
app.use("/api/users", userRoutes);
app.use("/api/onboarding", onboardingRoutes);
app.use("/api/admin/verify", adminVerificationRoutes);
app.use("/api/admin/user-list", adminUserRoutes);
app.use("/api/admin/dashboard", adminStatsRoutes);
app.use("/api/protected/", dashboardRoutes);
app.use("/api/protected/house-listing", houseListingRoutes);
app.use("/api/protected/car-listing", carListingRoutes);
app.use("/api/protected/consultants", consultantRoutes);
app.use("/api/protected/availability", availabilityRoutes);
app.use("/api/protected/appointment", appointmentRoutes);
app.use("/api/protected/oauth", calAuthRoutes);
app.use("/api/protected/ai", aiRoutes);
app.use("/api/protected/ai-local", aiRoutesLocal);
app.use("/api/protected/career", careerRoutes);
// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
