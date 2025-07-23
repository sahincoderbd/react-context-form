// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOvYsO4SD2mhS_dx-z7h95Z_p7ipnDI7M",
  authDomain: "react-form-context.firebaseapp.com",
  projectId: "react-form-context",
  storageBucket: "react-form-context.firebasestorage.app",
  messagingSenderId: "822962997492",
  appId: "1:822962997492:web:d5044a5d3047e227adb6a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
