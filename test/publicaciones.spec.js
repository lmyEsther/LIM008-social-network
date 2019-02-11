import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        li234: {
          title: 'soy mamá con experiencia',
          reaction: 0,
          complete: false
        },
      }
    }
  }
};
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPost, getPost, deletePost, seeReaction, reactionCount } from '../src/lib/controller.js';

describe('Div de Cada Post', () => {
  it('Debería agregar un post', (done) => {
    return addPost('Hola Mundo')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.title === 'Hola Mundo');
          expect(result.title).toBe('Hola Mundo');
          done();
        }
      ));
  });
  // agregar el test deberia editar una publicacion
  it('Deberia poder editar una publicación', (done) => {
    return editPost('li234', 'Hola Mundo')
    .then(() => editPost(
      (data) => {
        const result = data.find((post) => post.)
      }
    ));
  });

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
  it('Deberia poder dar reacciónes en la publicación', (done) => {
    return reactionCount('li234', 0)
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.reaction === 1);
          expect(result.reaction).toBe(1);
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
  
