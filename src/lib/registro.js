export const initEventListeners = () => {
  const btnCrearCuenta = document.getElementById('btn-crear-cuenta');
  let regCorreo = document.getElementById('reg-correo');
  let regPass = document.getElementById('reg-password');
  
  btnCrearCuenta && btnCrearCuenta.addEventListener('click', () => {
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
}

// Logeando al usuario con google
// botón de log in con google
export const loginWhitGoogle = () => {
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
}
// boton de registro con google
export const regWithGoogle = () => {
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
}
