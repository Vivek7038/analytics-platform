// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
       apiKey: "AIzaSyA4bjwA7oUAlrl6MZTzvPoGFSaVcMO-Fgc",
       authDomain: "videodemo-cde6b.firebaseapp.com",
       databaseURL: "https://videodemo-cde6b-default-rtdb.firebaseio.com",
       projectId: "videodemo-cde6b",
       storageBucket: "videodemo-cde6b.appspot.com",
       messagingSenderId: "857925325998",
       appId: "1:857925325998:web:b48624117f77119d2f893f",
       measurementId: "G-FQ1PSPC1DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
