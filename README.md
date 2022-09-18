# skillshala
could not add firebase-config.js file scince it contains api keys.
the overall structureis given bellow :--
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from '@firebase/firestore';
import {getStorage} from "firebase/storage";


// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = 
{
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export  const db =getFirestore(app);
export const storage =getStorage(app);
