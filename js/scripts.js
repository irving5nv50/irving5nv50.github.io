var firebaseConfig = {
    apiKey: "AIzaSyD6R-PJdoDiYoCueVljzC7A-SRGsTNZlzs",
    authDomain: "bellezascaninas-7f05f.firebaseapp.com",
    projectId: "bellezascaninas-7f05f",
    storageBucket: "bellezascaninas-7f05f.appspot.com",
    messagingSenderId: "134138110069",
    appId: "1:134138110069:web:ea0e7e3dc941eb25ba183c"
};

// Inicializamos firebase
firebase.initializeApp(firebaseConfig);

// Iniciar sesión con Facebook
var loginFacebook = function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        redireccionamiento(result.user);
    }).catch(function(error) {
        console.log(error.message);
    });
}

// Iniciar sesión con Google
var loginGoogle = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        redireccionamiento(result.user);
    }).catch(function(error) {
        console.log(error.message);
    });
}

// Función de redireccionamiento
var redireccionamiento = function(user) {
    location.href = "main.html";
}
