import { signUpWithEmailAndPassword, signInWithPassword, loginWithGoogle, loginWithFacebook, 
  addPost, deletePost, editPost, seeReaction , reactionCount } from './controller.js';

export const signUpWithEmailAndPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  const inputName = document.getElementById('name').value;
  
  signUpWithEmailAndPassword(email, password)
    .then(cred => {
      return firebase.firestore().collection('users').doc(cred.user.uid).set({
        name: inputName
      });
    }).then(() => {
      location.hash = '#/redsocial';
    });
  // .then(result => {
  //   const redir = {
  //     url: 'http://localhost:5000/'
  //   };
  //   result.user.sendEmailVerification(redir).catch(function(error) {
  //     alert(`No se pudo enviar email ${error}`);
  //   });
  //   firebase.auth().signOut();
  // })
};

export const signInWithPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const textError = document.getElementById('error');

  signInWithPassword(email, password)
    .then(() => {
      firebase.auth().onAuthStateChanged(user => { // para detectar que el usuario ya se ha logueado
        if (user) {
          location.hash = '#/redsocial';
        } else {
          console.log('no esta logueado o el email no ha sido verificado');
        }
      });
    // (result) => {
    // if (result.user.emailVerified) {
    //   location.hash = '#/redsocial';
    // } else {
    //   alert('Por favor, verifica tu email');
    // }
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode === 'auth/wrong-password' && errorMessage === 'The password is invalid or the user does not have a password.') {
        textError.innerHTML = 'Email o contraseña inválidos, vuelve a intentarlo';
      } else if (errorCode === 'auth/invalid-email' && errorMessage === 'The email address is badly formatted.') {
        textError.innerHTML = 'Ingrese un email válido';
      } else if (errorCode === 'auth/user-not-found' && errorMessage === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
        textError.innerHTML = 'Este usuario no está registrado';
      } else {
        textError.innerHTML = `${errorCode} / ${errorMessage}`;
      }
    });
};

export const loginWithGoogleOnClick = (evt) => {
  evt.preventDefault();
  loginWithGoogle()
    .then(() => {
      location.hash = '#/redsocial';
    })
    .catch(function(error) {
      let errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};

export const loginWithFacebookOnClick = (evt) => {
  evt.preventDefault();
  loginWithFacebook();
};

export const addPostOnSubmit = (evt) => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const inputText = document.getElementById('post');
      let inputSpace = '                                                                                ';
      const inputTrim = inputSpace.trim();
      // const stringSpace = String;
      // let valueSpace = `                                ${stringSpace}                                  `;
      // const valueTrim = valueSpace.trim();

      if (inputText.value === '' || inputText.value === inputTrim || inputText.value === ' ') {
        alert('Ingresa un contenido');
      } else {
        firebase.firestore().collection('users').doc(user.uid).get()
          .then(doc => {
            addPost(inputText.value, user.uid, doc.data().name);
          });
      }
    }
  });
};

export const deletePostOnClick = (objPost) => deletePost(objPost.id);

export const editarPostOnSubmit = (objPost) => {
  let textNewUpdate = document.querySelector('#texto-edit');
  let modal = document.querySelector('#myModal');
  modal.style.display = 'none';

  editPost(objPost.id, textNewUpdate.value);
};

export const reactionCountOnClick = (objPost) => {
  seeReaction(objPost.id);
  let numberAction = document.querySelector('#number-of-actions-1');
  numberAction.innerHTML = reactionCount(objPost.id, objPost.reaction);
};