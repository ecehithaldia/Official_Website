// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCK0Il90vL4VvNfYoI2dNE65icb7AgID2A",
  authDomain: "departmentalwebsite-d5ad2.firebaseapp.com",
  projectId: "departmentalwebsite-d5ad2",
  storageBucket: "departmentalwebsite-d5ad2.firebasestorage.app",
  messagingSenderId: "1090879712887",
  appId: "1:1090879712887:web:117f66c43eccde57e7a072",
  measurementId: "G-5JYM0SEW6L"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export Firestore (database)
// export const db = getFirestore(app);

// // (Optional) Export Analytics (only works in browser, not SSR)
// export const analytics = getAnalytics(app);


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config object
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db for use in other files
export { db };
