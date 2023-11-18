// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Firebase Config Obtained from Console
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
