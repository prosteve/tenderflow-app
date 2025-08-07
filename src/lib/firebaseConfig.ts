// src/lib/firebaseConfig.ts

// Import only the functions we need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration, read securely from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase for SSR and to avoid re-initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the services for use in other parts of the app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// For our Gemini AI integration later. Replace 'europe-west1' with your functions region if different.
export const functions = getFunctions(app, 'europe-west1');

// Note: I've removed getAnalytics. For an internal B2B tool like this,
// it's often unnecessary and adds to the application's size. We can add it back later if needed.