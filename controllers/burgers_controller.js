// Require dependency
var express = require('express');
var burger = require('../models/burger.js');

var express = require("express");

var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hdbObject = {
      burgers: data
    };
    console.log(hdbObject);
    res.render("index", hdbObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body.burger);
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger, 0
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/devoured", function(req, res) {
  console.log(req.body.dev);
  burger.update([
    "burger_name", "devoured"
  ], [
    req.body.burger, 1
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js to use.
module.exports = router;
