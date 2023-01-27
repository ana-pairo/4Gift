import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8okjD1Ls6Q7AOq0heF2ZtyoEHPaNVSH4",
  authDomain: "gift-auth.firebaseapp.com",
  projectId: "gift-auth",
  storageBucket: "gift-auth.appspot.com",
  messagingSenderId: "109310379547",
  appId: "1:109310379547:web:d4cdc3dec73d3dec4b9abe",
  measurementId: "G-WQQS69CNRJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
