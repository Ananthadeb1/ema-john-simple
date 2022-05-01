// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getauth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyActqCZoN_Zj_uZ-fM_hkuNyNSsl1FgbH4",
  authDomain: "ema-john-simple-42118.firebaseapp.com",
  projectId: "ema-john-simple-42118",
  storageBucket: "ema-john-simple-42118.appspot.com",
  messagingSenderId: "182926050649",
  appId: "1:182926050649:web:425f2f9da7714bb4a6f848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getauth(app);

export default auth;
