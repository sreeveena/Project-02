# Project-02

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

![](https://github.com/Chris-Hayashi/Project-One-Repo2/blob/master/assets/images/FinalProject1Giphy.gif)

## Future RoadMap

#### 
#### NLP Spell Check --> node
This works as an autocorrect and spell checks the search words used by the users
#### Additional Features:
- Sharing
- Payment cart with updated features
- A custom styling for the entire webpage with additional features

## Authors
<!-- make a link to the deployed site and have your name as the link -->
* [Krishna](https://github.com/krishnaaddala)
* [Sree]
* [Dave]

## Appendix for Code Snippets

 ```<!--User bucket-->

  <!-- Code provided by Bootstrap -->
  <div id="userBucket">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card-deck">

            <!-- First Bucket Movie -->
            <div class="card">
              <ul class="list-group list-group-flush">
                <div class="card-header" id="movieTitle1">
                </div>
                <div id="showEmoji1"></div>
              </ul>
              <img src="" class="card-img-top" id="moviePoster1" alt="movie 1 image" title="Description"
                data-content="This is the description of the movie searched." data-trigger="hover" data-toggle="popover"
                data-placement="right">
              <div class="card-body">
                <p class="card-text" id="movieComment1"></p>
              </div>
            </div>
             
            <div class="card">
              <ul class="list-group list-group-flush">
                <div class="card-header" id="movieTitle2">
                </div>
                <div id="showEmoji2"></div>
              </ul>
              <img src="assets/images/Placeholder1.jpg" class="card-img-top" id="moviePoster2" alt="movie 2 image" title="Description"
                data-content="This is the description of the movie searched." data-trigger="hover" data-toggle="popover"
                data-placement="right">
              <div class="card-body">
                <p class="card-text" id="movieComment2"></p>
              </div>
            </div>
  ```

   ```<!-- BEGIN SHAREAHOLIC CODE -->
 <link rel="preload" href="https://cdn.shareaholic.net/assets/pub/shareaholic.js" as="script" />
 <meta name="shareaholic:site_id" content="71d1fee0aaacb0afde14b426c0ef89b1" />
 <script data-cfasync="false" async src="https://cdn.shareaholic.net/assets/pub/shareaholic.js"></script>
 <!-- END SHAREAHOLIC CODE -->

<div class="shareaholic-canvas" data-app="share_buttons" data-app-id="28748923"></div>
  ```
  

```//counter for child_added function
var counter = 0;

//child_added event for firebase (runs as soon as page is loaded)
database.ref().on("child_added", function (childSnapshot) {

  //increment the counter
  counter++;
  
  //append the movie title
  $("#movieTitle" + counter).text(childSnapshot.val().title)

  //append the movie image to each corresponding #moviePoster
  $("#moviePoster" + counter).attr("src", childSnapshot.val().posterUrl)
    .attr("data-content", childSnapshot.val().description);

  //append the user comment to each 
  $("#movieComment" + counter).text(childSnapshot.val().userComment);

  //append the emoji
  $("#showEmoji" + counter).html(childSnapshot.val().emoji);

  //reset counter if equal to 4
  if (counter == 4)
  counter = 0;
});
  ```

  ```//MovieDatabase AJAX CALL
$.ajax({
  url: mdQueryURL + mdApiKey,
  method: "GET"
}).then(function (outerResponse) {
  console.log("ajax");
  console.log(outerResponse);

  //append 4 movie images to the trending movies carousel
  for (var i = 0; i < 4; i++) {
    console.log("for loop runs: " + i);


    //retrieve the movie year for each trending movie
    var movieYear = outerResponse.results[i + 1].release_date;
    movieYear = movieYear.split("-");
    movieYear = "&y=" + movieYear[0];

    //inner AJAX call to OMDB API
    omdbCall(i, movieYear);
  }
  ```

  ``` //onClick event for the search button
$("#button-addon2").on("click", function (event) {

  //prevent the event from refreshing the page
  event.preventDefault();

  //store the movie title in a variable
  var movieTitle = $(".form-control").val().trim();

  //OMDB AJAX CALL
  $.ajax({
    url: omdbQueryURL + movieTitle + omdbApiKey,
    method: "GET"
  }).then(function (response) {

    //retrieve the title of the movie
    $("#movieTitle").text(response.Title);

    //retrieve the image of the movie
    $("#movieImage").attr("src", response.Poster);

    $("#movieImage").attr("data-content", response.Plot);

  });
});
  ```
  ```//create an object for each movie
  var addMovie = {
    title: $("#movieTitle").text(),
    posterUrl: $("#movieImage").attr("src"),
    userComment: $("#inputField").val(),
    emoji: $("#showEmoji").html(),
    description: $("#movieImage").attr("data-content")
  }
  ```
  ```// here starts EMOJI API logic
emojiID = ["cNEkiz27tOidqUBuoR", "2fIbmaiOnI3VlQFZEq", "yN4RUYrRRrKVRoGqQm", "TgGWZwWlsODxFPA21A", "3OsFzorSZSUZcvo6UC"];
function emojiDisplay() {
  $("#emojiBtn").empty();
  for (i = 0; i < emojiID.length; i++) {
    emojiqueryURL = "https://api.giphy.com/v1/gifs/"+emojiID[i]+"?api_key=tuHOptJN3WWLtwMil1BWJF8fU18JA1f5";
    $.ajax({
      url: emojiqueryURL,
      method: "GET"
    }).then(function (response) {
     // adding div class with a card-group using bootstrap 
      var emojiDiv = $("<span>");
      $("#emojiBtn").append(emojiDiv);          
          var emojiImage = $("<img onclick=imgClick('" + response.data.images.downsized_medium.url + "')>")
              .attr("class", 'emoji_images')
              .attr("src", response.data.images.downsized_medium.url)
              
          $(emojiDiv).append(emojiImage);
    });
  } 
}
function imgClick(idx) {
  $("#showEmoji").html("");
  $("#showEmoji").append('<img src = "' + idx + '" height = 50px width = 50px>');
}
  ```

Git commands:

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

## Techonologies used: 
1. HTML
2. CSS
3. NodeJS
4. MYSQL
5. Javascript
6. AJAX
7. APIs

Libraries used:
1. express
2. crypto-js
3. express-session
4. popper 
5. Google sign-in integration library
6. mysql
7. googleMaps API
8. Stripe API

## Implementation Details:
The user registration/login:  A user database was created to store user name, password and provider information (whether the user had registered with the website directly or is visiting using Google account). The password of the user is being stored with one-way hash encryption (SHA256). A session is created for a successful user login to track user activities. A registration UI element and login UI element is created for the user to register and login to the website. For users wanting to use Google account for login and registration - a google sign-in button has been introduced using Google provided html and javascript code. This code requires a Google api key (which we temporarily created for this project).

code for saving encrypted one-way hash(SHA256) encrypted password
''' javascript

    if(data[0].provider){
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
    '''
code for searching events using active api call
'''javascript

        router.post("/api/events", function(req, res) {
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
    '''