// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-35db5.firebaseapp.com",
  projectId: "mern-estate-35db5",
  storageBucket: "mern-estate-35db5.appspot.com",
  messagingSenderId: "481097876810",
  appId: "1:481097876810:web:05c198a80ccfd71c382db3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);