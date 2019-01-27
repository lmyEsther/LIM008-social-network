// Chicas cree este archivo porque se ve feo que la funcion este en el html metido en un script

// // Initialize Firebase
// const config = {
//   apiKey: "AIzaSyCS6xlGDQkVczoOT8vu6sgNcSP5XCuRG-E",
//   authDomain: "mommyslove-edf5d.firebaseapp.com",
//   databaseURL: "https://mommyslove-edf5d.firebaseio.com",
//   projectId: "mommyslove-edf5d",
//   storageBucket: "mommyslove-edf5d.appspot.com",
//   messagingSenderId: "390042811062"
// };
// firebase.initializeApp(config);

// Logeando al usuario con google

// const auth = firebase.auth();
// auth.signInWithEmailAndPassword(email, pass);
// auth.createUserWithEmailAndPassword(email, pass);
// auth.onAuthStateChanged(firebaseUser => {});


// Logeando al usuario con google
// botón de log in con google
const btnLoginGoogle = document.getElementById('login-google');
btnLoginGoogle.addEventListener('click', () => {
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
registerWithGoogle.addEventListener('click', () => {
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

firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});