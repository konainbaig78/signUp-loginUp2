import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

const logEmail = document.getElementById("lo-email");
const logPassword = document.getElementById("lo-pass");
const signInBtn = document.getElementById("login");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const loginEmail = logEmail.value.trim();
  const loginPassword = logPassword.value.trim();

  if (!loginEmail || !loginPassword) {
    Swal.fire("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      Swal.fire("Login successful!");
      logEmail.value = "";
      logPassword.value = "";
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        text: `Error: ${errorMessage}`,
      });
    });
});

