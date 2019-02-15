import { addPost, deletePost, editPost, seeReaction, reactionCount, reactionCountSad, reactionCountLike, reactionCountLove, 
  getPost } from './controller.js';

import { signUpWithEmailAndPassword, signInWithPassword, loginWithGoogle, loginWithFacebook, logOut } from './controller-auth.js';

export const signUpWithEmailAndPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  const inputName = document.getElementById('name').value;
  let textError2 = document.getElementById('error2');
  
  signUpWithEmailAndPassword(email, password)
    .then(cred => {
      return firebase.firestore().collection('users').doc(cred.user.uid).set({
        name: inputName
      });
    })
    // .then(result => {
    //   const redir = {
    //     url: 'https://lmyesther.github.io/LIM008-social-network/src'
    //   };
    //   result.user.sendEmailVerification(redir).catch(function(error) {
    //     alert(`No se pudo enviar email ${error}`);
    //   });
    //   firebase.auth().signOut();
    // })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      
      if (errorCode === 'auth/invalid-email' && errorMessage === 'The email address is badly formatted.') {
        textError2.innerHTML = 'Ingrese un correo válido, example@example.com';
      } else if (errorCode === 'auth/weak-password' && errorMessage === 'Password should be at least 6 characters') {
        textError2.innerHTML = 'La contraseña debe contener mas de 6 caracteres';
      } else {
        textError2.innerHTML = `${errorCode} / ${errorMessage}`;
      }
    });
};

export const signInWithPasswordOnClick = (evt) => {
  evt.preventDefault();
 //  const form = evt.target.closets('form');

  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const textError = document.getElementById('error');

  signInWithPassword(email, password)
    // .then((result) => {
    //   if (result.user.emailVerified) {
    //     location.hash = '#/redsocial';
    //   } else {
    //     alert('Por favor, verifica tu email');
    //   }
    // })
    .then(() => {
      firebase.auth().onAuthStateChanged(user => { // para detectar que el usuario ya se ha logueado
        if (user) {
          location.hash = '#/redsocial';
        }
      });
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

export const loginWithGoogleOnClick = () => {
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

export const loginWithFacebookOnClick = () => {
  loginWithFacebook()
    .then(() => {
      location.hash = '#/redsocial';
    }).catch(function(error) {
      let errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};

export const addPostOnSubmit = (evt) => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const inputText = document.getElementById('post');
      let inputSpace = '                                                                                ';
      const inputTrim = inputSpace.trim();
      const privacity = document.getElementById('privacidad');

      if (inputText.value === '' || inputText.value === inputTrim || inputText.value === ' ') {
        alert('Ingresa un contenido');
      } else {
        firebase.firestore().collection('users').doc(user.uid).get()
          .then(doc => {
            if (user.displayName === null) { 
              addPost(inputText.value, user.uid, doc.data().name, privacity.value);
            } else { // en caso de que haya ingresado con facebook o google
              addPost(inputText.value, user.uid, user.displayName, privacity.value);
            }
          });
      }
    } else {
      alert('Inicia sesión en MommysLove para poder compartir tu historia');
    }
  });
};

export const deletePostOnClick = (objPost) => deletePost(objPost.id);

export const editarPostOnSubmit = (objPost) => {
  if (objPost.UID === firebase.auth().currentUser.uid) { 
    let textNewUpdate = document.querySelector('#texto-edit');
    let modal = document.querySelector('#myModal');
    modal.style.display = 'none';

    editPost(objPost.id, textNewUpdate.value);
  } 
};



export const reactionCountOnClick = (objPost) => {
  seeReaction(objPost.id)
    .then((result) => {
      const seeCount = result.data().reaction;
      const seeCountSad = result.data().reactionsad;
      const seeCountLike = result.data().reactionlike;
      const seeCountLove = result.data().reactionlove;
      return seeCount, seeCountSad, seeCountLike, seeCountLove;
    }).catch(() => {});

  let numberActionOne = document.querySelector('#number-of-actions-1');
  numberActionOne.innerHTML = reactionCount(objPost.id, objPost.reaction);
};
export const reactionCountSadOnClick = (objPost) => {
  let numberActionTwo = document.querySelector('#number-of-actions-2');
  numberActionTwo.innerHTML = reactionCountSad(objPost.id, objPost.reactionsad);
};
export const reactionCountLikeOnClick = (objPost) => { 
  let numberActionThree = document.querySelector('#number-of-actions-3');
  numberActionThree.innerHTML = reactionCountLike(objPost.id, objPost.reactionlike);
};
export const reactionCountLoveOnClick = (objPost) => {
  let numberActionFour = document.querySelector('#number-of-actions-4');
  numberActionFour.innerHTML = reactionCountLove(objPost.id, objPost.reactionlove);
};

export const logOutOnClick = (evt) => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      logOut()
        .then(() => {
          alert('Hasta Pronto');
          location.hash = '#/ingreso';
        });
    } else {
      location.hash = '#/registro';
    }
  });
};

export const getPostRouter = (callback) => {
  const user = firebase.auth().currentUser;

  return getPost(callback, user);
};