// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
}

const ingresoFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
     firebase.auth().signInWithPopup(provider).then( results => {
      $("#avatar").attr("src", result.user.photoURL)
      $(".modal").modal("close")
      Materialize.toast("Bienvenido ${result.user.displayName} !!", 4000)   
})
.cath(error => {
  Materialize.toast("Error al autenticarse con facebook: ¢{error}", 4000)
})
};

document.getElementById("facebook").addEventListener("click", () => {
  ingresoFacebook();
})

/*
alert("Exito");
console.log(results);
}).catch(function(error){
 alert("Error");
 console.log(error);
}) 

*/