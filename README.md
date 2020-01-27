# Project-02

The idea behind creating this application was to provide end users a one stop shop location for everything related to activities based on their geo-location by default and in case they want to participate in activities outside of their geo-location, they have the ability to do so! The only question we ask our users, what's your motive?

Our app's simplistic design and functionality ensures the users don't have to look at multiple pages (for example: creating login, sign in or search based on location...) as to where they should go and take the steps for particiapating in an event. It's all in one place! We ensure the user experience is not lost throughout our app, by creating modals within the landing page for registering or signing in so that they are not taken to a separate window and where they have to comeback to the main landing page to look for their events.


Project functionality:

This project is about a website which will help users search for nearby events related to activities they're interested in. Initially they should register for events to participate by either using the register from the homepage or using google sign-in. The user then can login to the website to save the events that they have registered for and follow the payment process to finish the registration for the event.

# Project-One
Idea behind this app was based on how we currently depend on redundant and elaborate information we find on the internet. We don’t truly understand IF we could watch a particular movie (or) TV Show.
We depend on websites that write a 2 page long reviews which we don’t really need, we just simply want to know if its worth our time or not. We don’t get this information anywhere….. UNTIL NOW!
Our website is a social platform where a particular  user comes in search for a movie/tv show, and based on what they choose how they feel about the movie/tv show using one of the emoticons we provide as options and write a quick sentence about how they really feel about the movie/tv show.
If they really like the movie or tv show,  they can then create a bucket and share this with their friends and family, YES THEY CAN Absolutely do that! This is our differentiator and this is why users will be attracted to use our website for sharing their opinions with their friends and family about the movies/tv shows we have in this day and age.

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

PixFlix is built upon the usage of APIs, libraries, and firebase. As the user enters the name of a movie or tv show and hits the search button, an ajax call to OMDB api will display the image and title of the movie on a card below the search bar. The user has the option to add an emoji and type in a comment below the movie poster. Additionally, if he/she were to hover over the movie poster, a dialogue box will appear displaying the description of the movie. This is done using Popper.js. When the user is done, he/she may click the “Add to bucket” button, and this will create an object on firebase containing all the data the user has provided, such as the movie title, movie poster, comment, and emoji.  Once the movie object is pushed up to firebase, a “child_added” function will execute and populate the empty cards in “My bucket” with the information contained within that object. When the user is satisfied with the movies in the bucket, he/she has the option of sharing that bucket by clicking a button which will send a link to the website through facebook.

## Technologies Used
HTML
Javascript/jQuery
FireBase
APIs (OMDB, The MovieDB, GIPHY, Shreaholic)
Javascript Libraries (Popper.js)
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

## Wireframe Design

![WireFrame Design](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/wireframe.png "WireFrame Design")

## User Story Breakdown
User Story 1: Create a website with necessary hooks for building the backend functionality

User Story 2: Add Bootstrap design for the website to improve the UI functionality 

User Story 3: Add OMDI API functionality

User Story 4: Add Trending API functionality

User Story 5: Add Emoji API functionality

User Story 6: Add Shareaholic API functionality

User Story 7: Add popper.JS libraries to the application

User Story 8: Additional hooks for the UI for popper.js


## Task Breakdowns
1. Design - A sleek looking UI using bootstrap and  the website being fully mobile responsive - Matt & Brandon
2. Functionality - Using OMDB APIs make a call and display the results in the cards - Chris H
3. Functionality - Using Movie Database APIs display the trending movies in a carousel - Matt & Chris H
4. Functionality - Adding emojis using GIPHY API to the cards and bucket sections - Krishna
5. Functionality - Adding Share feature to the bucket section - Krishna
6. GIT branching - Krishna

## UI Design
The layout was intended to give the user a relaxing, easy on the eyes, UI experience, which is reflected in our chosen color scheme. 
“Don’t over complicated it”
The feel should remind you of being in a dark movie theatre, or cozied up on the couch with the lights off enjoying your favorite show with some popcorn. 

![UI Design Progression](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/codeProgression1.png "UI Design Layout 1")

![Code progression Final](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/codeProgression2.png "UI Design Layout 2")

## How We Implemented Bootstrap
Jumbotron for header,
Carousel for trending media
Most importantly...cards,  cards, and more cards!

![Bootstrap Progression 1](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/jumbotron.png "Jumbotron Design")

![Bootstrap Progression 2](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/bootstrapSnippet.png "Bootstrap Code Snippet")


## Mobile Responsiveness
We used three breakpoints: 
Once the page hits 640px, we decided to hide away the trending carousel. We did this to help guide the user through the flow. Instead of seeing the trending carousel  between the preview card and bucket, they just see preview card -> bucket. We don’t want to distract the user or have them leave the application to look up a trending movie on mobile.

![Mobile Responsiveness](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/mobileResponseExample.gif "Mobile Responsiveness")


## API Design, Firebase, Libraries

### The OMDB API
We used the OMDB API for searching for movies/tv shows from the database
Upon search we wanted to use the response from API and append them to a HTML DIV

![The OMDB API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/json1.png "The OMDB API")


### The MovieDB API
We use this API to get the latest trending movies & tv shows. This will showcase as a carousel with the trending movies & tv shows. The screenshot represents what would the JSON response would be when we query the API.

![The MovieDB API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/json2.png "The MovieDB API")

### Firebase Configuration
Once user clicks the “add to bucket” button after filling out their media info, the child snapshot info is sent up to Firebase.

![The Firebase Config](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/firebase.png "The Firebase Config")

### Giphy API (Emojis)
We searched for multiple options for grabbing a set of emojis to rate or emote about a film. We landed with Giphy APIs and we searched for the IDs we wanted to show case for our V1 of the application. We used that to append to the movie search. Every search we tag, we were able to append the emoticon to the movie we wanted to rate.

![The Giphy API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/emojiExample.gif "The Giphy API")

### Shareaholic API
We used this API to share our website/application over a social media platform. For this we used the shareaholic API which gave us the necessary start for sharing our application.

![The Shareaholic API](https://github.com/Chris-Hayashi/Project-One/blob/READMEUpdatesToMaster/assets/images/ShareaholicAPI.gif "The Shareaholic API")

### Popper.JS
This library works like a thought bubble,it allows user to hover over a movie and see a brief description of reviews. The information only comes up when a user hovers over the movie and is not to be visible at other times

![Popper.js Library](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/popperExample.gif "Popper.js Library")

## Git Flow
We started with one of our team members creating master and added all of our other team members as collaborators:
We did the initial pull from master, we added the structure for the framework we are building with folders and files. We then created a PR and merged those changes so that all of us can pull from that point to start work on each of our components 

![GitFlow 1](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/gitFlow1.png "GitFlow 1")

![GitFlow 2](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/gitFlow2.png "GitFlow 2")

![GitFlow 3](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/gitFlow3.png "GitFlow 3")

![GitFlow 4](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/gitFlow4.png "GitFlow 4")

## DEMO Gif Walkthrough

![](https://github.com/Chris-Hayashi/Project-One-Repo2/blob/master/assets/images/FinalProject1Giphy.gif)

## Future RoadMap

#### Garlic.js
Allows users to fill out forms and saves the text to the local storage for future usage
#### TypeAhead.js
This works as an autocorrect or auto finish where a user can start typing something and a recommended word will pop up and can be selected to use
#### Additional Features:
- Sharing the Bucket to social media platforms
- More custom emojis for user reviews
- A custom rating system for the movies and tv shows

## Authors
<!-- make a link to the deployed site and have your name as the link -->
* [Krishna](https://github.com/krishnaaddala)
* [Matt](https://github.com/demonaco)
* [Brandon](https://github.com/brandon123774)
* [Chris H](https://github.com/Chris-Hayashi/)

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