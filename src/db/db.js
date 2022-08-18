import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {

  apiKey: "AIzaSyCPSJ88MMOOZyTzuBf69xi9t6A_QYKM2W8",

  authDomain: "heyandes-7f9bf.firebaseapp.com",

  projectId: "heyandes-7f9bf",

  storageBucket: "heyandes-7f9bf.appspot.com",

  messagingSenderId: "712989326388",

  appId: "1:712989326388:web:a5a8befe6a96c6b0f01e61",

  measurementId: "G-2RT3QBF97G"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);