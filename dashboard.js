import { getAuth, onAuthStateChanged, signOut, updateProfile } from "./firebase.js";

const auth = getAuth();
const logout = document.getElementById("logout");


const displayUserInfo = (user) => {
  // document.getElementById("signup-display-name") = user.displayName;
  // document.getElementById("user-photo").src = user.photoURL || "default-avatar.png";
};

// updateProfileBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const newDisplayName = updateNameInput.value.trim();
//   const newPhotoURL = updatePhotoInput.value.trim();

//   if (!newDisplayName && !newPhotoURL) {
//     Swal.fire("Please provide at least one field to update!");
//     return;
//   }

//   updateProfile(auth.currentUser, {
//     displayName: newDisplayName || auth.currentUser.displayName,
//     photoURL: newPhotoURL || auth.currentUser.photoURL,
//   })
//     .then(() => {
//       Swal.fire("Profile updated successfully!");
//       displayUserInfo(auth.currentUser); // Update UI dynamically
//     })
//     .catch((error) => {
//       Swal.fire({
//         icon: "error",
//         text: `Failed to update profile: ${error.message}`,
//       });
//     });
// });

onAuthStateChanged(auth, (user) => {
  if (!user) {
    Swal.fire("You need to log in first!");
    window.location.href = "index.html";
  } else {
    displayUserInfo(user);
  }
});

logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(`error: ${error.message}`);
    });
});
