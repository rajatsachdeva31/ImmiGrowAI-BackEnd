const express = require("express");
const router = express.Router();
require("dotenv").config(); // Load environment variables
const { createSupabaseClient, createSupabaseAdmin } = require("../config/supabase");


// **Routes**

// Register User with Email Verification
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const supabase = createSupabaseClient();
    
    // Sign up the user with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/auth/callback`
      }
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({
      message: "User registered successfully. A verification email has been sent to your email address.",
      userId: data.user?.id,
      emailSent: !data.user?.email_confirmed_at
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Resend Email Verification
router.post("/resend-verification", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const supabase = createSupabaseClient();
    
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/auth/callback`
      }
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Verification email resent successfully." });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Login User with Email Verification Check
router.post("/login", async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const supabase = createSupabaseClient();
    
    // Authenticate user with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Check if the user's email is verified
    if (!data.user.email_confirmed_at) {
      return res.status(403).json({
        error: "Email not verified. Please verify your email before logging in.",
        emailVerified: false,
        token: data.session?.access_token
      });
    }

    // Check if user exists in our database
    const supabaseAdmin = createSupabaseAdmin();
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select(`
        *,
        role:roles(*)
      `)
      .eq('email', data.user.email)
      .single();

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // 7 days or 1 day
    };

    res.cookie("token", data.session.access_token, cookieOptions);
    res.cookie("refreshtoken", data.session.refresh_token, cookieOptions);

    if (!user) {
      res.status(200).json({
        message: "Login successful",
        email: data.user.email,
        emailVerified: true,
        onboarded: false
      });
    } else {
      if (user.user_verified) {
        res.status(200).json({
          message: "Login successful",
          email: data.user.email,
          emailVerified: true,
          userVerified: user.user_verified,
          userRole: user.role?.name,
        });
      } else {
        res.status(200).json({
          message: "Login successful",
          email: data.user.email,
          emailVerified: true,
          userVerified: user.user_verified,
        });
      }
    }
    
  } catch (error) {
    console.error("Login failed:", error);
    res.status(400).json({ error: error.message });
  }
});

// Refresh Token
router.post("/refresh-token", async (req, res) => {
  const refreshToken = req.cookies.refreshtoken;

  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token found. Please log in again." });
  }

  try {
    const supabase = createSupabaseClient();
    
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: refreshToken
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    };

    res.cookie("token", data.session.access_token, cookieOptions);
    res.cookie("refreshtoken", data.session.refresh_token, cookieOptions);

    res.status(200).json({
      message: "Token refreshed successfully",
      token: data.session.access_token,
    });

  } catch (error) {
    console.error("Token refresh failed:", error);
    res.status(400).json({ error: error.message });
  }
});

// Password Reset Request
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const supabase = createSupabaseClient();
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/auth/reset-password`
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({
      message: "Password reset email sent successfully.",
    });

  } catch (error) {
    console.error("Password reset request failed:", error);
    res.status(400).json({ error: error.message });
  }
});

// Update Password (after reset)
router.post("/reset-password", async (req, res) => {
  const { access_token, refresh_token, new_password } = req.body;

  if (!access_token || !new_password) {
    return res.status(400).json({ error: "Access token and new password are required" });
  }

  try {
    const supabase = createSupabaseClient();
    
    // Set the session
    await supabase.auth.setSession({
      access_token,
      refresh_token
    });

    const { error } = await supabase.auth.updateUser({
      password: new_password
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({
      message: "Password updated successfully.",
    });

  } catch (error) {
    console.error("Password reset failed:", error);
    res.status(400).json({ error: error.message });
  }
});

// Logout
router.post("/logout", async (req, res) => {
  try {
    const supabase = createSupabaseClient();
    
    const { error } = await supabase.auth.signOut();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.clearCookie("token");
    res.clearCookie("refreshtoken");

    res.status(200).json({ message: "Logout successful" });

  } catch (error) {
    console.error("Logout failed:", error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

