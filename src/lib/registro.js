import datafire from './datafire.js';

datafire.initFirebase();

const btnCrearCuenta = document.getElementById('ingresar');
let regCorreo = document.getElementById('correo');
let regPass = document.getElementById('password');

btnCrearCuenta.addEventListener('click', () => {
  let regCorreoValue = regCorreo.value;
  let regPassValue = regPass.value;
    
  firebase.auth().createUserWithEmailAndPassword(regCorreoValue, regPassValue)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      document.getElementById('error-login-pass').innerHTML = errorCode + ' / ' + errorMessage;
    });
});

