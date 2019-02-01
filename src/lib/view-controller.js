import { signUpWithEmailAndPassword, signInWithPassword } from './controller.js';

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
