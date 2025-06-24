const crypto = require("crypto");
require("dotenv").config();

const SECRET_KEY = Buffer.from(process.env.AES_SECRET_KEY, "utf8");

const decryptPasswordMiddleware = (req, res, next) => {
  try {
    const { password, iv } = req.body;

    if (!password || !iv) {
      return res.status(400).json({ error: "Password and IV are required" });
    }

    // Decrypt the password
    const decipher = crypto.createDecipheriv("aes-256-cbc", SECRET_KEY, Buffer.from(iv, "hex"));
    let decryptedPassword = decipher.update(password, "base64", "utf8");
    decryptedPassword += decipher.final("utf8");


    // Replace the encrypted password in the request body with the decrypted one
    req.body.password = decryptedPassword;

    next(); // Pass control to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ error: "Failed to decrypt password", details: error.message });
  }
};

module.exports = decryptPasswordMiddleware;
