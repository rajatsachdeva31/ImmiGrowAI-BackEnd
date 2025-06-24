const express = require("express");
const dashboardRouter = express.Router();
const verifyToken = require("../middleware/authMiddleware");//auth middleware 
const { createSupabaseAdmin } = require('../config/supabase');

dashboardRouter.get("/profile", verifyToken, async(req, res) => {
  
  const supabase = createSupabaseAdmin();
  const { data: user, error } = await supabase
    .from('users')
    .select(`
      *,
      role:roles(*)
    `)
    .eq('email', req.user.email)
    .single();
  
  if (error || !user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

  module.exports = dashboardRouter;