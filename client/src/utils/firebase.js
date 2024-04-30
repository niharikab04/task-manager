// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-32e76.firebaseapp.com",
  projectId: "taskmanager-32e76",
  storageBucket: "taskmanager-32e76.appspot.com",
  messagingSenderId: "378263248586",
  appId: "1:378263248586:web:fa8401382dd40f32f95e33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);