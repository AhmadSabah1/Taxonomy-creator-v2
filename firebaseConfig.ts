// firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7NebIGcR3lUQstFm-jNH0Jv2_TTgepUU",
    authDomain: "taxonomy-creator-part-2.firebaseapp.com",
    projectId: "taxonomy-creator-part-2",
    storageBucket: "taxonomy-creator-part-2.firebasestorage.app",
    messagingSenderId: "411099330544",
    appId: "1:411099330544:web:c0b8e140e32fc4813a0f35",
    measurementId: "G-J2N1DTPDS5"
};


const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);

export { db };