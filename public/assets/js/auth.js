
$(function() {
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
//   function validateBurgerName(name){
//     if(name == ""|| name == null || name.search(/^[0-9]*$/) != -1 || name.search(/^[ ]*$/)!= -1){
//       alert("please enter a valid Burger name.");
//       return false;
//     }
//     return true;
//   }
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
            // location.reload();
          }
        );
      
    });
   });
  