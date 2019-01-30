export default {

  registro: `<div class="register">
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
    </div>`,

  ingreso: `<div>
    <form class="formulario"> 
      <p class="texto-1" class="texto-center" class="titulo-registro">"Ya no estás sola, aquí está la comunidad que necesitabas"</p>
      <br>
      <p class="texto-center" class="btn-1">Iniciar sesión con tu cuenta</p>
      <div class="input">
      <input class="btn-1" id="correo" type="text" placeholder="Correo electrónico">
      <input class="btn-1" id="password" type="password" placeholder="Contraseña">
    </div>
      <div class="btn-1">
        <button id="ingresar" class="boton-iniciar">INGRESA</button>
      </div>

      <p class="sign-up">--- O ingresa con tu cuenta de: ---</p>
      </form>

      <div class="botones-login">
          <button id= "login-facebook" class="btn-face"><img src="./logo/facebook.png"></button>
          <button id="login-google" class="btn-google"><img src="./logo/google-plus.png"></button></li>
      </div>
      <p>¿Eres nueva? --- <a href="#/registro" class="link-registro"> REGISTRATE </a> ---  </p>
</div>`

};