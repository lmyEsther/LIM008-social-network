// Iniciar Sesion con correo y contraseña
let signInEmail = document.getElementById('correo');
let signInPass = document.getElementById('password');
let login = document.getElementById('ingresar');

login.addEventListener('click', (e) =>{
    e.preventDefault();
    let signInEmailValue = signInEmail.value;
    let signInPassValue = signInPass.value;
    
    firebase.auth().signInWithEmailAndPassword(signInEmailValue, signInPassValue)
    .then(()=> {
        location.href = 'ui/redsocial.html';
      })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    });

