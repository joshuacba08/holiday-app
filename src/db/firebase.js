import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAQZ7tnK1zE-wmpuQ5eXv2GwOAaTB4tPkU",
  authDomain: "holiday-app-35ed4.firebaseapp.com",
  projectId: "holiday-app-35ed4",
  storageBucket: "holiday-app-35ed4.appspot.com",
  messagingSenderId: "277581488651",
  appId: "1:277581488651:web:935c3c939904f43e7ddd0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);