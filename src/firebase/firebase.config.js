// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8gQCYBTDlakPf5Ysv8beUwQ9KJ5rh5kM",
  authDomain: "coffee-store-64074.firebaseapp.com",
  projectId: "coffee-store-64074",
  storageBucket: "coffee-store-64074.appspot.com",
  messagingSenderId: "812592648651",
  appId: "1:812592648651:web:f2b558e710747a7f71e64e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;