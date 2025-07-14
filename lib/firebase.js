// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8Ju9Q3DZsasBBQq-JCeoicwIqhZpm3oo",
  authDomain: "urazvip-f0d2a.firebaseapp.com",
  projectId: "urazvip-f0d2a",
  storageBucket: "urazvip-f0d2a.firebasestorage.app",
  messagingSenderId: "1015021546476",
  appId: "1:1015021546476:web:25bfa92466cad608116ec9",
  measurementId: "G-XBE8FTEV2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth }; 