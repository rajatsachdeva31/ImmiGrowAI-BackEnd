// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Import cookie-parser
require("dotenv").config(); // Load environment variables

// Validate required environment variables
const requiredEnvVars = ['SUPABASE_URL', 'SUPABASE_ANON_KEY', 'SUPABASE_SERVICE_ROLE_KEY'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars);
  console.error('📝 Please create a .env file in the BackEnd directory with the following variables:');
  missingEnvVars.forEach(envVar => {
    console.error(`${envVar}=your_value_here`);
  });
  process.exit(1);
}

console.log('✅ Environment variables loaded successfully');

const { createSupabaseAdmin } = require('./config/supabase');

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
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const supabase = createSupabaseAdmin();
    
    // Verify JWT token and get user
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !authUser) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Get user details with role
    const { data: user, error } = await supabase
      .from('users')
      .select(`
        id,
        email,
        is_verified,
        role:roles(name)
      `)
      .eq('email', authUser.email)
      .single();

    if (error || !user) {
      return res.status(404).json({ message: "User not found" });
    }

    let roleName = user?.role?.name;
    const verification = user?.is_verified;

    if (!roleName) {
        roleName = "Onboarding";
    }
    else if (verification === false) {
      roleName = "NotVerified";
    }

    res.json({ token, roleName });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(500).json({ message: "Server error" });
  }
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
// Error handling middleware
app.use((error, req, res, next) => {
  console.error('❌ Server Error:', error);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

// Start server
const PORT = process.env.PORT || 5500;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server successfully running on port ${PORT}`);
  console.log(`📍 API available at: http://localhost:${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('❌ Server Error:', error);
});
