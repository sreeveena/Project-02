var express = require("express");
var router = express.Router();

// Import the model (auth.js) to use its database functions.
var auth = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.
router.post("/api/auth/:email", function(req, res) {
    var condition = "email = '" + req.params.email+"'"+ " and provider = '"+req.body.provider + "'";
  auth.selectOne(condition,function(data) {
    //   console.log("select one " + condition);
      if(data[0].provider){
        if(data[0].provider && data[0].provider == "events"){
            // console.log("Session userid in first if - " + req.session.userid);
            if( data[0].password == req.body.password){
                req.session.userid = req.params.email;
                // console.log("Session userid - " + req.session.userid);
                res.json({ result:"success" });
                
            }else{
                
                res.json({ result:"fail" });
            }
        }else{
            req.session.userid = req.params.email;
            // console.log("Session userid - " + req.session.userid);
            // console.log("Session userid in 1st else - " + req.session.userid);
            res.json({ result:"success" });
        }
    }else{
        res.json({ result:"fail" });
    }

  });
});

router.post("/api/register", function(req, res) {
    // console.log("email in auth_controller " + req.body.email);
    // console.log("password in auth_controller " + req.body.password);
    var condition = "email = '" + req.body.email + "'" + " and provider = '"+ req.body.provider+ "'";
    auth.selectOne(condition,function(data) {
        if (data.length <= 0) {
            auth.insertOne(["email","password","provider"], ["'" + req.body.email + "'","'" + req.body.password + "'","'" + req.body.provider + "'"], function(result) {
                // Send back the ID of the new quote
                res.json({ id: result.insertId });
              });
        } 
    });

    
});

router.get("/api/session", function(req,res) {
    // console.log("Session id - " + req.session.userid);
    if (req.session.userid) {
        res.json({ id: req.session.userid });
    } else {
        res.json({});
    }
    
});

router.delete("/api/session", function(req,res) {
    req.session.destroy(function(err) {
        res.json({});
      });
    
});
// Export routes for server.js to use.
module.exports = router;
