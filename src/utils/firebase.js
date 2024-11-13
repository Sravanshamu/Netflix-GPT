// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs4iCtGm6NnkLQNJg5mxs8d01o9_UjSQ4",
  authDomain: "netflix-gpt-7f074.firebaseapp.com",
  projectId: "netflix-gpt-7f074",
  storageBucket: "netflix-gpt-7f074.firebasestorage.app",
  messagingSenderId: "580410827086",
  appId: "1:580410827086:web:6b638ad707b792e2097e1f",
  measurementId: "G-KHTR6TNLC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
