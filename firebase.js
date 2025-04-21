import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_iY509crQUHwC9vOcfOGSa3xi4eUyTtg",
  authDomain: "mebiti.firebaseapp.com",
  projectId: "mebiti",
  appId: "1:44911217755:web:20590bfc8061108cea437e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "login.html")
    .catch(err => alert(err.message));
}

window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
}

window.logout = function() {
  signOut(auth).then(() => window.location.href = "login.html");
}