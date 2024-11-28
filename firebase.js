
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth-compat.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


const email=document.querySelector("#signup-email")
const password=document.querySelector("#signup-password")
const signUpBtn=document.querySelector("#signup")

signUpBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
Swal.fire("Account Created Successfully!")    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Swal.fire(errorMessage)
    // ..
  });
})

