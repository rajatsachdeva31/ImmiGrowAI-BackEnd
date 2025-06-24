const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const roleBasedData = require('../middleware/roleBasedDataMiddleware');
const uploadDocuments = require('../middleware/uploadFileMiddleware'); // Import file upload middleware
const { createSupabaseAdmin } = require('../config/supabase');

const onboardingRouter = express.Router();

onboardingRouter.post('/information', verifyToken, uploadDocuments, roleBasedData, async (req, res) => {
    try {
        const supabase = createSupabaseAdmin();

        // Validate uploaded documents based on role
        if (req.body.rolename === 'Immigrant' && !req.files['govId']) {
            return res.status(400).json({ error: 'Government ID is required for Immigrants.' });
        }

        if (req.body.rolename !== 'Immigrant' && (!req.files['govId'] || !req.files['businessDoc'] || !req.files['licenseCert'])) {
            return res.status(400).json({ error: 'All documents (Gov ID, Business Doc, License Cert) are required for this role.' });
        }

        // Create user data
        const userData = {
            full_name: req.body.fullName,
            dob: new Date(req.body.DOB).toISOString(),
            phone_no: req.body.phoneNo,
            email: req.user.email,
            id: req.user.id,
            already_in_canada: req.body.alreadyInCanada === "true",
            country_of_origin: req.body.countryOfOrigin,
            current_location: req.body.workSchoolLocation,
            status_in_canada: req.body.statusInCanada || null,
            role_id: req.body.roleId,
            background_verification: JSON.parse(req.body.backgroundVerification),
            terms_condition_check: JSON.parse(req.body.termsConditionCheck),
            is_verified: false
        };

        // Insert user
        const { data: newUser, error: userError } = await supabase
            .from('users')
            .insert(userData)
            .select()
            .single();

        if (userError) {
            console.error('User creation error:', userError);
            return res.status(500).json({ error: 'Failed to create user' });
        }

        // Create role-specific data
        if (req.body.realtorData) {
            const { error: realtorError } = await supabase
                .from('realtors')
                .insert({ ...req.body.realtorData, user_id: newUser.id });
            
            if (realtorError) {
                console.error('Realtor data error:', realtorError);
                return res.status(500).json({ error: 'Failed to create realtor data' });
            }
        }

        if (req.body.carDealershipData) {
            const { error: dealerError } = await supabase
                .from('car_dealerships')
                .insert({ ...req.body.carDealershipData, user_id: newUser.id });
            
            if (dealerError) {
                console.error('Car dealership data error:', dealerError);
                return res.status(500).json({ error: 'Failed to create car dealership data' });
            }
        }

        if (req.body.immigrationConsultantData) {
            const { error: consultantError } = await supabase
                .from('immigration_consultants')
                .insert({ ...req.body.immigrationConsultantData, user_id: newUser.id });
            
            if (consultantError) {
                console.error('Immigration consultant data error:', consultantError);
                return res.status(500).json({ error: 'Failed to create immigration consultant data' });
            }
        }

        // Store uploaded files in Supabase Storage and database
        const documents = [];

        if (req.files['govId']) {
            // Upload to Supabase Storage
            const fileName = `documents/${newUser.id}/gov-id-${Date.now()}.pdf`;
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('user-documents')
                .upload(fileName, req.files['govId'][0].buffer, {
                    contentType: 'application/pdf'
                });

            if (!uploadError) {
                documents.push({
                    user_id: newUser.id,
                    document_type: 'Government-Issued ID',
                    file_path: fileName,
                    file_size: req.files['govId'][0].size,
                    uploaded_at: new Date().toISOString()
                });
            }
        }

        if (req.body.roleName !== 'Immigrant') {
            if (req.files['businessDoc']) {
                const fileName = `documents/${newUser.id}/business-doc-${Date.now()}.pdf`;
                const { error: uploadError } = await supabase.storage
                    .from('user-documents')
                    .upload(fileName, req.files['businessDoc'][0].buffer, {
                        contentType: 'application/pdf'
                    });

                if (!uploadError) {
                    documents.push({
                        user_id: newUser.id,
                        document_type: 'Business Verification Document',
                        file_path: fileName,
                        file_size: req.files['businessDoc'][0].size,
                        uploaded_at: new Date().toISOString()
                    });
                }
            }

            if (req.files['licenseCert']) {
                const fileName = `documents/${newUser.id}/license-cert-${Date.now()}.pdf`;
                const { error: uploadError } = await supabase.storage
                    .from('user-documents')
                    .upload(fileName, req.files['licenseCert'][0].buffer, {
                        contentType: 'application/pdf'
                    });

                if (!uploadError) {
                    documents.push({
                        user_id: newUser.id,
                        document_type: 'License/Accreditation Certificate',
                        file_path: fileName,
                        file_size: req.files['licenseCert'][0].size,
                        uploaded_at: new Date().toISOString()
                    });
                }
            }
        }

        if (documents.length > 0) {
            const { error: documentsError } = await supabase
                .from('user_documents')
                .insert(documents);
            
            if (documentsError) {
                console.error('Documents creation error:', documentsError);
            }
        }

        res.status(201).json({ message: 'User and documents uploaded successfully', user: newUser });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to create user and upload documents' });
    }
});

onboardingRouter.get('/download/:documentId', verifyToken, async (req, res) => {
    try {
        const supabase = createSupabaseAdmin();
        const documentId = parseInt(req.params.documentId, 10);

        // Retrieve the document from the database
        const { data: document, error } = await supabase
            .from('user_documents')
            .select('*')
            .eq('id', documentId)
            .single();

        if (error || !document) {
            return res.status(404).json({ error: 'Document not found' });
        }

        // Get the file from Supabase Storage
        const { data: fileData, error: fileError } = await supabase.storage
            .from('user-documents')
            .download(document.file_path);

        if (fileError || !fileData) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Convert blob to buffer
        const buffer = Buffer.from(await fileData.arrayBuffer());

        // Set appropriate headers for the response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${document.document_type}.pdf"`);

        // Send the file buffer directly to the response
        res.end(buffer);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to download document' });
    }
});

module.exports = onboardingRouter;