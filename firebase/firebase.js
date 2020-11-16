import  firebase from 'firebase'

const  firebaseConfig = {
  apiKey: "AIzaSyB2l1UhOL2ENNuKwausQv2XlrntE4nSCj8",
  authDomain: "react-navite-9afc3.firebaseapp.com",
  databaseURL: "https://react-navite-9afc3.firebaseio.com",
  projectId: "react-navite-9afc3",
  storageBucket: "react-navite-9afc3.appspot.com",
  messagingSenderId: "285189531943",
  appId: "1:285189531943:web:004eb4313107a298026102"
};

// Initialize Firebase
firebase.apps.length || firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export  {firebase, db }