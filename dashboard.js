import {
  getAuth,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "./firebase.js";

const auth = getAuth();
const logout = document.getElementById("logout");
const userdiv = document.getElementById("user-div");
const updateText = document.getElementById("updated-text");
const updateProfileBtn = document.getElementById("updateProfile");

updateText.classList.add("updateT"); // This ensures the input is hidden initially

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Clear previous content and display user info
    userdiv.innerHTML = `
      <div>
        <p>Name: ${user.displayName || "No Name Set"}</p>
        <p>Email: ${user.email}</p>
      </div>`;
  } else {
    userdiv.innerHTML = `<p>Please log in</p>`;
  }
});

updateProfileBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Toggle the visibility of the input field
  if (updateText.classList.contains("updateT")) {
    updateText.classList.remove("updateT"); // Make input visible
    updateText.focus(); // Focus on the input field for user convenience
    return;
  }

  const newName = updateText.value.trim();
  if (!newName) {
    Swal.fire("Please provide a name");
    return;
  }

  const user = auth.currentUser;
  if (!user) {
    Swal.fire("Please create an account");
    return;
  }

  // Update profile with the new name
  updateProfile(user, { displayName: newName })
    .then(() => {
      Swal.fire("Profile updated successfully!");

      // Hide the input field after updating
      updateText.classList.add("updateT");

      // Update the displayed name in userdiv immediately
      userdiv.innerHTML = `
        <div>
          <p>Name: ${newName}</p>
          <p>Email: ${user.email}</p>
        </div>`;

      // Clear the input field
      updateText.value = "";
    })
    .catch((error) => {
      Swal.fire("Failed to update profile. Please try again.");
    });
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
