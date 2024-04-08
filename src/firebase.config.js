// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg5HKiOmFH4YohD_UJ6mIdhcQMBmcLJxI",
  authDomain: "react-dragon-news-auth-c83db.firebaseapp.com",
  projectId: "react-dragon-news-auth-c83db",
  storageBucket: "react-dragon-news-auth-c83db.appspot.com",
  messagingSenderId: "305856947622",
  appId: "1:305856947622:web:6366796c716454d4b61b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app