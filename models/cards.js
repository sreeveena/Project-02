// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cards = {
    selectOne: function(condition, cb) {
    orm.selectOne("cards", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("cards", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (event_controller.js).
module.exports = cards;
