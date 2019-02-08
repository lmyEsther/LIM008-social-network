import { initRouter } from '../ui/init-router.js';

const init = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyCS6xlGDQkVczoOT8vu6sgNcSP5XCuRG-E',
    authDomain: 'mommyslove-edf5d.firebaseapp.com',
    databaseURL: 'https://mommyslove-edf5d.firebaseio.com',
    projectId: 'mommyslove-edf5d',
    storageBucket: 'mommyslove-edf5d.appspot.com',
    messagingSenderId: '390042811062'
  });
  initRouter();
};

window.addEventListener('load', init());