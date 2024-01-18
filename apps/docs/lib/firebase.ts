// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvPqyYv7EHgHZQSTEO4v0ZdAkmI8QBbPw",
  authDomain: "incomplete-systems.firebaseapp.com",
  projectId: "incomplete-systems",
  storageBucket: "incomplete-systems.appspot.com",
  messagingSenderId: "8703054182",
  appId: "1:8703054182:web:3b002981b42b325430b8a7"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);