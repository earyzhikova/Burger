// import connection.js
var connection = require("../config/connection.js");

var orm = {
  //get all burgers from db (read)
  all: function(burgers_db, cb) {
    var queryString = "SELECT * FROM " + burgers_db + ";";
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


