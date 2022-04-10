// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXPbOO1bAO3wZJfbgI6AW0Gq8I-UCzT3c",
    authDomain: "ema-john-d28be.firebaseapp.com",
    projectId: "ema-john-d28be",
    storageBucket: "ema-john-d28be.appspot.com",
    messagingSenderId: "257271338608",
    appId: "1:257271338608:web:4ea07c8398a3828853c6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;