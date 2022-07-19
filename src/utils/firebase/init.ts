// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7oVnbq_FXp5gd4oJ_C9Mxmu7x3NBVk-Y",
  authDomain: "trackdababy.firebaseapp.com",
  projectId: "trackdababy",
  storageBucket: "trackdababy.appspot.com",
  messagingSenderId: "998792695428",
  appId: "1:998792695428:web:096ea2a0ef7c953581fcd1",
  measurementId: "G-S3VHTCBPQL",
  databaseURL: "https://trackdababy-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, "track-da-baby");
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
