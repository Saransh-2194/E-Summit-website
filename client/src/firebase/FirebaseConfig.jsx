// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjL5wvHbJexFZ__UZPztrT9HD3zIUpAPg",
  authDomain: "tiedc-e-summit-2025.firebaseapp.com",
  projectId: "tiedc-e-summit-2025",
  storageBucket: "tiedc-e-summit-2025.firebasestorage.app",
  messagingSenderId: "413188482972",
  appId: "1:413188482972:web:9bed7422ea4372ba038a59",
  measurementId: "G-M8NVZPN6RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);

export{fireDB};