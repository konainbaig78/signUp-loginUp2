import  {getAuth,  createUserWithEmailAndPassword } from "./firebase.js";
const auth = getAuth();

const emailInput = document.querySelector("#signup-email");
const passwordInput = document.querySelector("#signup-password");
const signUpBtn = document.querySelector("#signup");


signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();


  if (!email || !password) {
    Swal.fire({
      title: "Error",
      text: "Please fill in both email and password fields.",
      icon: "warning",
    });
    return;
  }


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      const user = userCredential.user;
      Swal.fire({
        title: "Success!",
        text: "Account created successfully.",
        icon: "success",
      });

      emailInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
  
      const errorMessage = error.message;
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    });
});
