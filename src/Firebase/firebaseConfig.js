// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3XPC0k5bClj6Z6QKVA2MfE7AWoUUAmoA",
  authDomain: "restomix-8ab37.firebaseapp.com",
  projectId: "restomix-8ab37",
  storageBucket: "restomix-8ab37.appspot.com",
  messagingSenderId: "759331555283",
  appId: "1:759331555283:web:e299c99c5379fedea2d126",
  measurementId: "G-ZQ4CS94JBS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
