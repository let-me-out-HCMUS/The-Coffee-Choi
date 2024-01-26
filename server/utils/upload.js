const admin = require("firebase-admin");
const serviceAccount = require("../the-coffee-1d8e4-firebase-adminsdk-n98k7-97c7fb88f8.json");
// Your web app's Firebase configuration
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyAJZkg-35Cce9e7yJVcn0S5SA9_pH-gdaM",
  authDomain: "the-coffee-1d8e4.firebaseapp.com",
  projectId: "the-coffee-1d8e4",
  storageBucket: "the-coffee-1d8e4.appspot.com",
  messagingSenderId: "1024760045976",
  appId: "1:1024760045976:web:f9116fb33a7766ba4ecbed",
};

admin.initializeApp(firebaseConfig);

const bucket = admin.storage().bucket();

module.exports = bucket;
