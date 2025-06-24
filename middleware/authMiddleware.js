const { createSupabaseClient } = require('../config/supabase');

// Middleware to verify Supabase JWT token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized. Token is missing or invalid." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using Supabase
    const supabase = createSupabaseClient();
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(403).json({ error: "Forbidden. Invalid or expired token." });
    }

    req.user = user; // Attach user data to the request
    next(); // Pass to the next middleware/route handler
  } catch (error) {
    return res.status(403).json({ error: "Forbidden. Invalid or expired token." });
  }
};

module.exports = verifyToken;
