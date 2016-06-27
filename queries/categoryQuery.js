var categoryModel = require('../models/categoryModel');

// get all data from user data
var getAllData = function(err, res) {
  categoryModel.find(function(err, data) {
    if (err) {
      res.send(err);
    }
    // res.json(data);
    res.json(data);
  })
}

module.exports.getAllData = getAllData;