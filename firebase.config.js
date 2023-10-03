// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP6xlBuNkEviFczIdMAqpISkHEt8MXalY",
  authDomain: "react-dragon-news-auth-915b9.firebaseapp.com",
  projectId: "react-dragon-news-auth-915b9",
  storageBucket: "react-dragon-news-auth-915b9.appspot.com",
  messagingSenderId: "16402791174",
  appId: "1:16402791174:web:a454eb5c05ec1e0ab9fc87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;