var express = require("express");
var router = express.Router();
const request = require('request');

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

router.get("/api/asset/:assetguid", function(req, res) {
    var asset = req.params.assetguid;
    var query = "asset.assetGuid="+asset;
    var queryURL = "http://api.amp.active.com/v2/search?api_key=9eqk4qg7mf27c4qwe5vxd79r"+
   "&"+query;

    console.log(queryURL);
    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        // console.log(body);
        res.json (body);
    });   
});


module.exports = router;
