import { getAuth,  signOut, onAuthStateChanged, updateProfile } from "./firebase.js";

const auth = getAuth();
const logout = document.getElementById("logout");
const userdiv=document.getElementById("user-div")
const updateText=document.getElementById("updated-text")
const updateProfileBtn=document.getElementById("updateProfile")

onAuthStateChanged(auth,(user)=>{
  if(user){
    userdiv.innerHTML+=`
    <div>
     <p>Name: ${user.displayName}</p>
     <p>Email: ${user.email}</p>`

    const uid = user.uid;
    console.log(uid);
  }
 
      
       else {
      
      }
})

updateProfileBtn.addEventListener("click",(e)=>{
e.preventDefault()

// if (inputField.classList.contains("updateT")) {
//   inputField.classList.remove("updateT");
//   inputField.focus(); // Optionally focus on the input
//   return;
// }

console.log(updateText.classList);

const newName=updateText.value.trim()
if(!newName){
Swal.fire("Please provide name")
}

const user=auth.currentUser

if (!user){
  Swal.fire("please create account")
}
updateProfile(auth.currentUser, {
  displayName: newName
  //  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
})

logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(`error: ${error.message}`);
    });
});
