
$(function() {
    $(".app").hide();

    $(".registerbtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();  
      var email = document.getElementById("email").value;
      var password = document.getElementById("psw").value;
      console.log("user entered email:" + document.getElementById("email").value);
      console.log("user entered password:" +document.getElementById("psw").value);
      var user = {
        email: email,
        password: password
      };
  
      // Send the PUT request.
      $.ajax("/api/register", {
        type: "POST",
        data: user
      }).then(
        function(err) {
          console.log("Registered User");
          console.log(err);
          // Reload the page to get the updated list
        //   location.reload();
        }
      );
    });

    $(".signinbtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var password = {
          password: $("#signPsw").val().trim()
        };
        var email =  $("#signEmail").val().trim();
    
        // Send the POST request.
        $.ajax("/api/auth/"+email, {
          type: "POST",
          data: password
        }).then(
          function(res) {
            console.log(res);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      
    });

    $.ajax("/api/session", {
        type: "GET"
      }).then(
        function(res) {
          console.log("user id " + res.id);
          console.log(res);
          if(res.id) {
              $(".login-form").hide();
              $(".app").show();
              $("#app-content").html("Welcome " + res.id + "!");
          }
          // Reload the page to get the updated list
        //   location.reload();
        }
      );

   });
  