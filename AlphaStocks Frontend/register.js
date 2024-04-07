
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
 

  const firebaseConfig = {
    apiKey: "AIzaSyB7rsSxndcsUqfV02RUrARG6cCh6YB6a38",
    authDomain: "alphastocks2.firebaseapp.com",
    projectId: "alphastocks2",
    storageBucket: "alphastocks2.appspot.com",
    messagingSenderId: "150467868796",
    appId: "1:150467868796:web:e742fe3d3e1a274c0ff1f9",
    measurementId: "G-DWW67YFZQ2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const submit = document.getElementById('submit')
submit.addEventListener("click", function (event) {
event.preventDefault()
alert(5)
  })
 