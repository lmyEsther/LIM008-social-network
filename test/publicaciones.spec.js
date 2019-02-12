import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        li234: {
          content: 'soy mamá con experiencia',
          UID: 'GELahJ3Zp8WvMQXQHiood6O4C7C3',
          reaction: 0,
          reactionsad: 0,
          reactionlike: 0,
          reactionlove: 0,
          privacity: 'publico',
          date: '12 de febrero de 2019, 09:56:40 UTC-5'
        }
      }
    }
  }
};
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPost, getPost, deletePost, seeReaction, reactionCount, reactionCountSad, reactionCountLike, reactionCountLove, editPost } from '../src/lib/controller.js';

describe('Div de Cada Post', () => {
  it('Debería agregar un post', (done) => {
    return addPost('Hola Mundo', 'GELahJ3Zp8WvMQXQHiood6O4C7C3', 'Maria Alvarado', 'publico')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.content === 'Hola Mundo');
          expect(result.content).toBe('Hola Mundo');
          done();
        }
      ), 'user');
  });
  // agregar el test deberia editar una publicacion
  it('Deberia poder editar una publicación', (done) => {
    return editPost('li234', 'Bienvenida')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.id === 'li234');
          expect(result.content).toBe('Bienvenida');
          done();
        }
      ), null);
  }); 

  it('Deberia poder ver la reacción en la publicación', (done) => {
    return seeReaction('li234')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reaction === 0);
          expect(result.reaction).toBe(0);
          done();
        }
      ), null);
  });
  it('Deberia poder dar reaccióne de feliz en la publicación', (done) => {
    return reactionCount('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reaction === 1);
          expect(result.reaction).toBe(1);
          done();
        }
      ), 'userCualquiera');
  });
  it('Deberia poder dar reacción de tristeza en la publicación', (done) => {
    return reactionCountSad('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reactionsad === 1);
          expect(result.reactionsad).toBe(1);
          done();
        }
      ), null);
  });
  it('Deberia poder dar reacción de me gusta en la publicación', (done) => {
    return reactionCountLike('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reactionlike === 1);
          expect(result.reactionlike).toBe(1);
          done();
        }
      ), 'userCual');
  });
  it('Deberia poder dar reacción de me encanta en la publicación', (done) => {
    return reactionCountLove('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reactionlove === 1);
          expect(result.reactionlove).toBe(1);
          done();
        }
      ), null);
  });
  it('Deberia eliminar el post agregado', (done) => {
    return deletePost('li234')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.id === 'li234');
          expect(result).toBe(undefined);
          done();
        }
      ), 'usuario');
  });
});
  
