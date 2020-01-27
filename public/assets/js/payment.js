// Set your publishable key: remember to change this to your live publishable key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var assetGuid = "";
var assetName = "";
var eventStartDate = "";
var userId = "";
$(function(){
  var urlParams = new URLSearchParams(window.location.search);
  assetGuid = urlParams.get('assetguid');
  assetName = urlParams.get('assetname');
  eventStartDate = urlParams.get('eventstartdate');
  userId = urlParams.get('userid');

});
var stripe = Stripe('pk_test_AdliwsOiJUNjl5P7ZLoOAxPn00yyVlOakY');
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    color: '#32325d',
  },
};

// Create an instance of the card Element.
var card = elements.create('card', { style: style });

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  stripe.createToken(card).then(function (result) {
    if (result.error) {
      // Inform the customer that there was an error.

      // console.log("entered here!")

      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    }
    else {
      // Send the token to your server.
      // console.log("entered success here")
      stripeTokenHandler(result.token);
      // console.log(result.token);

      var regDate = eventStartDate.substr(0,10);
      $.ajax("/api/registerevent", {
        type: "POST",
        data: {assetName: assetName, assetGuid: assetGuid, regDate: regDate, userId: userId}
        }).then(
        function (res, err) {
            // console.log(res);
        }
      );
    }
  });
});

function stripeTokenHandler(token) {
  event.preventDefault();
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
  console.log(token);
  $('#exampleModal').modal('show');
  $("#closeModal").click(function () {
    window.location.href = "/"
  });
}