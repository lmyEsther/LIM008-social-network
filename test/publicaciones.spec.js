import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        li234: {
          title: 'soy mamá con experiencia',
          complete: false
        },
      }
    }
  }
};
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPost, getPost, deletePost } from '../src/lib/controller.js';

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
  it('Deberia eliminar el post agregado', (done) => {
    return deletePost('li234')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.id === 'li234');
          expect(result.id).toBe('undefined');
          done();
        }
      ));
  });
});