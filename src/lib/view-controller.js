import { signUpWithEmailAndPassword, signInWithPassword, loginWithGoogle, loginWithFacebook, 
  addPost, deletePost, editPost } from './controller.js';

export const signUpWithEmailAndPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  signUpWithEmailAndPassword(email, password)
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
    });
};

export const signInWithPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const textError = document.getElementById('error');

  signInWithPassword(email, password)
    .then(() => {
      location.hash = '#/redsocial';
    // (result) => {
    // if (result.user.emailVerified) {
    //   location.hash = '#/redsocial'; // nuevo metodo y nueva ruta al muro de publicaciones
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
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
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
  const inputText = document.getElementById('post');
  const selecPrivacy = document.getElementById('privacidad');
  // const usarNameText = document.getElementById('nombre-usuario');
  let inputSpace = '                                                                                ';
  const inputTrim = inputSpace.trim();
  const stringSpace = String;
  let valueSpace = `                                ${stringSpace}                                  `;
  const valueTrim = valueSpace.trim();
  const data = {
    message: '',
    timeout: 2000,
    actionText: 'Undo'
  };
  if (inputText.value === '' || inputText.value === inputTrim || inputText.value === ' ') {
    alert('Ingresa un contenido');
  } else if (selecPrivacy.value === 'amigos' && inputText !== '' || inputText.value === valueTrim) {
    console.log('Soy una publicación de amigos');
    addPost(inputText.value, usarNameText, selecPrivacy)
      .then(() => {
        inputText.value = '';
        data.message = 'Publicación agregada';
      })
      .cath(() => {
        inputText.value = '';
        data.message = 'Lo sentimos, no se pudo agregar tu publicación';
      });
  } else if (selecPrivacy.value === 'publico' && inputText !== '' || inputText.value === valueTrim) {
    console.log('Soy una publicación publica');
    addPost(inputText.value, usarNameText, selecPrivacy)
      .then(() => {
        inputText.value = '';
        data.message = 'Publicación agregada';
      })
      .cath(() => {
        inputText.value = '';
        data.message = 'Lo sentimos, no se pudo agregar tu publicación';
      });
  } else {
    console.log('no se ejecuta');
  }
 
};

export const deletePostOnClick = (objPost) => deletePost(objPost.id);

export const editarPostOnSubmit = (objPost) => {
  let textNewUpdate = document.querySelector('#texto-edit');
  let modal = document.querySelector('#myModal');
  modal.style.display = 'none';

  editPost(objPost.id, textNewUpdate.value);
};
