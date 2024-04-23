// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDpK3XnzASnPqCO86QbGEsqW2jPDFogEMc",
  authDomain: "myfirstapp-8670a.firebaseapp.com",
  projectId: "myfirstapp-8670a",
  storageBucket: "myfirstapp-8670a.appspot.com",
  messagingSenderId: "784816967995",
  appId: "1:784816967995:web:c8e3824aa9fe370ff8271e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;