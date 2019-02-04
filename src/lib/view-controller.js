import { signUpWithEmailAndPassword, signInWithPassword, loginWithGoogle, loginWithFacebook, 
  addPost, deletePost } from './controller.js';

export const signUpWithEmailAndPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('reg-correo').value;
  const password = document.getElementById('reg-pass').value;
  signUpWithEmailAndPassword(email, password, (error) => {
    if (error) {
      alert(error);
    }
  });
};

export const signInWithPasswordOnClick = (evt) => {
  evt.preventDefault();
  const email = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  signInWithPassword(email, password, (error) => {
    if (error) {
      alert(error);
    }
  });
};

export const loginWithGoogleOnClick = (evt) => {
  evt.preventDefault();
  loginWithGoogle();
};

export const loginWithFacebookOnClick = (evt) => {
  evt.preventDefault();
  loginWithFacebook();
};

export const addPostOnSubmit = (evt) => {
  evt.preventDefault();
  const inputText = document.getElementById('post');
  // const spanPost = document.getElementById('texto-publicacion');
  // data que muestra el snackbar
  const data = {
    message: '',
    timeout: 2000,
    actionText: 'Undo'
  };

  addPost(inputText.value)
    .then(() => {
      inputText.value = '';
      data.message = 'Publicación agregada';
    }).cath(() => {
      inputText.value = '';
      data.message = 'Lo sentimos, no se pudo agregar tu publicación';
    });
};

export const deletePostOnClick = (objPost) => deletePost(objPost.id);
