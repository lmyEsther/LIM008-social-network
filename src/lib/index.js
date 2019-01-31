import datafire from './datafire.js';
import { initRouter } from '../ui/uindex.js';
datafire.initFirebase();
initRouter();


// Iniciar Sesion con correo y contraseña
let signInEmail = document.getElementById('correo');
let signInPass = document.getElementById('password');
let login = document.getElementById('ingresar');

login && login.addEventListener('click', (ev) => {
  ev.preventDefault();
  let signInEmailValue = signInEmail.value;
  let signInPassValue = signInPass.value;
    
  firebase.auth().signInWithEmailAndPassword(signInEmailValue, signInPassValue)
    .then(() => {
      location.href = 'ui/redsocial.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      document.getElementById('error-1').innerHTML = errorCode + ' / ' + errorMessage;
    });
});

// Logeando al usuario con google
// botón de log in con google
const btnLoginGoogle = document.getElementById('login-google');
btnLoginGoogle && btnLoginGoogle.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
  }).then(() => {
    location.href = 'ui/redsocial.html';
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
});
// boton de registro con google
const registerWithGoogle = document.getElementById('register-google');
registerWithGoogle && registerWithGoogle.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    // ...
  }).then(() => {
    location.href = 'ui/redsocial.html';
  }).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
});

// Registro con facebook
const registroFacebook = document.getElementById('register-facebook');
registroFacebook && registroFacebook.addEventListener('click', () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    alert('Exito');
    console.log(result);
  }).cath(function(error) {
    alert('Error');
    console.log(error);
  });
});
// login con facebook
const loginFacebook = document.getElementById('login-facebook');
loginFacebook && loginFacebook.addEventListener('click', () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    alert('Exito');
    console.log(result);
  }).cath(function(error) {
    alert('Error');
    console.log(error);
  });
});

/* firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
}); */


