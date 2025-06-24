const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const { createSupabaseAdmin } = require('../../config/supabase');

const userDetailRouter = express.Router();

userDetailRouter.get("/user-details", verifyToken, async (req, res) => {
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
            .neq('role_id', 5);
        
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Failed to fetch users' });
        }
        
        if (!users || users.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }

        res.status(200).json({ user: users });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

userDetailRouter.get("/user-details/:userId", verifyToken, async (req, res) => {
    try {
        const supabase = createSupabaseAdmin();
        const userId = req.params.userId;
        
        const { data: user, error } = await supabase
            .from('users')
            .select(`
                *,
                realtors(*),
                car_dealerships(*),
                immigration_consultants(*),
                user_documents(id)
            `)
            .eq('id', userId)
            .single();
        
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Failed to fetch user' });
        }
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ error: error.message });
    }
});

userDetailRouter.get("/user-document/:documentId", verifyToken, async (req, res) => {
    try {
        const supabase = createSupabaseAdmin();
        const documentId = parseInt(req.params.documentId, 10);
        
        if (isNaN(documentId)) {
            return res.status(400).json({ error: "Invalid document ID" });
        }

        const { data: document, error } = await supabase
            .from('user_documents')
            .select('file_path, document_type')
            .eq('id', documentId)
            .single();

        if (error || !document) {
            return res.status(404).json({ error: "Document not found" });
        }

        // Get the file from Supabase Storage
        const { data: fileData, error: fileError } = await supabase.storage
            .from('user-documents')
            .download(document.file_path);

        if (fileError || !fileData) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Convert blob to buffer
        const pdfBuffer = Buffer.from(await fileData.arrayBuffer());

        // Set response headers for PDF display in iframe
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline"); // View in browser/iframe
        res.send(pdfBuffer);
    } catch (error) {
        console.error("Error fetching document:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = userDetailRouter;