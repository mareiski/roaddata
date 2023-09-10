// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'roaddata-fb77b.firebaseapp.com',
  projectId: 'roaddata-fb77b',
  storageBucket: 'roaddata-fb77b.appspot.com',
  messagingSenderId: '512771428685',
  appId: '1:512771428685:web:b0a3cd5ba96fa8242f6704',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
