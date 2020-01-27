var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var PORT = process.env.PORT || 3000;

var app = express();
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/auth_controller.js");
var routes1 = require("./controllers/event_controller.js");
app.use(routes);
app.use(routes1);
//a USE route to home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/index.html'));
});
app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/register.html'));
});
app.get('/payment', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/payment.html'));
});
app.get('/admin', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/admin.html'));
});

app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
