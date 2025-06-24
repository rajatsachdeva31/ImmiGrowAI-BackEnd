const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const roleBasedData = require('../middleware/roleBasedDataMiddleware');
const uploadDocuments = require('../middleware/uploadFileMiddleware'); // Import file upload middleware
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const onboardingRouter = express.Router();


onboardingRouter.post('/information', verifyToken,uploadDocuments, roleBasedData, async (req, res) => {
    try {
        // Validate uploaded documents based on role
        if (req.body.rolename === 'Immigrant' && !req.files['govId']) {
            return res.status(400).json({ error: 'Government ID is required for Immigrants.' });
        }

        if (req.body.rolename !== 'Immigrant' && (!req.files['govId'] || !req.files['businessDoc'] || !req.files['licenseCert'])) {
            return res.status(400).json({ error: 'All documents (Gov ID, Business Doc, License Cert) are required for this role.' });
        }

        // Start transaction
        const newUser = await prisma.$transaction(async (tx) => {
            // Create user
            const user = await tx.user.create({
                data: {
                    fullName: req.body.fullName,
                    DOB: new Date(req.body.DOB),
                    phoneNo: req.body.phoneNo,
                    email: req.user.email,
                    firebaseUid: req.user.uid,
                    alreadyInCanada: req.body.alreadyInCanada === "true" ? true : false,
                    countryOfOrigin: req.body.countryOfOrigin,
                    currentLocation: req.body.workSchoolLocation,
                    statusInCanada: req.body.statusInCanada || null,
                    roleId: req.body.roleId,
                    backgroundVerification: JSON.parse(req.body.backgroundVerification),
                    termsConditionCheck: JSON.parse(req.body.termsConditionCheck),

                    realtor: req.body.realtorData ? { create: req.body.realtorData } : undefined,
                    carDealership: req.body.carDealershipData ? { create: req.body.carDealershipData } : undefined,
                    immigrationConsultant: req.body.immigrationConsultantData
                        ? { create: req.body.immigrationConsultantData }
                        : undefined
                }
            });

            // Store uploaded files in the database
            const documents = [];

            if (req.files['govId']) {
                documents.push({
                    userId: user.id,
                    documentType: 'Government-Issued ID',
                    fileData: req.files['govId'][0].buffer
                });
            }

            if (req.body.roleName !== 'Immigrant') {
                if (req.files['businessDoc']) {
                    documents.push({
                        userId: user.id,
                        documentType: 'Business Verification Document',
                        fileData: req.files['businessDoc'][0].buffer
                    });
                }

                if (req.files['licenseCert']) {
                    documents.push({
                        userId: user.id,
                        documentType: 'License/Accreditation Certificate',
                        fileData: req.files['licenseCert'][0].buffer
                    });
                }
            }

            if (documents.length > 0) {
                await tx.userDocument.createMany({ data: documents });
            }

            return user;
        });

        res.status(201).json({ message: 'User and documents uploaded successfully', user: newUser });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to create user and upload documents' });
    }
});


onboardingRouter.get('/download/:documentId', verifyToken, async (req, res) => {
  try {
    // Get the documentId from the request params
    const documentId = parseInt(req.params.documentId, 10);

    // Retrieve the document from the database
    const document = await prisma.userDocument.findUnique({
      where: { id: documentId }
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Set appropriate headers for the response
    // Assuming the document is a PDF, change this for other file types (e.g., image/png, image/jpeg)
    res.setHeader('Content-Type', 'application/pdf');  // Set the correct MIME type for the document
    res.setHeader('Content-Disposition', `attachment; filename="${document.documentType}.pdf"`);  // Change the file name as needed

    // Send the file buffer directly to the response
    res.end(document.fileData);  // This sends the actual file content as a response to the client
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to download document' });
  }
});


module.exports = onboardingRouter;