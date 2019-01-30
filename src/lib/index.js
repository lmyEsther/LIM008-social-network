import datafire from './datafire.js';
import { initRouter } from '../ui/uindex.js'
datafire.initFirebase();
initRouter();

console.log('fffffff')


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

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});


