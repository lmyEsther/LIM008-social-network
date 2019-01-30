import tempIndex from './tempIndex.js';
import { initEventListeners , loginWhitGoogle , regWithGoogle } from '../lib/registro.js'
loginWhitGoogle();
regWithGoogle();

export const initRouter = () => {
  console.log('aaaaaaaaaaaa')
  const showTemp = (routers) => {
    console.log(routers)
    const router = routers.substr(2, routers.length - 2);
    const section = document.getElementById('container');
    console.log('aaaaaa', router)
    section.innerHTML = tempIndex[router];
    initEventListeners();
  };
  
  const switchTemp = (hash) => {
    if (hash === '#/registro' || hash === '#/ingreso') {
      return showTemp(hash);
    }
    return showTemp('#/ingreso');
  };
  
  window.addEventListener('load', switchTemp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => switchTemp(window.location.hash);
}
