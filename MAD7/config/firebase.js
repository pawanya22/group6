// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@react-native-firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfon6AkBp7UtnXCtU-rxthkaDDJ6sZSfc",
  authDomain: "react-native1-c703d.firebaseapp.com",
  projectId: "react-native1-c703d",
  storageBucket: "react-native1-c703d.appspot.com",
  messagingSenderId: "789847612568",
  appId: "1:789847612568:web:690425a22a8d74d63f84ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
