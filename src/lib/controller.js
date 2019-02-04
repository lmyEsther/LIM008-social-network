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
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;

  }).then(() => {
    location.hash = '#/redsocial';

  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
  });
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

export const deletePost = (idPost) =>
  database.collection('posts').doc(idPost).delete();


//Editar publicación


export const editPost = (idPost, textNewUpdate) => {

  var washingtonRef = database.collection('posts').doc(idPost);

  return washingtonRef.update({
    title: textNewUpdate,
  })
  .then(function() {
      console.log("Document successfully updated!");
  })
  .catch(function(error) {
      console.error("Error updating document: ", error);
  });

}

