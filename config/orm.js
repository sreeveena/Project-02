// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectOne: function (tableInput, condition, cb) {
    var queryString = "SELECT * FROM " + tableInput + " where " + condition + ";";

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  selectAll: function (columns, tableInput, condition, cb) {
    var queryString = "SELECT " + columns + " FROM " + tableInput + " where " + condition + ";";

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + vals + ") ";

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

// Export the orm object for the model .
module.exports = orm;
