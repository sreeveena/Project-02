var express = require("express");
var router = express.Router();
const request = require('request');
const sendmail = require('sendmail')();

router.post("/api/events", function(req, res) {
    var startDate = req.body.date;
    var lon = req.body.lon;
    var lat = req.body.lat;
    var query = req.body.query;
    var queryURL = "http://api.amp.active.com/v2/search?category=event&radius=20&sort=distance&api_key=9eqk4qg7mf27c4qwe5vxd79r&start_date="+
    startDate+"..&"+query;
    
 
    sendEmail();


    console.log(queryURL);
    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        // console.log(body);
        res.json (body);
    });   
});

function sendEmail() {
    sendmail({
        from: 'no-reply@yourdomain.com',
        to: '',
        subject: 'test sendmail',
        html: 'Mail of test sendmail ',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
}

module.exports = router;
