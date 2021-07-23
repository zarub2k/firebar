import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDnYzagUDGuncjhXZPJyfwoUA8O1bhm7gY",
  authDomain: "firebar-6db96.firebaseapp.com",
  databaseURL: "https://firebar-6db96.firebaseio.com",
  projectId: "firebar-6db96",
  storageBucket: "firebar-6db96.appspot.com",
  messagingSenderId: "606782568269",
  appId: "1:606782568269:web:1f6f168971227847fd6904",
  measurementId: "G-S15M5ZK4PG"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };