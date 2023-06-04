// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy1fxtGHrXVFlHHYUVafny5SHV8rVCs6c",
  authDomain: "redframe-77d5a.firebaseapp.com",
  projectId: "redframe-77d5a",
  storageBucket: "redframe-77d5a.appspot.com",
  messagingSenderId: "806740627891",
  appId: "1:806740627891:web:7025d1386396f9cdb3fbc6",
  measurementId: "G-HSL5EMRL9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, db, auth, provider };