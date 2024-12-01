import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,  GithubAuthProvider, updateProfile, sendEmailVerification   } from "./firebase.js";
const auth = getAuth();
const provider = new GoogleAuthProvider();
const googleBtn=document.getElementById("googleBtn")
const githubBtn=document.getElementById("githubBtn")
const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");
const signUpBtn = document.getElementById("signup");
const displayNameInput = document.getElementById("signup-display-name");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const displayName = displayNameInput.value.trim();

  if (!email || !password || !displayName) {
   Swal.fire("Please fill in both fields!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password, displayName)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser)
  .then(() => {
    Swal.fire("Verification email send")
  })
  .catch((error)=>{
    Swal.fire(error.message)  
  })
      updateProfile(auth.currentUser, {
        displayName: displayName, photoURL: "profile/download.jpeg"
      })
      .then(() => {
        Swal.fire(`Welcome, ${user.displayName}!`);
          emailInput.value = "";
          passwordInput.value = "";
          displayNameInput.value = "";
          // window.location.href = "dashboard.html";
      }).catch((error) => {
        console.error("Profile update error:", error);
          Swal.fire("Failed to update profile.");
        });
      
    })
    
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
         icon: "error",
         text: `Error: ${errorMessage}`
      });
    });
});





googleBtn.addEventListener("click", () => {
  signInWithPopup(auth,provider)
    .then((result) => {
      // The signed-in user info
      const user = result.user;
      console.log("Google Sign-In Success:", user);

      // Get Google OAuth credential
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("Access Token:", token);

      Swal.fire(`Welcome ${user.displayName || "User"}!`);
      window.location.href="dashboard.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Google Sign-In Error:", error);
      Swal.fire({
        icon: "error",
        text: `Google Sign-In Failed: ${errorMessage}`,
      });
    });
});


const githubProvider = new GithubAuthProvider();
githubBtn.addEventListener("click", () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      Swal.fire(`Welcome ${user.displayName || "User"}!`);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        text: `GitHub Sign-In Failed: ${error.message}`,
      });
    });
});
