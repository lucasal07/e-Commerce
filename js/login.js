
const pError = document.getElementById("pError");

function showAlert() {
    pError.innerHTML =  ` <div role="alert">
    <p>Alguno de los campos está vacío, porfavor completalo</p>
    </div> `
}

function TestCampos() {

    let email = document.getElementById("email");
    let passwordContainer = document.getElementById("passwordContainer");
    if ((email.value.length === 0) || (passwordContainer.value.length === 0)) {
        showAlert()
    } 
    else {
          location.href = "main.html"; 
        }
}




let ButtonIngr = document.getElementById("buttonIngr");
ButtonIngr.addEventListener("click",function(){
    TestCampos();
})


function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    location.href = "main.html";
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
      console.log("User signed out.");
      location.href ="index.html";
    });
  }
  let email = document.getElementById("email");
  ButtonIngr.addEventListener("click", (evt) => {
    if (email.value) localStorage.setItem("user", email.value);
  });
  

