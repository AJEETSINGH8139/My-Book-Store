// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoGFyXMqIZm2YgDgovitly7MntOixMFvs",
  authDomain: "my-book-store-26b76.firebaseapp.com",
  projectId: "my-book-store-26b76",
  storageBucket: "my-book-store-26b76.appspot.com",
  messagingSenderId: "831978084216",
  appId: "1:831978084216:web:d6566ad3175cb9fa0b1a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;