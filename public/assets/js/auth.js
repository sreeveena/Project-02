var sessionId = "";
$(function() {
    $(".app").hide();
    $("#signOut").hide();
    $("#registered-events").hide();
    $("#email").focusout(function() {  
        var email = $(this).val();
        validateEmail($(this), email, "#valiEmail");
    });
    $("#signEmail").focusout(function() {  
        var email = $(this).val();
        validateEmail($(this), email, "#valiSignEmail");
    });
    $("#psw").focusout(function() {  
        var psw = $(this).val();
        validatePsw($(this), psw);
    });
    $("#psw-repeat").focusout(function() {  
        var pswRepeat = $(this).val();
        checkPasswordMatch(psw);
    });
    
    // $("#regisButton").on("click", function(event) {
    //     console.log("Pay now clickd");
    //     $(location).attr('href', '/payment');
    //   });

    $(".registerbtn").on("click", function(event) {
       
      // Make sure to preventDefault on a submit event.
      event.preventDefault();  
      if(!checkPasswordMatch($("#psw-repeat")) || !(validateEmail($("#email"), $("#email").val(), "#valiEmail")))
      return;
      var email = document.getElementById("email").value;
      var password = document.getElementById("psw").value;

      registerUser(email,password, "events");
      $('#reg').find('input').val('');
    });

    $(".signinbtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var password = $("#signPsw").val().trim();
      var email = $("#signEmail").val().trim();
      
      authUser(email, password, "events");
      $('#sign').find('input').val('');
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
        function(res, err) {
            
            if(res.id != ""){
                $("#registerModal").modal('hide');
                if(provider != "events") 
                    authUser(email,"", provider);
            }
            
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
        function(res, err) {
            if(res.result == "success"){
                $("#loginModal").modal('hide');
                $(elem).html("");
                checkSession();
            }else{
                var elem=$("#invalidLogin");
                $(elem).html("Please enter a valid email or password.");
                $(elem).css("color", "red");
            }
        }
    );
}

function getSessionId() {
    return sessionId;
}

//-----------------------Check for session id ----------
function checkSession(){
    $.ajax("/api/session", {
        type: "GET"
      }).then(
        function(res) {
          sessionId = res.id;
          if(res.id) {
              $("#register-form").hide();
              $("#signin-form").hide();
              $(".app").show();
              $("#app-content").html("Welcome " + res.id + "!");
              $("#signOut").show();
              $("#registered-events").show();
              $(".g-signin2").hide();
              if(res.id == "admin@motives.com" && !window.location.href.includes("admin")){
                  window.location.href = "admin";
              }
              fetchRegisteredEvents(res.id);

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
          
         sessionId = "";
         location.assign("/");
        
        }
    );
  
}
//-------------------------Google functions----------
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {

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

//registerUser function call with google email parameters.
    registerUser(profile.getEmail(),"", "google");
    // authUser(profile.getEmail(),"", "google");
    console.log("profile "+JSON.stringify(profile));
    console.log("google user has checked in");  
}
//--------------------- function to validate email--------------------------
function validateEmail(elem, email, name){
    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email == "" || !re.test(String(email).toLowerCase())){
        elem.css("border-color", "red");
        $(name).html("Please enter a valid email.");
        $(name).css("color", "red");
        return false;
    }else{
        elem.css("border-color", "white");
        $(name).html("");
        return true;
    }
}

//------------------------- function to validate password---------------------------
function validatePsw(elem, psw){
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!re.test(psw)){
        elem.css("border-color", "red");
        $("#valiPsw").html("Please enter a valid password");
        $("#valiPsw").css("color", "red");
    }else{
        elem.css("border-color", "white");
        $("#valiPsw").html("");
    }
    
}

//---------------------------function to check the password re-entry--------------
function checkPasswordMatch() {
    var password = $("#psw").val();
    var confirmPassword = $("#psw-repeat").val();

    if (password != confirmPassword){
        $("#valiRepeatPsw").html("Passwords do not match!");
        $("#valiRepeatPsw").css("color", "red");
        $("#psw-repeat").css("border-color", "red");
        return false;
    }else{
        $("#valiRepeatPsw").html("");
        $("#psw-repeat").css("border-color", "white");
        return true;
    }
    
}