// Import the functions you need from the SDKs you need
import { initializeApp,getReactNativePersistence } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {


  apiKey: "AIzaSyBWKSpa--VZvszZK6HnbHB52KbTVZuZKlg",
  authDomain: "reactnative3-de28c.firebaseapp.com",
  projectId: "reactnative3-de28c",
  storageBucket: "reactnative3-de28c.appspot.com",
  messagingSenderId: "522484524022",
  appId: "1:522484524022:web:5bdc8389d04b6c969f9dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

