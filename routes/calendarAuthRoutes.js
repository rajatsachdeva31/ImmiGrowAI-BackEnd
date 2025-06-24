const express = require('express');
const { google } = require('googleapis');
const { createSupabaseAdmin } = require('../config/supabase');
require('dotenv').config();

const router = express.Router();

// Google OAuth Configuration
const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
);

// Step 1: Redirect User to Google Consent Page
router.get('/auth/google', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline', // Needed for refresh token
        prompt: 'consent', // Forces re-consent if already signed in
        scope: [
            'https://www.googleapis.com/auth/calendar.events',
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile',
        ]
    });

    res.redirect(authUrl);
});


// Step 2: Handle Google OAuth Callback
router.get('/auth/google/callback', async (req, res) => {
    try {
        const { code } = req.query;
        if (!code) return res.status(400).json({ error: 'Missing authorization code' });

        // Exchange authorization code for access token
        const { tokens } = await oauth2Client.getToken(code);
        if (!tokens.access_token) {
            return res.status(400).json({ error: 'Failed to obtain access token' });
        }

        // Set credentials before making API requests
        oauth2Client.setCredentials(tokens);

        // Use the access token to get user info
        const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
        const { data } = await oauth2.userinfo.get();

        if (!data.email) {
            return res.status(400).json({ error: 'Failed to retrieve user email' });
        }

        // Store refresh token in DB
        if (tokens.refresh_token) {
            const supabase = createSupabaseAdmin();
            const { error } = await supabase
                .from('users')
                .update({ google_refresh_token: tokens.refresh_token })
                .eq('email', data.email);
                
            if (error) {
                console.error('Error storing refresh token:', error);
            }
        }

        res.json({ success: true, message: "Google Calendar connected successfully!", email: data.email });
    } catch (error) {
        console.error('OAuth Callback Error:', error);
        res.status(500).json({ error: 'OAuth authentication failed' });
    }
});

module.exports = router;
