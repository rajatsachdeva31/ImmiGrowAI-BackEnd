const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config(); // Load environment variables
const admin = require("../middleware/firebaseAdminMiddleware");
const decryptPasswordMiddleware = require("../middleware/decryptionMiddleware");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Firebase REST API base URL and API key
const FIREBASE_AUTH_URL = process.env.FIREBASE_AUTH_URL;
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;


// Helper function for Firebase API interaction
const firebaseRequest = async (url, data) => {
  try {
    const response = await axios.post(`${FIREBASE_AUTH_URL}:${url}?key=${FIREBASE_API_KEY}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || { message: "An unknown error occurred." };
  }
};

// **Routes**


// Register User with Email Verification
router.post("/signup", decryptPasswordMiddleware, async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Sign up the user
    const result = await firebaseRequest("signUp", {
      email,
      password,
      returnSecureToken: true,
    });
    //console.log(result)

    // Send email verification
    const idToken = result.idToken;
   

    await firebaseRequest("sendOobCode", {
      requestType: "VERIFY_EMAIL",
      idToken,
    });

    res.cookie("refreshtoken", result.refreshToken, {
      httpOnly: true,  // Prevent access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      sameSite: "Strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days expiration or 1 day
    });

    res.status(200).json({
      message: "User registered successfully. A verification email has been sent to your email address.",
      userId: result.localId,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});


// Resend Email Verification
router.post("/resend-verification", async (req, res) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1]; // Extract token


  if (!idToken) {
    return res.status(400).json({ error: "ID Token is required" });
  }

  try {
    // Send a verification email
    await firebaseRequest("sendOobCode", {
      requestType: "VERIFY_EMAIL",
      idToken,
    });

    res.status(200).json({ message: "Verification email resent successfully." });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});


// Login User with Email Verification Check
router.post("/login", decryptPasswordMiddleware, async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Authenticate user
    const result = await firebaseRequest("signInWithPassword", {
      email,
      password,
      returnSecureToken: true,
    });
 
    const decodedToken = await admin.auth().verifyIdToken(result.idToken);

    // Check if the user's email is verified
    if (!decodedToken.email_verified) {
      return res.status(403).json({
        error: "Email not verified. Please verify your email before logging in.",
        emailVerified: decodedToken.email_verified,
        token: result.idToken
      });

      // if email verified check for user verified if user too - send role in reponse body for dashboard redirect else send useVerired  - false
    }
    else{

      const user = await prisma.user.findUnique({
        where: { email: decodedToken.email,
          
         },
         include: {
           role: true, 
         }
      });

      res.cookie("token", result.idToken, {
        httpOnly: true,  // Prevent access via JavaScript
        secure: process.env.NODE_ENV === "production", // Use HTTPS in production
        sameSite: "Strict", // CSRF protection
        maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // 7 days expiration or 1 day
      });
      res.cookie("refreshtoken", result.refreshToken, {
        httpOnly: true,  // Prevent access via JavaScript
        secure: process.env.NODE_ENV === "production", // Use HTTPS in production
        sameSite: "Strict", // CSRF protection
        maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // 7 days expiration or 1 day
      });
    
      if (user === null) {
        res.status(200).json({
          message: "Login successful",
          email: result.email,
          emailVerified: decodedToken.email_verified,
          onboarded: false
        });
      }
      else{
        if(decodedToken.email_verified && user.userVerified){
          res.status(200).json({
            message: "Login successful",
            email: result.email,
            emailVerified: decodedToken.email_verified,
            userVerified: user.userVerified,
            userRole:user.role.name,
          });
        }
        else{
          res.status(200).json({
            message: "Login successful",
            email: result.email,
            emailVerified: decodedToken.email_verified,
            userVerified: user.userVerified,
          });
        }
      }

     
    }
    
  } catch (error) {
    console.error("Login failed:", error);
    res.status(400).json({ error: error.message });
  }
});

router.post("/refresh-token", async (req, res) => {
  const refreshToken = req.cookies.refreshtoken;

  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token found. Please log in again." });
  }

  console.log("Received refresh token:", refreshToken);  // Log the token for debugging

  try {
    const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=${FIREBASE_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    const data = await response.json();

    console.log(data)

    if (!response.ok) {
      // Firebase returned an error, pass it to the client
      return res.status(400).json({ error: "Failed to refresh token", details: data });
    }

    // If the refresh was successful, send the new token as a cookie
    res.cookie("token", data.id_token, {
      httpOnly: true, // Prevent access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      sameSite: "Strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiration
    });

    res.status(200).json({ message: "Refresh token successful" });
  } catch (error) {
    console.error("Error during token refresh:", error);
    res.status(400).json({ error: "Failed to refresh token", details: error.message });
  }
});


//logout
router.post("/logout", (req, res) => {
  res.clearCookie("refreshtoken"); // Clear refresh token cookie
  res.status(200).json({ message: "Logout successful" });
});

// Google Sign-In
router.post("/google-signin", async (req, res) => {
  const { idToken, refreshToken, rememberMe } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: "Missing ID Token" });
  }

  try {
    // Verify ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, email, name } = decodedToken;

    const user = await prisma.user.findUnique({
      where: { email: decodedToken.email,
       },
       include: {
         role: true, 
       }
    });

    res.cookie("token", idToken, {
      httpOnly: true,  // Prevent access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      sameSite: "Strict", // CSRF protection
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // 7 days expiration or 1 day
    });
    res.cookie("refreshtoken", refreshToken, {
      httpOnly: true,  // Prevent access via JavaScript
      secure: process.env.NODE_ENV === "production", // Use HTTPS in production
      sameSite: "Strict", // CSRF protection
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // 7 days expiration or 1 day
    });
    
    if (user === null) {
      res.status(200).json({
        message: "Login successful",
        email: email,
        emailVerified: decodedToken.email_verified,
        onboarded: false
      });
    }
    else{
      if(user.userVerified){
        res.status(200).json({
          message: "Login successful",
          email: email,
          userVerified: user.userVerified,
          userRole:user.role.name,
        });
      }
      else{
        res.status(200).json({
          message: "Login successful",
          email: email,
          userVerified: user.userVerified,
        });
      }
    }

  } catch (error) {
    console.error("Error verifying ID token:", error);
    res.status(400).json({ error: "Invalid ID Token" });
  }
});

// Forgot Password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Request Firebase to generate password reset link
    await firebaseRequest("sendOobCode", {
      requestType: "PASSWORD_RESET",
      email,
    });

    res.status(200).json({ message: "Password reset link sent successfully. Check your email." });
  } catch (error) {
    console.error("Error sending password reset link:", error);
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;

