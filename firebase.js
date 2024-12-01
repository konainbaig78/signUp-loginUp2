import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyANipEpvjQsi3ucUDknB5UkYrn8RrYt_Go",
  authDomain: "form-b3f07.firebaseapp.com",
  projectId: "form-b3f07",
  storageBucket: "form-b3f07.appspot.com",
  messagingSenderId: "903648578601",
  appId: "1:903648578601:web:5ab68e2f6ba222376c6038",
  measurementId: "G-QJLQZSPSPD",
};

const app = initializeApp(firebaseConfig);

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
};
