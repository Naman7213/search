import "firebase/database";
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDAnz37TqSjVvM7EZJJWqbiO_3tgYhETmg",
  authDomain: "search-c35bf.firebaseapp.com",
  projectId: "search-c35bf",
  storageBucket: "search-c35bf.appspot.com",
  messagingSenderId: "707101446194",
  appId: "1:707101446194:web:d4ba45697fcd216b3eec2b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);