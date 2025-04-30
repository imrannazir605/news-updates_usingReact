// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4VPacSJjnWUBVSNKIPtGzR3dtNsN4H5w",
  authDomain: "news-website-43b13.firebaseapp.com",
  projectId: "news-website-43b13",
  storageBucket: "news-website-43b13.appspot.com",
  messagingSenderId: "597868719394",
  appId: "1:597868719394:web:eaafbe576f3097ad9ec97b",

  measurementId: "G-L54YVQQJ6V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
