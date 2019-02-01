import { signUpWithEmailAndPasswordOnClick } from './view-controller.js';

export const registroForm = () => {
  const tmpl = `<div class="register">
    <form class="formulario">
    <div>
      <p class="btn-1"class="titulo-registro">Crea tu cuenta aquí</p>
    </div>
        <label class="btn-1" for="name">Nombre:</label>
        <input class="btn-1" type="text" id="name">
      
        <label  class="btn-1" for="reg-correo">Correo:</label>
        <input  class="btn-1" type="email" id="reg-correo" required>
      
        <label class="btn-1" for="reg-pass">Password:</label>
        <input  class="btn-1" type="password" id="reg-pass" required>

    <div class="botones-radio">
        <input type="radio" value="1">Madre primeriza 
        <input type="radio" value="2">Madre con experienca
    </div> 
      <span id="error2" class="message-error"></span>

      <div class="btn-1">
        <button id="btn-crear-cuenta" class="boton-iniciar">CREAR CUENTA</button>
       </div>
      <p class="sign-up">--- O ingresa con tu cuenta de: ---</p>
      </form>

      <div class="botones-login">
          <button id="register-facebook" class="btn-face"><img src="./logo/facebook.png"></button>
          <button id="register-google" class="btn-google"><img src="./logo/google-plus.png"></button>
      </div>
    </div>`;
  const div = document.createElement('div');
  div.innerHTML = tmpl;
  const btn = div.querySelector('#btn-crear-cuenta');
  btn.addEventListener('click', () => signUpWithEmailAndPasswordOnClick);
  return div;
};