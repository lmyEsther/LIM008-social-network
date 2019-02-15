import { signUpWithEmailAndPasswordOnClick } from '../lib/view-controller.js';

export const registroForm = () => {
  const template = `
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
      <main class="register">
          <form class="formulario">
              <div>
                <p class="titulo-registro">Crea tu cuenta aquí</p>
              </div>
                
              <div class="input">
                <input class="btn-1" type="text" id="name" required placeholder="Nombre de Perfil">
                <input class="btn-1" id="reg-correo" type="email" placeholder="Correo electrónico" required>
                <input class="btn-1" id="reg-pass" type="password" placeholder="Contraseña" required>
                <p id="error2" class="message-error"></p>
              </div>
  
              <div class="botones-radio">
                <input type="radio" value="1">Madre primeriza 
                <input type="radio" value="2">Madre con experienca
              </div> 
              
              <div class="btn-1">
                  <button id="btn-crear-cuenta" class="boton-iniciar">Crear Cuenta</button>
              </div>
          </form>
      </main>
      <footer class="footer">
          <img class="footer-img" src="./logo/Sin título-1.png" alt="logo">
          <p class="footer-texto-color"><span class="barra-navegacion">Mommy’s Love</span> Copyright © All rights reserved. </p>
      </footer>`;
  const div = document.createElement('div');
  div.innerHTML = template;
  const btn = div.querySelector('#btn-crear-cuenta');
  btn.addEventListener('click', signUpWithEmailAndPasswordOnClick);
    
  return div;
};