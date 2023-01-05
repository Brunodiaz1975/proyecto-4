// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnOUWjT2ev9s3qRRq6GoYNmfbZeeWbfNI",
  authDomain: "proyecto4-bd.firebaseapp.com",
  projectId: "proyecto4-bd",
  storageBucket: "proyecto4-bd.appspot.com",
  messagingSenderId: "570574713791",
  appId: "1:570574713791:web:5d44b9e42732acf2eb670a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);