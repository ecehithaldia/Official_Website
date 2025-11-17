// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCK0Il90vL4VvNfYoI2dNE65icb7AgID2A",
  authDomain: "departmentalwebsite-d5ad2.firebaseapp.com",
  projectId: "departmentalwebsite-d5ad2",
  storageBucket: "departmentalwebsite-d5ad2.firebasestorage.app",
  messagingSenderId: "1090879712887",
  appId: "1:1090879712887:web:117f66c43eccde57e7a072",
  measurementId: "G-5JYM0SEW6L"
};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Added the Import auth functions
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Added the feature — Initialize and export auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
  db,
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  onAuthStateChanged,
  signOut,
};