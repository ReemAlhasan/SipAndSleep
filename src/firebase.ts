// src/firebase.ts
// Connects the app to our Firebase project.
// The values come from .env.local, so they are never written in the code.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Read the address of our Firebase project from .env.local
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Connect to Firebase once, for the whole app
const app = initializeApp(firebaseConfig);

// The two tools the rest of the app will use
export const auth = getAuth(app); // login
export const db = getFirestore(app); // database
