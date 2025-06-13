// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiDPupjAzI0DDArwUESSFsRZOcW7vhcyI",
  authDomain: "traininterview.firebaseapp.com",
  projectId: "traininterview",
  storageBucket: "traininterview.firebasestorage.app",
  messagingSenderId: "1044910752479",
  appId: "1:1044910752479:web:83527be3a08d9d99d35f6a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
