import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmmb-m4vtA7YBgqz-0XeQRtrqXibDYPRI",
  authDomain: "clone-6b2db.firebaseapp.com",
  projectId: "clone-6b2db",
  storageBucket: "clone-6b2db.appspot.com",
  messagingSenderId: "983529285053",
  appId: "1:983529285053:web:5ed619c195951dc498ded4",
  measurementId: "G-X8KB46WC9P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};