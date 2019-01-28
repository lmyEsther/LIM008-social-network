import tempIndex from './tempIndex.js';

const showTemp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const section = document.getElementById('container');
  section.innerHTML = tempIndex[router];
};

const switchTemp = (hash) => {
  if (hash === '#/registro' || hash === '#/ingreso') {
    return showTemp(hash);
  }
};

window.addEventListener('load', switchTemp(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => switchTemp(window.location.hash);