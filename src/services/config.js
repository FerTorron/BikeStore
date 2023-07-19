import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "bikestore-429c6.firebaseapp.com",
    projectId: "bikestore-429c6",
    storageBucket: "bikestore-429c6.appspot.com",
    messagingSenderId: "888926257375",
    appId: "1:888926257375:web:c878a6ca658841bbb5a96a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);