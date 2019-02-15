import {signUpWithEmailAndPasswordOnClick, signInWithPasswordOnClick, 
  loginWithGoogleOnClick, loginWithFacebookOnClick, 
  addPostOnSubmit, deletePostOnClick, editarPostOnSubmit, 
  reactionCountOnClick, reactionCountSadOnClick, reactionCountLikeOnClick, reactionCountLoveOnClick, 
  logOutOnClick} from '../lib/view-controller.js';

export const registroForm = () => {
  const tmpl = `
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
  div.innerHTML = tmpl;
  const btn = div.querySelector('#btn-crear-cuenta');
  btn.addEventListener('click', signUpWithEmailAndPasswordOnClick);
  
  return div;
};

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

// creando la publicacion de forma dinamica por cada post publicado
const cadaPost = (objPost, currentUserId) => {
  const elem = document.createElement('div');
  elem.classList.add('formulario-post');
  elem.innerHTML = `
  <div class="imagen-get">
    <div class="fondo-avatar">
      <img class="imagen-tamaño" src="./logo/girl (1).png" alt="avatar">
    </div>
    <div>
      <h4 class="nombre-usuario">${objPost.name}</h4>
      <p id="fecha">${objPost.date.toDate()}</p>
    </div>
    ${objPost.UID === currentUserId ? `<div class="icono-estado">
    <button class="selec-confi" id="mostrar-modal">Editar</button>
    <button class="selec-confi" id="confirm-eliminar">Eliminar</button>
  </div>` : ''}
  </div>   

  <div id="myModal" class="modal">
    <div class="modal-content">
      <button id="cierre-post"> &times </button>
      <button class="btn-edit" id="editar-post-${objPost.id}">Guardar</button>
      <textarea id="texto-edit" cols="60" rows="5">${objPost.content}</textarea>
    </div>
  </div>

  <div id="confirm-modal" class="modal">
    <div class="modal-content">
      <p>¿Estas segura de que quieres eliminar este post?</p>
      <button id="eliminar-post-${objPost.id}" class="btn-edit">Si</button>
      <button id="no-eliminar" class="btn-edit">No</button>
    </div>
  </div>

  <div id="contenido-post">
    <div>
        <p id="texto-publicacion">${objPost.content}</p>
    </div>
  <div>
      <button id="emoji-1" class="emoji-btn">
          <img class="emoji-post" src="./logo/happy.png"></img>
      </button>
      <span id="number-of-actions-1">${objPost.reaction}</span>
      <button id="emoji-2" class="emoji-btn">
          <img class="emoji-post" src="./logo/sad.png"></img>
      </button>
      <span id="number-of-actions-2">${objPost.reactionsad}</span>
      <button id="emoji-3" class="emoji-btn">
          <img  class="emoji-post" src="./logo/likee.png"></img>
      </button>
      <span id="number-of-actions-3">${objPost.reactionlike}</span>
      <button id="emoji-4" class="emoji-btn">
          <img class="emoji-post" src="./logo/heart.png"></img>
      </button>
      <span id="number-of-actions-4">${objPost.reactionlove}</span>
  </div>
  </div>
  `;

  const modalConfirm = elem.querySelector('#confirm-modal');
  if (objPost.UID === currentUserId) {
    const btnConfirm = elem.querySelector('#confirm-eliminar'); 
    btnConfirm.addEventListener('click', () => {
      modalConfirm.style.display = 'block';
    });
    const btnEliminar = elem.querySelector(`#eliminar-post-${objPost.id}`);
    btnEliminar.addEventListener('click', () => deletePostOnClick(objPost));

    const noEliminar = elem.querySelector('#no-eliminar');
    noEliminar.addEventListener('click', () => {
      modalConfirm.style.display = 'none';
    });
  
    const btnModal = elem.querySelector('#mostrar-modal');
    btnModal.addEventListener('click', () => {
      let modal = elem.querySelector('#myModal');
      modal.style.display = 'block';
    });
    const btnEditar = elem.querySelector(`#editar-post-${objPost.id}`);
    btnEditar.addEventListener('click', () => editarPostOnSubmit(objPost)); 
    const btnCerrar = elem.querySelector('#cierre-post');
    btnCerrar.addEventListener('click', () => {
      let modal = document.querySelector('#myModal');
      modal.style.display = 'none';
    });
  }

  const reactions = {
    '#emoji-1': reactionCountOnClick,
    '#emoji-2': reactionCountSadOnClick,
    '#emoji-3': reactionCountLikeOnClick,
    '#emoji-4': reactionCountLoveOnClick
  };

  Object.keys(reactions).forEach((elemId) => {
    const btnReaction = elem.querySelector(elemId);
    btnReaction.addEventListener('click', () => reactions[elemId](objPost));
  });
  return elem;
};

// creando la pagina de la red social
export const redsocial = (posts) => {
  const temp = `
  <header class="header-position">
    <div class="marca-header">
      <div class="encabezado-redsocial"><img class="logo-redsocial" src="./logo/mommy.png" alt="logo">
      </div>
    </div>
    <div class="op-header">
      <a class="opcion-header" href=""><img class="img-header"  src="./logo/love.png" alt="Publicaciones"></a>  
      <a class="opcion-header" href=""><img class="img-header"  src="./logo/profiles (1).png" alt="Noticias"></a>  
      <a class="opcion-header" href=""><img class="img-header"  src="./logo/user (1).png" alt="Perfil"></a> 
      <a class="opcion-header" id="cerrar-sesion" href=""><img class="img-header" src="./logo/cancel.png" alt="cerrar-sesión"></a>
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
                <option value="amigas">Amigas</option>
                <option value="publico">Público</option>
            </select>
            <button class="botones-post" id="publicar">Publicar</button>
        </div>
      </form>
    </div>
    <section id="lista-publicaciones"></section>
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
  const btnLogOut = div.querySelector('#cerrar-sesion');
  const btnPost = div.querySelector('#publicar');
  const tagDiv = div.querySelector('#lista-publicaciones');
  posts.forEach(post => {
    tagDiv.appendChild(
      cadaPost(post, firebase.auth().currentUser.uid));
  });
  btnPost.addEventListener('click', addPostOnSubmit);
  btnLogOut.addEventListener('click', logOutOnClick);
  return div;
};

