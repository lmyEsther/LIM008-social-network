export const signUpWithEmailAndPassword = (email, password, cb) => {    
  firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then(result => {
    //   const redir = {
    //     url: 'http://localhost:5000/'
    //   };
    //   result.user.sendEmailVerification(redir).catch(function(error) {
    //     alert(`No se pudo enviar email ${error}`);
    //   });
    //   firebase.auth().signOut();
    // })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;

      cb(errorCode + ' / ' + errorMessage);
    });
};

export const signInWithPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);


export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  // firebase.auth().languageCode = 'es';
  // provider.setCustomParameters({
  //   'login_hint': 'user@example.com'
  // });
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    // let token = result.credential.accessToken;
    // let user = result.user;
    result;
  });
};


export const loginWithFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    result;
  }).then(() => {
    location.hash = '#/redsocial';
  }).catch(function(error) {
    error;
  });
};

export const addPost = (textNewPost) =>
  firebase.firestore().collection('posts').add({
    title: textNewPost,
    reaction: 0,
  });

export const getPost = (callback) =>
  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
    }); 

export const deletePost = (idPost) =>
  firebase.firestore().collection('posts').doc(idPost).delete();


// Editar publicación


export const editPost = (idPost, textNewUpdate) => {
  let washingtonRef = firebase.firestore().collection('posts').doc(idPost);

  return washingtonRef.update({
    title: textNewUpdate,
  })
    .catch(function(error) {
      console.error('Error updating document: ', error);
    });
};

// Traer  las reacciones y conteo
export const seeReaction = (idPost) => {
  return firebase.firestore().collection('posts').doc(idPost).get()
    .then((result) => {
      const seeCount = result.data().reaction;
      return seeCount;
    }).catch(() => {});
};


export const reactionCount = (idPost, reactionPost) => {  
  let reactionClick = firebase.firestore().collection('posts').doc(idPost);
  return reactionClick.update({
    reaction: reactionPost += 1,
  });
};