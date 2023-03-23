import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import {getFireStore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECTID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECTID}.appspot.com`,
  messagingSenderId: "960675932341",
  appId: "1:960675932341:web:81130f783899c1d0ad76fc",
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
