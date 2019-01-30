  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1qhX9vqrRX6h0jK_mvfg6XOAVZLieRNA",
    authDomain: "form-cf10c.firebaseapp.com",
    databaseURL: "https://form-cf10c.firebaseio.com",
    projectId: "form-cf10c",
    storageBucket: "form-cf10c.appspot.com",
    messagingSenderId: "98195973306"
  };
  firebase.initializeApp(config);
function signup(){
  let name = document.getElementById("user").value;
  let country = document.getElementById("Country").value;
  let mobile = document.getElementById("Mobile").value;
  let usermail = document.getElementById("email").value;
  let userpass = document.getElementById("pwd").value;
  document.getElementById("loaders").style.display = "block"
  firebase.auth().createUserWithEmailAndPassword(usermail,userpass)
.then((success) => {
                    swal({
                        title: "Account Created",
                        text: "You may proceed",
                        icon: "success",
                        button: "Login",
                      });
                    window.location = 'signin.html'
                })
        .catch((error) => {
            // Handle Errors here.
            document.getElementById("loaders").style.display = "none"
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                title: "Connection Error",
                text: errorMessage,
                icon: "warning",
                button: "OK",
            });
            // ...
        });



}




