const express = require("express");
const dashboardRouter = express.Router();
const verifyToken = require("../middleware/authMiddleware");//auth middleware 
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

dashboardRouter.get("/profile", verifyToken, async(req, res) => {
  
  const user = await prisma.user.findUnique({
    where: {email: req.user.email},
    include: {role:true}
  
  });
  res.json(user);
});

  module.exports = dashboardRouter;