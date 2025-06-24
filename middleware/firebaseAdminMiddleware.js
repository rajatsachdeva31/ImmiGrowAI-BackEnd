const admin = require("firebase-admin");

if (!admin.apps.length) {
  // Initialize Firebase Admin SDK
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

}

module.exports = admin;
