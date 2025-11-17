// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBU-xGgJmiBUntDxgfvQbw9i59hQ-L0nlA",
    authDomain: "tfinder-7533f.firebaseapp.com",
    projectId: "tfinder-7533f",
    storageBucket: "tfinder-7533f.firebasestorage.app",
    messagingSenderId: "342699764964",
    appId: "1:342699764964:web:e5529ed4f43bb4350c90f1",
    measurementId: "G-BJLF0MLPY2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
//submit button
const submit = document.getElementByID('submit').value;
submit.addEventListener("click", function(){
    event.preventDefault()
    alert(5);
})