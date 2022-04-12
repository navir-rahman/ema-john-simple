// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKUTJ0Oxxs0dp1spIWyXLdndMjqTsD9BY",
  authDomain: "ema-jhon-bd294.firebaseapp.com",
  projectId: "ema-jhon-bd294",
  storageBucket: "ema-jhon-bd294.appspot.com",
  messagingSenderId: "710234934160",
  appId: "1:710234934160:web:fc18b4eb48f025da0e8115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;