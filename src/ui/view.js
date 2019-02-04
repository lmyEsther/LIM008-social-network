import {signUpWithEmailAndPasswordOnClick, signInWithPasswordOnClick, 
  loginWithGoogleOnClick, loginWithFacebookOnClick, 
  addPostOnSubmit, deletePostOnClick} from '../lib/view-controller.js';

export const registroForm = () => {
  const tmpl = `<header class="cabecera">
  <img src="logo/encabezado.png" alt="encabezado">
</header>
<nav class="nav-view">
<ul>
  <li>
    <a href="#/registro"><img class="boton-view" src="./logo/planing.png"></a>
  </li>
  <li>
    <a href="#/ingreso"><img class="boton-view" src="./logo/log-in-button-with-arrow.png"></a>
  </li>
</ul>
</nav>
    <div class="register">
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
          </form>
        </div>
    <footer class="footer">
      <img class="footer-img" src="./logo/Sin título-1.png" alt="logo">
      <p class="footer-texto-color"><span class="barra-navegacion">Mommy’s Love</span> Copyright © All rights reserved. </p>
    </footer>`;
  const div = document.createElement('div');
  div.innerHTML = tmpl;
  const btn = div.querySelector('#btn-crear-cuenta');
  btn.addEventListener('click', signUpWithEmailAndPasswordOnClick);
  
  return div;
};

export const ingresoForm = () => {
  const temp = `<header class="cabecera">
  <img src="logo/encabezado.png" alt="encabezado">
</header>
<nav class="nav-view">
<ul>
  <li>
    <a href="#/registro"><img class="boton-view" src="./logo/planing.png"></a>
  </li>
  <li>
    <a href="#/ingreso"><img class="boton-view" src="./logo/log-in-button-with-arrow.png"></a>
  </li>
</ul>
</nav>
    <div>
      <form class="formulario"> 
        <p class="texto-1" class="texto-center" class="titulo-registro">"Ya no estás sola, aquí está la comunidad que necesitabas"</p>
        <br>
        <p class="texto-center" class="btn-1">Iniciar sesión con tu cuenta</p>
        <div class="input">
        <input class="btn-1" id="correo" type="text" placeholder="Correo electrónico" required>
        <input class="btn-1" id="password" type="password" placeholder="Contraseña" required>
      </div>

        <div class="btn-1">
          <button id="ingresar" class="boton-iniciar">INGRESA</button>
        </div>
        <p>¿Eres nueva? --- <a href="#/registro" class="link-registro"> REGISTRATE </a> ---  </p>
        <p class="sign-up">--- O ingresa con tu cuenta de: ---</p>
        </form>
        <div class="botones-login">
            <button id= "login-facebook" class="btn-face"><img src="./logo/facebook.png"></button>
            <button id="login-google" class="btn-google"><img src="./logo/google-plus.png"></button></li>
        </div>
    </div>
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

// <!--<option id="eliminar-post-${objPost.id}" value="eliminar">Eliminar</option>-->No funciona con este evento
// creando la publicacion de forma dinamica por cada post publicado
const cadaPost = (objPost) => {
  const elem = document.createElement('div');
  elem.classList.add('formulario-post');
  elem.innerHTML = `
   <div>
   <div class="imagen-post">
   <div class="fondo-avatar">
     <img class="imagen-tamaño" src="./logo/girl (1).png" alt="avatar">
     </div>
    <div class="icono-estado">
    <span id="nombre-usuario">${objPost.displayName}</span>
    <span><img class="footer-img" src="./logo/friendship.png" alt="amigas"></span>
    </div>
    <select id="configuracion" class="selec-confi">
      <option id="editar-post" value="editar">Editar</option>
   </select>
   </div>
   <button class="botones-post" id="eliminar-post-${objPost.id}">Eliminar</button>
   

<div id="contenido-post">
  <div>
    <span>
     <span id="texto-publicacion">${objPost.title}</span>
    <span>
 </div>
  <div>
      <button class="emoji-btn">
          <img class="emoji-post" src="./logo/happy.png"></img>
      </button>
      <button class="emoji-btn">
          <img class="emoji-post" src="./logo/sad.png"></img>
      </button>
      <button class="emoji-btn">
          <img  class="emoji-post" src="./logo/heart.png"></img>
      </button>
      <button class="emoji-btn">
          <img class="emoji-post" src="./logo/sonaja-logo.ico"></img>
      </button>
  </div>
  </div>
  `;
  
  const optionEliminar = elem.querySelector(`#eliminar-post-${objPost.id}`);
  optionEliminar.addEventListener('click', () => deletePostOnClick(objPost));
  return elem;
};

// creando la pagina de la red social
export const redsocial = (posts) => {
  const temp = `<header class="header-position">
  <div class="marca-header">
    <img class="footer-img" src="./logo/Sin título-1.png" alt="logo">
    <p class="barra-navegacion">Mommy's Love</p>
  </div>
 <div class="op-header">
  <a class="opcion-header" href="#"><img class="img-header"  src="./logo/love.png" alt="Publicaciones"></a>  
  <a class="opcion-header" href="#"><img class="img-header"  src="./logo/profiles (1).png" alt="Noticias"></a>  
  <a class="opcion-header" href="#"><img class="img-header"  src="./logo/user (1).png" alt="Perfil"></a> 
 </div>

</header>
<main>
<div id="ingreso-post">
<form class="formulario-post">
  <div class="imagen-post">
   <div class="fondo-avatar">
      <img class="imagen-tamaño" src="./logo/girl (1).png" alt="avatar">
   </div>
      <textarea  class="textarea" name="post" id="post" cols="30" rows="3" placeholder="¡Publica tus novedades!"></textarea>
  </div>
  <div class="imagen-post">
      <select class="botones-post" name="" id="privacidad">
          <option id="opcion-amigas" value="amigos">Amigas</option>
          <option id="opcion-publico" value="publico">Público</option>
      </select>
      <button class="botones-post" id="publicar">Publicar</button>
  </div>
</form>
</div>
<div id="publicacion-post">


<section id="lista-publicaciones">
      
</section>

</main>

<footer class="footer-color">
<div class="texto-footer">
<div class="opciones-footer">
     <a class="link-footer" href=""><p>INFORMACIÓN</p></a> 
     <a class="link-footer" href=""><p>AYUDA</p></a> 
     <a class="link-footer" href=""><p>IDIOMA</p></a> 
</div>
<div class="divisor"></div>
  <div class="footer">
      <img  class="footer-img" src="./logo/Sin título-1.png" alt="logo">
      <p class="footer-texto-color"><span class="barra-navegacion">Mommy’s Love</span> Copyright © All rights reserved. </p>
  </div>  
</div>
</footer>`;

  const div = document.createElement('div');
  div.innerHTML = temp;

  const btnPost = div.querySelector('#publicar');
  const tagDiv = div.querySelector('#lista-publicaciones');
  posts.forEach(post => {
    tagDiv.appendChild(cadaPost(post));
  });
  btnPost.addEventListener('click', addPostOnSubmit);
  return div;
};

