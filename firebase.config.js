import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ6cFLdSLCkTA8QsfeKRo8amik3G7PkII",
    authDomain: "privet-route-practice.firebaseapp.com",
    projectId: "privet-route-practice",
    storageBucket: "privet-route-practice.appspot.com",
    messagingSenderId: "749833647298",
    appId: "1:749833647298:web:b9ceb14bb7cec1f75d375b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
