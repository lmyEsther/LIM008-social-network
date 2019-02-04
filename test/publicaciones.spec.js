import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          title: 'soy mamá con experiencia',
          complete: false
        },
      }
    }
  }
};
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPost, getPost } from '../src/lib/controller.js';

describe('lista de publicaciones', () => {
  it('Debería porder agregar una publicacion', (done) => {
    return addPost('soy mamá primeriza')
      .then(() => getPost(
        (data) => {
          const result = data.find((post) => post.title === 'soy mamá primeriza');
          expect(result.title).toBe('soy mamá primeriza');
          done();
        }
      ));
  });
});