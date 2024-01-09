// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6R-PJdoDiYoCueVljzC7A-SRGsTNZlzs",
  authDomain: "bellezascaninas-7f05f.firebaseapp.com",
  projectId: "bellezascaninas-7f05f",
  storageBucket: "bellezascaninas-7f05f.appspot.com",
  messagingSenderId: "134138110069",
  appId: "1:134138110069:web:ea0e7e3dc941eb25ba183c",
  measurementId: "G-50RRR2EGEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtener una instancia del objeto Firebase Auth
const auth = firebase.auth();

// Autenticar con Facebook
document.getElementById('facebook-login').addEventListener('click', function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
        // Esto te da un token de acceso a Facebook, que puedes usar para acceder a la API de Facebook.
        var token = result.credential.accessToken;
        // La información del usuario autenticado.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Manejo de errores.
    });
});

// Autenticar con Google
document.getElementById('google-login').addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result) {
        // Esto te da un token de acceso a Google, que puedes usar para acceder a la API de Google.
        var token = result.credential.accessToken;
        // La información del usuario autenticado.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Manejo de errores.
    });
});
