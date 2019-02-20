import { editProfileOnClick } from '../lib/view-controller.js';

export const profile = (userProfile) => { // falta aún el init-router de profile y hacerlo dinamico
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
    <div class="fondo-avatar">
      <img class="imagen-tamaño" src="./logo/girl (1).png" alt="avatar">
    </div>
    <div>
      <h4 class="nombre-usuario">${userProfile.name}</h4>
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

  return div;
};