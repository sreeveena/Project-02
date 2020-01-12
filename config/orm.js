// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + " ("+ cols.toString()+ ") "+ "VALUES ('" + vals + "') ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

// Export the orm object for the model .
module.exports = orm;
