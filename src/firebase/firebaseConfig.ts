import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDk45SBDhVI7uhs8ncBeigCTRFQtAFBm9A",
//   authDomain: "digital-shopping-cart.firebaseapp.com",
//   projectId: "digital-shopping-cart",
//   storageBucket: "digital-shopping-cart.appspot.com",
//   messagingSenderId: "326548529873",
//   appId: "1:326548529873:web:db02c9aa7284811ece5bf0",
//   measurementId: "G-PQZ9D6BZ03",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCPx7Tiyo8mIrjOU8j2bYFyZLhHYkJglbs",
  authDomain: "shopping-ca-6fcdc.firebaseapp.com",
  projectId: "shopping-ca-6fcdc",
  storageBucket: "shopping-ca-6fcdc.appspot.com",
  messagingSenderId: "981482884612",
  appId: "1:981482884612:web:3196ba0e55a5eb77d02f51",
  measurementId: "G-R59F6P4WEQ"
};

export const app: FirebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const database = firebase.firestore();
export const firestoreDb = getFirestore(app) ;
export const storage: FirebaseStorage = getStorage(app);
