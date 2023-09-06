import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByl_P3RzEfeUlH1MQua9R8l1rt5ZYNFvE",
  authDomain: "cart-94550.firebaseapp.com",
  projectId: "cart-94550",
  storageBucket: "cart-94550.appspot.com",
  messagingSenderId: "557804349028",
  appId: "1:557804349028:web:eecd742eda76936e14e171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


