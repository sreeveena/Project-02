
$(function() {
    $(".app").hide();
    $("#signOut").hide();
    $(".registerbtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();  
      var email = document.getElementById("email").value;
      var password = document.getElementById("psw").value;
      console.log("user entered email:" + document.getElementById("email").value);
      console.log("user entered password:" +document.getElementById("psw").value);
      registerUser(email,password, "events");
    });

    $(".signinbtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var password = $("#signPsw").val().trim();
      var email = $("#signEmail").val().trim();
      
      authUser(email, password, "events");
      
    });
// checking for session id when a page is reloaded
    checkSession();

});

//-------------------- function to register a user---------------------
function registerUser(email, password, provider){
    var user = {
        email: email,
        password: password,
        provider: provider
    };

    // Send the PUT request.
    $.ajax("/api/register", {
        type: "POST",
        data: user
        }).then(
        function(err) {
            console.log("Registered User");
            console.log(err);
        }
    );
}
   //-----------------------sign in auth function ----------------------

function authUser(email, password, provider){
    var password = {
        password: password,
        provider: provider
    };

    // Send the POST request.
    $.ajax("/api/auth/"+email, {
        type: "POST",
        data: password
        }).then(
        function(res) {
            console.log(res);
            checkSession();
        }
    );
}
//-----------------------Check for session id ----------
function checkSession(){
    $.ajax("/api/session", {
        type: "GET"
      }).then(
        function(res) {
          console.log("session id " + res.id);
        //   console.log(res);
          if(res.id) {
              $(".login-form").hide();
              $(".app").show();
              $("#app-content").html("Welcome " + res.id + "!");
              $("#signOut").show();
              $(".g-signin2").hide();
          }
        }
      );
}
//--------------------sign out ----------------------
function eventSignOut(){
    signOut();
    $.ajax("/api/session", {
        type: "DELETE"
      }).then(
        function(res) {
         location.reload(); 
        }
      );
}
//-------------------------Google functions----------
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

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
//   console.log("ID Token: " + id_token);
//registerUser function call with google email parameters.
    registerUser(profile.getEmail(),"", "google");
    authUser(profile.getEmail(),"", "google");
    checkSession();
    
}