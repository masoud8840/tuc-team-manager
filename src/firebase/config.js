// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1V3mov8YgXq36msvd_lekzxKu5mJJzX4",
  authDomain: "tuc-team-manager.firebaseapp.com",
  projectId: "tuc-team-manager",
  storageBucket: "tuc-team-manager.appspot.com",
  messagingSenderId: "423819921375",
  appId: "1:423819921375:web:5e02b312ba47074cd4e66a",
  measurementId: "G-R8S9C2J5H1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();
