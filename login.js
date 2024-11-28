// Import Firebase functions and the initialized auth object
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Select DOM elements
const loemailInput = document.querySelector("#lo-email");
const lopasswordInput = document.querySelector("#lo-pass");
const loginButton = document.querySelector("#login");

// Check if the login button is properly loaded in the DOM
if (!loginButton) {
    console.error("Login button not found in the DOM!");
} else {
    // Add event listener to the login button
    loginButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the form from submitting

        console.log("Login button clicked");

        // Retrieve email and password from input fields
        const email = loemailInput.value.trim();
        const password = lopasswordInput.value.trim();

        // Validate input fields
        if (!email || !password) {
            Swal.fire({
                title: "Error",
                text: "Please fill in both email and password fields.",
                icon: "warning",
            });
            return;
        }

        // Call Firebase sign-in function
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login successful
                const user = userCredential.user;
                Swal.fire("Logged in successfully!");
                console.log("User logged in:", user);

                // Clear the input fields
                loemailInput.value = "";
                lopasswordInput.value = "";
            })
            .catch((error) => {
                // Handle login errors
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    title: `Error: ${errorCode}`,
                    text: errorMessage,
                    icon: "error",
                });
                console.error("Login error:", errorCode, errorMessage);
            });
    });
}
