import { signUpWithEmailAndPassword } from './controller.js';

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
