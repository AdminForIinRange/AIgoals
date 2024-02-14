// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCayn-iX69LmaZwlRgG3SEpT7I-Mv_iIts",
  authDomain: "aigoals.firebaseapp.com",
  projectId: "aigoals",
  storageBucket: "aigoals.appspot.com",
  messagingSenderId: "272598797772",
  appId: "1:272598797772:web:03c5ea1fd9180ccb9f6169",
  measurementId: "G-HZLJ28YMSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);