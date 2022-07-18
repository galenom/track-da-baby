// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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
};

// Initialize Firebase
export const initFirebaseApp = () => {
  const firApp = initializeApp(firebaseConfig, "track-da-baby");
  const analytics = getAnalytics(firApp);
  const auth = getAuth(firApp);

  return { firApp, analytics, auth };
};
