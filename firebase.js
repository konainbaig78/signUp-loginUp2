// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANipEpvjQsi3ucUDknB5UkYrn8RrYt_Go",
  authDomain: "form-b3f07.firebaseapp.com",
  projectId: "form-b3f07",
  storageBucket: "form-b3f07.firebasestorage.app",
  messagingSenderId: "903648578601",
  appId: "1:903648578601:web:5ab68e2f6ba222376c6038",
  measurementId: "G-QJLQZSPSPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Export the auth object for use in other scripts
export { auth };
