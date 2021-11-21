import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBvE6lrJfKp4ufBf4aLpyj6VeQotmTj90M",
  authDomain: "firegram-e4c96.firebaseapp.com",
  projectId: "firegram-e4c96",
  storageBucket: "firegram-e4c96.appspot.com",
  messagingSenderId: "1039021562599",
  appId: "1:1039021562599:web:77c4f8e7d3e0432ec12042",
  measurementId: "G-W86ZHBCVM9"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);