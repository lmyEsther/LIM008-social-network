import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          title: 'terminar la pildora',
          complete: false
        },
      }
    }
  }
};
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { addPost, getPost } from '../src/lib/controller.js';

describe('lista de notas', () => {
  it('Debería porder agregar una publicacion', (done) => {
    return addPost('soy mamá primeriza')
      .then(() => getPost(
        (data) => {
          const result = data.find((note) => note.title === 'soy mamá primeriza');
          expect(result.title).toBe('soy mamá primeriza');
          done();
        }
      ));
  });
});