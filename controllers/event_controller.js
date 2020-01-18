var express = require("express");
var router = express.Router();
const request = require('request');

router.post("/api/events", function(req, res) {
    var startDate = req.body.date;
    var lon = req.body.lon;
    var lat = req.body.lat;

    var queryURL = "http://api.amp.active.com/v2/search?query=running&category=event&start_date="+
    startDate+"..&lat_lon="+lat +","+lon +"&radius=50&api_key=9eqk4qg7mf27c4qwe5vxd79r";
    
    console.log(queryURL);
    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        // console.log(body);
        res.json (body);
    });
    
});

module.exports = router;
