import {addPostOnSubmit, deletePostOnClick, editarPostOnSubmit, 
  reactionCountOnClick, reactionCountSadOnClick, reactionCountLikeOnClick, reactionCountLoveOnClick, 
  logOutOnClick} from '../lib/view-controller.js';

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

  if (objPost.UID === currentUserId) {
    const modalConfirm = elem.querySelector('#confirm-modal');
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

