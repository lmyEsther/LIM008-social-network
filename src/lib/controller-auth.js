export const signUpWithEmailAndPassword = (email, password) =>    
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInWithPassword = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    result;
  });
};

export const loginWithFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    result;
  });
};

export const logOut = () => firebase.auth().signOut();
