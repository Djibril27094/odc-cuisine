import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc4T3otmnFkU9O-MgBzvxfOESUT1U54RE",
    authDomain: "tp-authentification-bdae8.firebaseapp.com",
    projectId: "tp-authentification-bdae8",
    storageBucket: "tp-authentification-bdae8.appspot.com",
    messagingSenderId: "129059086003",
    appId: "1:129059086003:web:678336c34ecc44174f1ac6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Ingretion authentification services in our App
const auth = getAuth(app)
export default auth ;