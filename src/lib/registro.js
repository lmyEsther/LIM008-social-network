import datafire from './datafire.js';

datafire.initFirebase();

const btnCrearCuenta = document.getElementById('btn-crear-cuenta');
let regCorreo = document.getElementById('reg-correo');
let regPass = document.getElementById('reg-pass');

btnCrearCuenta.addEventListener('click', () => {
  let regCorreoValue = regCorreo.value;
  let regPassValue = regPass.value;
    
  firebase.auth().createUserWithEmailAndPassword(regCorreoValue, regPassValue)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
});

