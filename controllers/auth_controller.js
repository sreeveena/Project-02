var express = require("express");
var router = express.Router();

// Import the model (auth.js) to use its database functions.
var auth = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.
router.post("/api/auth/:email", function(req, res) {
    var condition = "email = '" + req.params.email+"'";
  auth.selectOne(condition,function(data) {
     if( data[0].password == req.body.password){
        res.json({ result:"success" });
     }else{
        res.json({ result:"fail" });
     }
  });
});

router.post("/api/register", function(req, res) {
    // console.log("email in auth_controller " + req.body.email);
    // console.log("password in auth_controller " + req.body.password);
  auth.insertOne(["email","password"], ["'" + req.body.email + "'","'" + req.body.password + "'"], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});



// Export routes for server.js to use.
module.exports = router;
