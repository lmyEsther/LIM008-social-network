import { registroForm, ingresoForm, redsocial } from './view.js';
import { getPostRouter } from '../lib/view-controller.js';


export const initRouter = () => {
  const showTemp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const section = document.getElementById('container');
    section.innerHTML = '';
    if (router === 'registro') {
      const elem = registroForm();
      section.appendChild(elem);
    } else if (router === 'ingreso') {
      section.appendChild(ingresoForm());
    } else if (router === 'redsocial') {
      getPostRouter((posts) => {
        section.innerHTML = '';        
        section.appendChild(redsocial(posts));
      });
    }
  };
  
  const switchTemp = (hash) => {
    if (hash === '#/registro' || hash === '#/ingreso' || hash === '#/redsocial') {
      return showTemp(hash);
    }
    return showTemp('#/ingreso');
  };
  
  window.addEventListener('load', switchTemp(window.location.hash));
  window.addEventListener('hashchange', () => switchTemp(window.location.hash));
};