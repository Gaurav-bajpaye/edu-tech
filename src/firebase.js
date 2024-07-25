
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "firbase api key",
  authDomain: "edtech-project-f33be.firebaseapp.com",
  projectId: "edtech-project-f33be",
  storageBucket: "edtech-project-f33be.appspot.com",
  messagingSenderId: "gauravbajpaye@gmail.com",
  appId: "project-417929160263"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
