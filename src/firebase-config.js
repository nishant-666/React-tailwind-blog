import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDilyX19ywSsGHhV0pHR65imNu6BUwZbLc",
  authDomain: "intense-signer-325704.firebaseapp.com",
  projectId: "intense-signer-325704",
  storageBucket: "intense-signer-325704.appspot.com",
  messagingSenderId: "1014923547837",
  appId: "1:1014923547837:web:a55aaa7c4fd3d5f01793d4"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);