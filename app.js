import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";
const auth = getAuth();

const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");
const signUpBtn = document.getElementById("signup");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
   Swal.fire("Please fill in both fields!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire("Account created successfully!");
      emailInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
         icon: "error",
         text: `Error: ${errorMessage}`
      });
    });
});
