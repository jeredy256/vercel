// src/firebase.tsx
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDgZl7zJnzvIBv93AgtxvXaXxuWakLG8mw",
  authDomain: "coments-10b24.firebaseapp.com",
  databaseURL: "https://coments-10b24-default-rtdb.firebaseio.com",
  projectId: "coments-10b24",
  storageBucket: "coments-10b24.appspot.com",
  messagingSenderId: "213575273623",
  appId: "1:213575273623:web:b8c67515ebb8f83c3b2dd2",
  measurementId: "G-1VN2CD5N6M"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
