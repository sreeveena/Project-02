var express = require("express");
var router = express.Router();
const request = require('request');

router.post("/api/events", function(req, res) {
    var startDate = req.body.date;
    var lon = req.body.lon;
    var lat = req.body.lat;
    
    var queryURL = "http://api.amp.active.com/v2/search?category=event&start_date="+
    startDate+"..&lat_lon="+lat +","+lon +"&radius=20&sort=distance&api_key=9eqk4qg7mf27c4qwe5vxd79r";
    
    console.log(queryURL);
    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        // console.log(body);
        res.json (body);
    });
    
});

router.post("/api/levents", function(req, res) {
    var startDate = req.body.date;
    var cityAndState = req.body.city;
    
    var queryURL = "http://api.amp.active.com/v2/search?category=event&start_date="+
    startDate+"..&near="+cityAndState +"&radius=20&sort=distance&api_key=9eqk4qg7mf27c4qwe5vxd79r";
    console.log(queryURL);
    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        // console.log(body);
        res.json (body);
    });
});

router.post("/api/qevents", function(req, res) {
    var startDate = req.body.date;
    var query = req.body.query;
   
    var queryURL = "http://api.amp.active.com/v2/search?query="+query+"&category=event&start_date="+
    startDate+"..&radius=20&sort=distance&api_key=9eqk4qg7mf27c4qwe5vxd79r";
    console.log(queryURL);
    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        // console.log(body);
        res.json (body);
    });
});


module.exports = router;
