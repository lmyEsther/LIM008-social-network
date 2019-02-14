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
import { signInWithPassword, loginWithGoogle, loginWithFacebook, signUpWithEmailAndPassword, logOut } from '../src/lib/controller-auth.js';

describe('sesión iniciada', () => {
  it('Debería poder iniciar sesion', () => {
    return signInWithPassword('kilolo@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('kilolo@gmail.com');
      });
  });
});

describe('sesión iniciada', () => {
  it('Debería poder registrar al usuario', () => {
    return signUpWithEmailAndPassword('kilolo@gmail.com', '123456')
      .then((user) => {
        expect(user.email).toBe('kilolo@gmail.com');
      });
  });
});

describe('sesion iniciada', () => {
  it('Deberia poder iniciar sesion con google', () => {
    return loginWithGoogle()
      .then(() => {
        expect('').toBe('');
      });
  });
});

describe('sesion iniciada', () => {
  it('Deberia poder iniciar sesion con Facebook', () => {
    return loginWithFacebook()
      .then(() => {
        expect('').toBe('');
      });
  });
});

describe('sesion cerrada', () => {
  it('deberia poder cerrar sesion', () => {
    return logOut()
      .then(() => {
        expect(firebase.auth().currentUser).toBe(null);
      });
  });
}); 

