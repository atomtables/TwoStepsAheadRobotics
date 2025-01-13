// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTtnPZY-DRb0OlCnl7u3Mpz5A9_RRgpiw",
    authDomain: "twostepsaheadroboticsteam.firebaseapp.com",
    projectId: "twostepsaheadroboticsteam",
    storageBucket: "twostepsaheadroboticsteam.firebasestorage.app",
    messagingSenderId: "383706298935",
    appId: "1:383706298935:web:0a47ccaea269660fed1db2",
    measurementId: "G-V0WTBQ2Z6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const auth = getAuth(app);