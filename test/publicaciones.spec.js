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
          complete: false
        }
      }
    }
  }
};
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPost, getPost, deletePost, seeReaction, reactionCount, reactionCountSad, reactionCountLike, reactionCountLove } from '../src/lib/controller.js';

describe('Div de Cada Post', () => {
  it('Debería agregar un post', (done) => {
    return addPost('Hola Mundo', 'GELahJ3Zp8WvMQXQHiood6O4C7C3', 'Maria Alvarado')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.content === 'Hola Mundo');
          expect(result.content).toBe('Hola Mundo');
          done();
        }
      ));
  });
  // agregar el test deberia editar una publicacion
  it('Deberia poder ver la reacción en la publicación', (done) => {
    return seeReaction('li234')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reaction === 0);
          expect(result.reaction).toBe(0);
          done();
        }
      ));
  });
  it('Deberia poder dar reaccióne de feliz en la publicación', (done) => {
    return reactionCount('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reaction === 1);
          expect(result.reaction).toBe(1);
          done();
        }
      ));
  });
  it('Deberia poder dar reacción de tristeza en la publicación', (done) => {
    return reactionCountSad('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reactionsad === 1);
          expect(result.reactionsad).toBe(1);
          done();
        }
      ));
  });
  it('Deberia poder dar reacción de me gusta en la publicación', (done) => {
    return reactionCountLike('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reactionlike === 1);
          expect(result.reactionlike).toBe(1);
          done();
        }
      ));
  });
  it('Deberia poder dar reacción de me encanta en la publicación', (done) => {
    return reactionCountLove('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reactionlove === 1);
          expect(result.reactionlove).toBe(1);
          done();
        }
      ));
  });
  it('Deberia eliminar el post agregado', (done) => {
    return deletePost('li234')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.id === 'li234');
          expect(result).toBe(undefined);
          done();
        }
      ));
  });
});
  
