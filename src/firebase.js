// src/firebase.js
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyA_jXmjYMmCq5h25xz7GmRPjuswAz7kb9s",
  authDomain: "hmm-database.firebaseapp.com",
  databaseURL: "https://hmm-database.firebaseio.com",
  projectId: "hmm-database",
  storageBucket: "hmm-database.appspot.com",
  messagingSenderId: "1098457919123",
  appId: "1:1098457919123:web:ad6fb941f492c08496a766",
  measurementId: "G-EBTJ0G59ST",
};
firebase.initializeApp(config);
export default firebase;
