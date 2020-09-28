import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCBXZsSpRLuip38IK_u2m1O4JCTeMiLszw",
  authDomain: "clone-6493b.firebaseapp.com",
  databaseURL: "https://clone-6493b.firebaseio.com",
  projectId: "clone-6493b",
  storageBucket: "clone-6493b.appspot.com",
  messagingSenderId: "1059685149160",
  appId: "1:1059685149160:web:dbe522c32a516e48961c5d",
  measurementId: "G-RQRMWZTB1D",
});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
