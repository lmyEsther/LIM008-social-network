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
  }
  
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });