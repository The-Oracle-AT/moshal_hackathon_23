// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2EXEOPPPzVtIoHcE0LP5cQgzqRw38E0",
  authDomain : "fir-react-auth-f4534.firebaseapp.com",
  projectId: "fir-react-auth-f4534",
  storageBucket: "fir-react-auth-f4534.appspot.com",
  messagingSenderId: "827577250404",
  appId: "1:827577250404:web:f93a7987d78b2a150b6571",
  measurementId: "G-GW3BGVMD25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default firebaseConfig;