// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI-hoxStds3tzYbOJfZcUh1WAtVQNmb8c",
  authDomain: "react-chat-app-a64f3.firebaseapp.com",
  projectId: "react-chat-app-a64f3",
  storageBucket: "react-chat-app-a64f3.appspot.com",
  messagingSenderId: "794825478311",
  appId: "1:794825478311:web:ab69660b47bef41e1acb82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
