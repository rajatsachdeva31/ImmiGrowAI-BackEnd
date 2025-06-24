const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const { createSupabaseAdmin } = require('../../config/supabase');

const verifyUserRouter = express.Router();

verifyUserRouter.get("/unverified-user", verifyToken, async (req, res) => {
    try {
        const supabase = createSupabaseAdmin();
        
        const { data: users, error } = await supabase
            .from('users')
            .select(`
                id,
                full_name,
                email,
                phone_no,
                dob,
                is_verified,
                status_in_canada,
                role_id,
                user_documents(id)
            `)
            .eq('is_verified', false)
            .neq('role_id', 5);
        
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Failed to fetch unverified users' });
        }
        
        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'No unverified users found' });
        }

        res.status(200).json({ user: users });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

verifyUserRouter.put("/verify-user", verifyToken, async (req, res) => {
    try {
        const supabase = createSupabaseAdmin();
        
        const { data: updatedUser, error } = await supabase
            .from('users')
            .update({ is_verified: true })
            .eq('id', req.body.id)
            .select()
            .single();
        
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Failed to verify user' });
        }

        // @manpreet - add send documents verified email here ..get email id from req.body.email

        res.status(200).json({ updatedUser });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

module.exports = verifyUserRouter;