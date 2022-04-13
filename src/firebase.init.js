// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9s5Bl1qwCVO36OeM4UFLfRYUt1wyGi-g",
  authDomain: "genius-car-services-41ece.firebaseapp.com",
  projectId: "genius-car-services-41ece",
  storageBucket: "genius-car-services-41ece.appspot.com",
  messagingSenderId: "852961477638",
  appId: "1:852961477638:web:87a55f1ba446a557bf6f87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default auth;