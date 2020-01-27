var express = require("express");
var router = express.Router();
const request = require('request');
var orm = require("../config/orm.js");

router.post("/api/events", function(req, res) {
    var startDate = req.body.date;
    var lon = req.body.lon;
    var lat = req.body.lat;
    var query = req.body.query;
    var queryURL = "http://api.amp.active.com/v2/search?category=event&radius=20&sort=distance&api_key=9eqk4qg7mf27c4qwe5vxd79r&start_date="+
    startDate+"..&"+query;

    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        res.json (body);
    });   

});

router.get("/api/asset/:assetguid", function(req, res) {
    var asset = req.params.assetguid;
    var query = "asset.assetGuid="+asset;
    var queryURL = "http://api.amp.active.com/v2/search?api_key=9eqk4qg7mf27c4qwe5vxd79r"+
   "&"+query;

    request(queryURL,{json: true}, function(err,result,body){
        if(err)
        return console.log(err);
        
        res.json (body);
    });   
});

router.get("/api/registeredevents/:user", function(req, res) {
    var user = req.params.user;
    var condition = "users.email='"+ user+"' and user_registrations.user_id = users.id and registered_events.id = user_registrations.event_id";
    var columns = "registered_events.name,registered_events.guid";
    var tables = "users, user_registrations, registered_events";
    orm.selectAll(columns,tables,condition,function(data) {
       
        res.json(data);
    
    });
    
});

router.get("/api/eventsforadmin", function(req, res) {
    var condition = "user_registrations.user_id = users.id and registered_events.id = user_registrations.event_id order by registered_events.name";
    var columns = "registered_events.name,users.email";
    var tables = "users, user_registrations, registered_events";
    orm.selectAll(columns,tables,condition,function(data) {
        
        res.json(data);
    
    });
    
});

//Router - REST API for registering an event
router.post("/api/registerevent", function(req, res) {
    var condition = "guid=" + "'" + req.body.assetGuid + "'";
    var table = "registered_events";
    orm.selectOne(table, condition,function(data) {
        if (data.length <= 0) {
            table = "registered_events";
            var columns = ["guid","name"];
            var values = ["'"+req.body.assetGuid+"'", "'" + req.body.assetName + "'"];
            orm.insertOne(table,columns,values,function(data3) {

                fetchUserId(data3.insertId,req,res);
        
            });
        } else {
            fetchUserId(data[0].id,req,res);
        }
    });
    
});

//Fetch user id and add the user registration event to user_registrations table.
function fetchUserId(eventId,req,res) {
    var table = "users";
    var condition = " email='" + req.body.userId + "'";
    orm.selectOne(table,condition,function(data) {
        console.log(data);
        addUserRegistration(data[0].id,eventId,req,res);
    
    });
}

//Add event to user_registrations table.
function addUserRegistration(id,eventId,req,res) {
    var condition = "user_id=" + "'" + id + "' AND event_id=" + "'" + eventId + "'";
    var table = "user_registrations";
    orm.selectOne(table, condition,function(data) {
        if (data.length <= 0) {
            table = "user_registrations";
            var columns = ["user_id","event_id","reg_date"];
            var values = ["'"+id+"'", "'" + eventId + "'", "'" + req.body.regDate + "'"];
            orm.insertOne(table,columns,values,function(data3) {
                console.log(data3);
                res.json({ id: eventId, result: "new" });
            });
        } else {
            res.json({id: eventId, result: "exists"});
        }
    });

}

router.post("/api/checkregister", function(req, res) {
    var condition = "guid=" + "'" + req.body.assetGuid + "'";
    var table = "registered_events";
    orm.selectOne(table, condition,function(data) {
        if (data.length <= 0) {
            res.json({result: "false"});
        } else {
            isUserRegistered(data[0].id,req,res);
        }
    });
    
});

function isUserRegistered(eventId,req,res) {
    var table = "users";
    var condition = " email='" + req.body.userId + "'";
    orm.selectOne(table,condition,function(data) {
        var id = data[0].id;
        condition = "user_id=" + "'" + id + "' AND event_id=" + "'" + eventId + "'";
        table = "user_registrations";
        orm.selectOne(table, condition,function(data3) {
            if(data3.length <= 0) {
                res.json({result: "false"});
            } else {
                res.json({result: "true"});
            }
        });
    });
}


module.exports = router;
