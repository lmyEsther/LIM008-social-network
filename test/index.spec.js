// configurando firebase mock

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

// iniciando tests

import { signInWithPassword , loginWithGoogle } from '../src/lib/controller.js';

describe('sesión iniciada', () => {
  it('Debería poder iniciar sesion', () => {
    return signInWithPassword('kilolo@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('kilolo@gmail.com');
      });
  });
});


describe('sesion iniciada', () => {
  it('Deberia poder iniciar sesion con google', () => {
    return loginWithGoogle()
    .then(() => {
     expect().toBe('');
    });
  });
});