export const signUpWithEmailAndPassword = (email, password, cb) => {    
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      cb(errorCode + ' / ' + errorMessage);
    });
};

export const signInWithPassword = (email, password, callback) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      location.href = 'ui/redsocial.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      callback(errorCode + ' / ' + errorMessage);
    });
};