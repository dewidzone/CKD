import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDTCiMUXvuvHanXumd0nS2TheToU_xNf7k",
  authDomain: "react-authentication-bd445.firebaseapp.com",
  projectId: "react-authentication-bd445",
  storageBucket: "react-authentication-bd445.appspot.com",
  messagingSenderId: "716154564042",
  appId: "1:716154564042:web:d45d0018e97725cd96b333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)