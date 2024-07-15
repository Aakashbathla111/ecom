// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPP9VRo0deGilda2ziS1qG92zWZktpg70",
  authDomain: "blogdemo-99171.firebaseapp.com",
  projectId: "blogdemo-99171",
  storageBucket: "blogdemo-99171.appspot.com",
  messagingSenderId: "461378926924",
  appId: "1:461378926924:web:833d408de9188c7aa877e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();