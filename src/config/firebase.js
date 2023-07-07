import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC7yZpB2VbXaO5jQER4i6QvuSMkaWGdH1U",
  authDomain: "tiktok---clone-1bb00.firebaseapp.com",
  projectId: "tiktok---clone-1bb00",
  storageBucket: "tiktok---clone-1bb00.appspot.com",
  messagingSenderId: "960089598091",
  appId: "1:960089598091:web:40b76d49a6e667cb9fcc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;