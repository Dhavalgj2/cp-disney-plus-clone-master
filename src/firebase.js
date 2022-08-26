// Import the functions you need from the SDKs you need
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCDNaPIFbgsIrHYJB4Ma3tIsR5_YJslFgw",
  authDomain: "disneyplus-clone-14aac.firebaseapp.com",
  projectId: "disneyplus-clone-14aac",
  storageBucket: "disneyplus-clone-14aac.appspot.com",
  messagingSenderId: "796241196131",
  appId: "1:796241196131:web:597a725af84e6be7d43456",
  measurementId: "G-6GSK6D84KK",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
