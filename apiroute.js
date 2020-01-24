var db = require("./models");
module.export = function(app){
    app.post("/api/payment", function(req, res){
        db.Payments.create({
            ccn:req.body.ccn,
            expdate: req.body.expdate,
            cvv: req.body.cvv,
            zip: req.body.zip
        }).then(function(result){
            res.redirect("./index.html");
        });
    
    });
}