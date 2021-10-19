// Import the functions you need from the SDKs you need

import firebase from "firebase";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnpAPNFsn-OSG9cnxe2vQgq2CHLmE41g",
  authDomain: "assengers-5229c.firebaseapp.com",
  databaseURL:
    "https://assengers-5229c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "assengers-5229c",
  storageBucket: "assengers-5229c.appspot.com",
  messagingSenderId: "391088295230",
  appId: "1:391088295230:web:e2f5abe35e141f81a3706f",
};

let app;

if (firebase.apps.length === 0) {
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const database = app.database();

export { database };
