// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaSUsD-aGYWvDL_k33U9gbU5gAyhJrmHY",
  authDomain: "tiger-finder.firebaseapp.com",
  projectId: "tiger-finder",
  storageBucket: "tiger-finder.firebasestorage.app",
  messagingSenderId: "435287914958",
  appId: "1:435287914958:web:5d9b1f494f40f86307939f",
  measurementId: "G-MYDZG3038D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

const emailInput = document.getElementsByClassName(email);
const passInput = document.getElementsByClassName(password);

const loginEmailPassword = async () => {
  const loginEmail = emailInput.value;
  const loginPassword   = passInput.value;

  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  console.log(userCredential.user);
}

logInBtn.addEventListener("click", loginEmailPassword);