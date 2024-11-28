// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

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
const auth = getAuth(app); // Initialize Firebase Auth

// DOM Elements
const emailInput = document.querySelector("#signup-email");
const passwordInput = document.querySelector("#signup-password");
const signUpBtn = document.querySelector("#signup");

// Event Listener for Signup
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Retrieve values from input fields
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate inputs
  if (!email || !password) {
    Swal.fire({
      title: "Error",
      text: "Please fill in both email and password fields.",
      icon: "warning",
    });
    return;
  }

  // Create user with Firebase Auth
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Account created successfully
      const user = userCredential.user;
      Swal.fire({
        title: "Success!",
        text: "Account created successfully.",
        icon: "success",
      });

      // Clear input fields
      emailInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
      // Handle errors
      const errorMessage = error.message;
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    });
});
