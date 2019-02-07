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
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'es';

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
  firebase.auth().signInWithPopup(provider).then(function(result) {
    let token = result.credential.accessToken;
    let user = result.user;
  });
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      let token = result.credential.accessToken;
    }
    let user = result.user;
  })
    .then(() => {
      location.hash = '#/redsocial';
    })
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};


export const starWithFirebase = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
    } else {
      // No user is signed in.
      console.log('No inicio sesión');
    }
  });
};

export const dataUsers = () => {
  let user = firebase.auth().currentUser;
  let name, email, photoUrl, uid, emailVerified, privacy;

  if (user !== null) {
    // User is signed in.
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
    privacy = user.privacy;
  } else {
    privacy = user.privacy;
  }
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
    // displayName: displayName,
    title: textNewPost,
    // privacy: userPrivacy,
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

