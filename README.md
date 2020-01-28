# Project-02

Heroku link :- https://powerful-coast-54542.herokuapp.com/

The idea behind creating this application was to provide end users a one stop shop location for everything related to activities based on their geo-location by default and in case they want to participate in activities outside of their geo-location, they have the ability to do so! The only question we ask our users, what's your motive?

Our app's simplistic design and functionality ensures the users don't have to look at multiple pages (for example: creating login, sign in or search based on location...) as to where they should go and take the steps for particiapating in an event. It's all in one place! We ensure the user experience is not lost throughout our app, by creating modals within the landing page for registering or signing in so that they are not taken to a separate window and where they have to comeback to the main landing page to look for their events.


## Table of contents
How the APP works
Technologies Used
Applications Used
Wireframe Design
User Story Breakdown
Task Breakdowns
UI Design
How We Implemented Bootstrap
Mobile Responsiveness
API Design, Firebase, Libraries
Git Flow
DEMO Gif Walkthrough
Future RoadMap
Team memeber GIT Links
Code Snippets

## How the APP works

MOTIVES is built upon the usage of APIs, libraries, and MySQL. As the user lands on the application, we initially show a list of all events that are available based on their geo-location. The user also has the ability to search for any event they want and at any location other than their default geo-location. Additionally, if the user is ready to register for the website or if they have already registered, we have provided modal pop-ups by which the experience is not lost to them. This is done using Bootstrap modals. When the user is registered/signed in, he/she may click the “Register” button on the list of events displayed on the page, and this will take them to registration page for that specific event where they can look at the event details, map location via google maps and then finally if that is the event they want to register for, they can click on the "Register" for this event button and which will take them to the payment page. We have additionally created an admin portal, where the admin for MOTIVES can look at which all users have registered for events and event details.

## Technologies Used
HTML
Javascript/jQuery
MySQL
APIs
Javascript 
Markdown
Bootstrap
AJAX
JSON

## Applications Used
GitHub
ChromeDev tools
Visual Studio Code
Chrome browser
MockFlow
SQL Designer

## Wireframe Design

![WireFrame Design](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/wireframe-final1.png "WireFrame Design")

![WireFrame Design](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/wireframe-final2.png "WireFrame Design")

## User Story Breakdown
User Story 1: Create a website with necessary hooks for building the backend functionality

User Story 2: Add Bootstrap design for the website to improve the UI functionality 

User Story 3:  User registration --> User will be able to register for their prefered event

User Story 4:  List of events using ACTIVE API

User Story 5: Google Sign In functionality

User Story 6: Geolocation detection functionality

User Story 7: Google maps embedding

User Story 8: Fake payments using STRIPE API

User Story 9: Login and registration modals

User Story 10: Search on events from the landing page

User Story 11: Admin login and admin functionality for looking at list of events users are registered for.


## Task Breakdowns
1. Design - A sleek looking UI using bootstrap and  the website being fully mobile responsive - Dave
2. Sree - OAuth sign-in, geo-location, Registration page logic, modelling
3. Krishna - Payments (Stripe API), Maps integration on Registration page, GIT


## UI Design
The layout was intended to give the user a relaxing, easy on the eyes, UI experience, which is reflected in our chosen color scheme. 
“Don’t over complicated it”
The feel was intended for a simplistic yet easy design where A user can come and know what to do without needing an instruction manual. Carousel building, listing events using 
![UI Design Progression](https://github.com/sreeveena/Project-02/blob/master/public/assets/img/home.png?raw=true "UI Design Layout 1")

![Code progression Final](https://github.com/sreeveena/Project-02/blob/master/public/assets/img/user_login.png?raw=true "UI Design Layout 2")

## How We Implemented Bootstrap
Jumbotron for header,
Carousel for events
Most importantly...accordion for list of events!
Mobile responsive

![Bootstrap Progression](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/UICarousel.png "Carousel Design")


## Mobile Responsiveness
We used three breakpoints: 
Once the page hits 640px, we decided to give the carousel the appropriate size along with the list of events in the same way we have on our website. On the register page, instead of the maps and regrtation info cluttering the page, we decided to list the maps below the registration information. 

![Mobile Responsiveness](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/mobile_responsive.gif "Mobile Responsiveness")


## API Design, Firebase, Libraries

### The Active API
We used the ACTIVE API for searching all events from the ACTIVE API
Upon search we wanted to use the response from API and dynamically append them to a HTML DIV

![The ACITVE API](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/JSON-ActiveAPI.png "The ACTIVE API")


### GEOLOCATION
We use this to get the default location when the user enters the application. This will showcase the list of events displayed by using the ACTIVE api on the landing page and filter then based on their geo location.

![GEOLOCATION](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/geolocation_image.png "The GEOLOCATION API")

### MYSQL Configuration and Design
We designed our database based on capturing the user logins and only after that we are capturing information on what events they signed up for along with adding hash key for encryting their passwords in the DB.

![The Database Design](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/MySQLDesign.png "The Firebase Config")

### Google Maps API
Using google maps we embedded the maps within the registration page, and based on the event the user clicks, this will take them to that events registration page and then display the map based on the event location.

![The GoogleMaps API](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/googlemapsAPI.png "The GoogleMaps API")

### STRIPE API
We used this API fake the payment process where we are creating an end to end exprience for finishing the registration process for the each event.

![The STRIPE API](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/StripeAPI.png "The STRIPE API")


## Git Flow
We started with one of our team members creating master and added all of our other team members as collaborators:
We did the initial pull from master, we added the structure for the framework we are building with folders and files. We then created a PR and merged those changes so that all of us can pull from that point to start work on each of our components 

![GitFlow 1](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/Git_Image1.png "GitFlow 1")

![GitFlow 2](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/GIT-Image2.png "GitFlow 2")

![GitFlow 3](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/gitImage3.png "GitFlow 3")

![GitFlow 4](https://github.com/sreeveena/Project-02/blob/updatesToReadme/public/assets/img/gitimage4.png "GitFlow 4")

## DEMO Gif Walkthrough

![Final DEMO GIF](https://github.com/sreeveena/Project-02/blob/master/public/assets/img/project-02_Demo.gif "Final DEMO GIF")

![Final DEMO ADMIN GIF](https://github.com/sreeveena/Project-02/blob/master/public/assets/img/project-02_Admin.gif "Final DEMO for ADMIN GIF")

## Future RoadMap

#### REACT based UI
#### NLP Spell Check --> node
#### Multiple models using SQL
#### Multiple routes to handle more features

This works as an autocorrect and spell checks the search words used by the users
#### Additional Features:
- Sharing
- Payment cart with updated features
- A custom styling for the entire webpage with additional features

## Authors
<!-- make a link to the deployed site and have your name as the link -->
* [Krishna](https://github.com/krishnaaddala)
* [Sree](https://github.com/sreeveena/)
* [Dave](https://github.com/dconlan1)

## Appendix for Code Snippets

#### Bootstrap Carousel

 ```<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/img/markus-spiske-WUehAgqO5hE-unsplash.jpg" class="d-block h-10 w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Cycling</h5>
          <p>Sign Up For Cycling Races</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/mauro-paillex-lRQouvQf1-w-unsplash.jpg" class="d-block h-10 w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>Running</h5>
          <p>Sign Up For Running Events</p>
        </div>
  ```
#### Events Cards 
   ```<div class="card">
          <div class="card-header" id="heading${j}">
            <h5 class="mb-0">
              <button class="btn btn-link ${collapsed}" data-toggle="collapse" data-target="#collapse${j}" aria-expanded="${expand}" aria-controls="collapse${j}">
              ${data.results[j].assetName}
              </button>
            </h5>
          </div>
      
          <div id="collapse${j}" class="collapse ${show}" aria-labelledby="heading${j}" data-parent="#accordion">
            <div class="card-body">
                <div> ${formatedDate(data.results[j].activityStartDate)}</div>
                <div>${data.results[j].place.placeName} , 
                ${data.results[j].place.cityName} , ${data.results[j].place.stateProvinceCode}</div>
              <button onclick="register('${data.results[j].assetGuid}')">Register</button>
            </div>
          </div>
          
        </div>
  ```
  
#### Code for searching events using active api call

```router.post("/api/events", function(req, res) {
          var startDate = req.body.date;
          var lon = req.body.lon;
          var lat = req.body.lat;
          var query = req.body.query;
          var queryURL = "http://api.amp.active.com/v2/search?category=event&radius=20&sort=distance&api_key=9eqk4qg7mf27c4qwe5vxd79r&start_date="+
          startDate+"..&"+query;

          console.log(queryURL);
          request(queryURL,{json: true}, function(err,result,body){
              if(err)
              return console.log(err);
              // console.log(body);
              res.json (body);
          });   
      });
  ```
#### Code for authenticating a user(from browser)

  ```function authUser(email, password, provider){
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
  ```
#### Code for saving encrypted one-way hash(SHA256) encrypted password

  ``` if(data[0].provider){
          if(data[0].provider && data[0].provider == "events"){
              var encryptedPassword = Crypto.SHA256(req.body.password).toString();
              if( data[0].password == encryptedPassword){
                  req.session.userid = req.params.email;
                  res.json({ result:"success" });
                
             }else{
                
                res.json({ result:"fail" });
            }
        }else{
            req.session.userid = req.params.email;
            res.json({ result:"success" });
        }
    }else{
        res.json({ result:"fail" });
    }

    });
  ```
#### Code for obtainning user's current location

  ```function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            getEvents(position.coords.latitude, position.coords.longitude);

        });
    } else {
        loc.innerHTML = "Geolocation is not supported by this browser.";
    }
    }
  ```

#### Code for obtaining user and event data from mysql database

  ```selectAll: function (columns, tableInput, condition, cb) {
    var queryString = "SELECT " + columns + " FROM " + tableInput + " where " + condition + ";";

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
    }
  ```

#### Code for google maps integration

  ```const lat1 = parseFloat(data.results[0].place.latitude);
    const lng1 = parseFloat(data.results[0].place.longitude);
    const zoom = 12;

    const parentElement = document.getElementById('map');
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-wGV-73Rq0qk5sgzrGXauPnJ-J1kgGcU';
    script.async = true;
    script.defer = true;
    script.onload = function () {
        var mapLocation = { lat: lat1, lng: lng1 };
        var map = new google.maps.Map(parentElement, {
            center: mapLocation,
            zoom: zoom
        });

        var marker = new google.maps.Marker({ position: mapLocation, map: map });
    };
  ```

#### Code for payments integration

  ```
  // Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  stripe.createToken(card).then(function (result) {
    if (result.error) {
      // Inform the customer that there was an error.

      console.log("entered here!")

      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    }
    else {
      // Send the token to your server.
      console.log("entered success here")
      stripeTokenHandler(result.token);
      console.log(result.token);

      var regDate = eventStartDate.substr(0,10);
      $.ajax("/api/registerevent", {
        type: "POST",
        data: {assetName: assetName, assetGuid: assetGuid, regDate: regDate, userId: userId}
        }).then(
        function (res, err) {
            console.log(res);
        }
      );
    }
  });
});
  ```

## Git commands:

```
    git checkout master
    git checkout -b branchname
    
    *make changes to the files in your branch*
    
    git status
    git add .
    git commit -m "message"
    git push origin master
    
    *Create Pull Request*
    *Merge your code to "master"*
    ```

