// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpT8jlz1c1r8xpQeOvH_MyoyCNKxsdU7A",
    authDomain: "ema-jhon-simple-69ed9.firebaseapp.com",
    projectId: "ema-jhon-simple-69ed9",
    storageBucket: "ema-jhon-simple-69ed9.appspot.com",
    messagingSenderId: "479220701154",
    appId: "1:479220701154:web:6cac18fd858cdab57ccbbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;