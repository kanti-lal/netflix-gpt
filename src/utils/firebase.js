// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCso4v7AYorP_QWH9FTWJjkzLywxjW_BJA",
  authDomain: "netflixgpt-4f239.firebaseapp.com",
  projectId: "netflixgpt-4f239",
  storageBucket: "netflixgpt-4f239.firebasestorage.app",
  messagingSenderId: "867574251674",
  appId: "1:867574251674:web:087864a4901ef86b295f23",
  measurementId: "G-WGKE722KYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
