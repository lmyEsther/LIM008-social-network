// Este es el punto de entrada de tu aplicacion

/* import { myFunction } from './lib/index.js';

myFunction(); */

const btnCuenta = document.getElementById("btn-crear-cuenta");
btnCuenta.addEventListener("click", () => {
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("correo").value;
    let passw = document.getElementById("pass").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, passw)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage)
      });
})
