const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userDetailRouter = express.Router();


userDetailRouter.get("/user-details",verifyToken, async (req, res) => {
    
    try {
      
       
          const user = await prisma.user.findMany({
            where: {
              roleId: {
                not: 5,
              },
            },
            select: {
              id: true,
              fullName: true,
              email: true,
              phoneNo: true,
              DOB: true,
              firebaseUid: true,
              userVerified: true,
              statusInCanada: true,
              roleId: true,
              userDocuments: {
                select: {
                  id: true, // Fetch only the document ID
                },
              },
            },
          });
          
          
        if (!user || user.length === 0) {
            return res.status(404).json({ error: 'No users found' });
          }
  
      res.status(200).json({user});
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ error: error.message });
    }
  });

  
userDetailRouter.get("/user-details/:userId",verifyToken, async (req, res) => {
    
  try {
    
      const user = await prisma.user.findUnique({
        where:{
          id:parseInt(req.params.userId)
        },
        include: {
          realtor: true,
          carDealership: true,
          immigrationConsultant: true,
          userDocuments: {
            select:{
              id:true
            }
          }
        }
        });
        
        
      if (!user || user.length === 0) {
          return res.status(404).json({ error: 'No users found' });
        }

    res.status(200).json({user});
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

userDetailRouter.get("/user-document/:documentId",verifyToken, async (req, res) => {
    
  try {
    const documentId = parseInt(req.params.documentId, 10);
    if (isNaN(documentId)) {
        return res.status(400).json({ error: "Invalid document ID" });
    }
  
    const document = await prisma.userDocument.findUnique({
        where: { id: documentId },
        select: {
            fileData: true, // File stored as BLOB (Bytes)
            documentType: true,
        },
    });
  
    if (!document) {
        return res.status(404).json({ error: "Document not found" });
    }
  
    // Convert BLOB to Buffer
    const pdfBuffer = Buffer.from(document.fileData);
  
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