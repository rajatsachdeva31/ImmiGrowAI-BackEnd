const multer = require('multer');

// Configure Multer for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware for handling multiple file uploads
const uploadimage = upload.fields([
  { name: 'imageOne', maxCount: 1 },
  { name: 'imageTwo', maxCount: 1 },
  { name: 'imageThree', maxCount: 1 }
]);

module.exports = uploadimage;