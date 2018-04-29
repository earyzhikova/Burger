// import connection.js
var connection = require("../config/connection.js");

var orm = {
  //get all burgers from db (read)
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // update new burger(create)
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO burgers SET ?";
    var params = {burger_name};
    

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // update one
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // delete all
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM burgers";
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object 
module.exports = orm;


