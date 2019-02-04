import datafire from './datafire.js';
import { initRouter } from '../ui/initRouter.js';

datafire.initFirebase();
initRouter();

const database = firebase.firestore();

export const signUpWithEmailAndPassword = (email, password, cb) => {    
  firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then(result => {
    //   const redir = {
    //     url: 'http://localhost:5000/'
    //   };
    //   result.user.sendEmailVerification(redir).catch(function(error) {
    //     alert(`No se pudo enviar email ${error}`);
    //   });
    //   firebase.auth().signOut();
    // })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;

      cb(errorCode + ' / ' + errorMessage);
    });
};

export const signInWithPassword = (email, password, callback) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      location.hash = '#/redsocial';
      // (result) => {
      // if (result.user.emailVerified) {
      //   location.hash = '#/redsocial'; // nuevo metodo y nueva ruta al muro de publicaciones
      // } else {
      //   alert('Por favor, verifica tu email');
      // }
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      callback(errorCode + ' / ' + errorMessage);
    });
};

export const loginWithGoogle = () => {
  if (!firebase.auth().currentUser) {
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
      console.log(user);
    }).then(() => {
      location.hash = '#/redsocial';
    }).catch(function(error) {
    // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
  } else {
    firebase.auth().signOut();
  }
};

export const loginWithFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    result;
  }).then(() => {
    location.hash = '#/redsocial';
  }).catch(function(error) {
    error;
  });
};

export const addPost = (textNewPost) =>
  database.collection('posts').add({
    title: textNewPost,
    state: false
  });

export const getPost = (callback) =>
  database.collection('posts')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    }); 
};

export const deletePost = (idPost) =>
  database.collection('posts').doc(idPost).delete();