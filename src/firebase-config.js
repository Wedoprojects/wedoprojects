// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByIe_osmYlxjVmZ1K6YK5RBj3ZXQcFQP8",
    authDomain: "projects-b73ae.firebaseapp.com",
    projectId: "projects-b73ae",
    storageBucket: "projects-b73ae.appspot.com",
    messagingSenderId: "376824495990",
    appId: "1:376824495990:web:14ff5d2e97a19e216dc457",
    measurementId: "G-MX0XPH4Y2F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);