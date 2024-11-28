import { getAuth, signInWithEmailAndPassword } from "firebase.js";

// Initialize Firebase Auth
const auth = getAuth();

// DOM Elements
const logEmail = document.querySelector("#lo-email");
const logPassword = document.querySelector("#lo-pass");
const signInBtn = document.querySelector("#login");

// Event Listener for Login
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Retrieve values from input fields
  const loginEmail = logEmail.value.trim();
  const loginPassword = logPassword.value.trim();

  // Validate inputs
  if (!loginEmail || !loginPassword) {
    Swal.fire({
      title: "Error",
      text: "Please fill in both email and password fields.",
      icon: "warning",
    });
    return;
  }

  // Sign in with Firebase Auth
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully!",
        icon: "success",
      });

      // Clear input fields
      logEmail.value = "";
      logPassword.value = "";
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
