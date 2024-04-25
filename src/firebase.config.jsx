// Import the functions you need from the SDKs you need
import  { initializeApp , getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiWccpC83BBiZxwUv54KGIIIi1ZjNm_O0",
  authDomain: "afrique-quiz.firebaseapp.com",
  projectId: "afrique-quiz",
  storageBucket: "afrique-quiz.appspot.com",
  messagingSenderId: "834701963280",
  appId: "1:834701963280:web:14851f36df0b7473d1da95",
  measurementId: "G-GTT8PKC8FZ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firebaseApp = getApp()
const auth = getAuth(app)
const storage = getStorage(firebaseApp, "gs://afrique-quiz.appspot.com");

const db = getFirestore(app);

export {auth , db , storage}
