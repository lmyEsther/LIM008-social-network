import { signInWithPasswordOnClick, loginWithGoogleOnClick, loginWithFacebookOnClick } from '../lib/view-controller.js';

export const ingresoForm = () => {
  const temp = `
      <header class="cabecera">
          <img src="logo/encabezado.png" alt="encabezado">
      </header>
  
      <nav class="nav-view">
        <ul>
          <li>
            <a href="#/ingreso"><img class="boton-view" src="./logo/log-in-button-with-arrow.png"></a>
          </li>
        </ul>
      </nav>
  
      <main>
        <form class="formulario"> 
            <p class="texto-1" class="btn-1">"Comparte <span class="link-registro">tu</span> historia y la de tu <span class="link-registro">bebe</span>"</p>
            <p class="texto-center" class="btn-1">Iniciar sesión con tu cuenta</p>
            <div class="input">
                <input class="btn-1" id="correo" type="email" placeholder="Correo electrónico" required>
                <input class="btn-1" id="password" type="password" placeholder="Contraseña" required>
                <p id="error" class="message-error"></p>
            </div>
  
            <div class="btn-1">
                <button id="ingresar" class="boton-iniciar">Ingresa</button>
            </div>
            <p>¿Eres nueva? --- <a href="#/registro" class="link-registro"> REGISTRATE </a> ---  </p>
            <p class="sign-up">--- O ingresa con tu cuenta de: ---</p>
        </form>
        <div class="botones-login">
            <button id= "login-facebook" class="btn-face"><img src="./logo/facebook.png"></button>
            <button id="login-google" class="btn-google"><img src="./logo/google-plus.png"></button></li>
        </div>
      </main>
      <footer class="footer">
          <img class="footer-img" src="./logo/Sin título-1.png" alt="logo">
          <p class="footer-texto-color"><span class="barra-navegacion">Mommy’s Love</span> Copyright © All rights reserved. </p>
      </footer>`;
  
  const div = document.createElement('div');
  div.innerHTML = temp;
  const btnIngresar = div.querySelector('#ingresar');
  const btnGoogle = div.querySelector('#login-google');
  const btnFacebook = div.querySelector('#login-facebook');
  btnIngresar.addEventListener('click', signInWithPasswordOnClick);
  btnGoogle.addEventListener('click', loginWithGoogleOnClick);
  btnFacebook.addEventListener('click', loginWithFacebookOnClick);
    
  return div;
};