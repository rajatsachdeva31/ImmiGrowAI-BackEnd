const admin = require('../middleware/firebaseAdminMiddleware'); 

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized. Token is missing or invalid." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach decoded user data to the request
    next(); // Pass to the next middleware/route handler
  } catch (error) {
    return res.status(403).json({ error: "Forbidden. Invalid or expired token." });
  }
};

module.exports = verifyToken;
