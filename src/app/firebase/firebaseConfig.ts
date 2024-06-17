import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk45SBDhVI7uhs8ncBeigCTRFQtAFBm9A",
  authDomain: "digital-shopping-cart.firebaseapp.com",
  projectId: "digital-shopping-cart",
  storageBucket: "digital-shopping-cart.appspot.com",
  messagingSenderId: "326548529873",
  appId: "1:326548529873:web:db02c9aa7284811ece5bf0",
  measurementId: "G-PQZ9D6BZ03",

  // apiKey: "AIzaSyDXMB7s93dftXS_JhRQ4HcItTMfoMyotfo",
  // authDomain: "mobile-verification-5d4f6.firebaseapp.com",
  // projectId: "mobile-verification-5d4f6",
  // storageBucket: "mobile-verification-5d4f6.appspot.com",
  // messagingSenderId: "1055674359885",
  // appId: "1:1055674359885:web:17a9e6fae33ae6d7b3bc04",
  // measurementId: "G-DX6RP62W0Z",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
