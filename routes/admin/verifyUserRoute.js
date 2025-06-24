const express = require('express');
const verifyToken = require('../../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const verifyUserRouter = express.Router();


verifyUserRouter.get("/unverified-user",verifyToken, async (req, res) => {
    
    try {
      
      const user = await prisma.user.findMany({
        where: {
          userVerified: false,
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

verifyUserRouter.put("/verify-user",verifyToken, async (req, res) => {
  
    try {

        const updatedUser = await prisma.user.update({
            where: { id: req.body.id },
            data: {
              userVerified:true,
            }
          });

          // @manpreet - add send documents verified email here ..get email id from req.body.email
  
      res.status(200).json({ updatedUser });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ error: error.message });
    }
  });

  module.exports = verifyUserRouter;