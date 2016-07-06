var categoryModel = require('../models/categoryModel');

// get all data from user data
var getCategory = function(err, res) {
  categoryModel.find(function(err, data) {
    if (err) {
      res.send(err);
    }
    // res.json(data);
    res.json(data);
  })
}

var getSubCategory = function(req, res) {
  categoryModel.find({
    category: req.params.category
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

module.exports.getCategory = getCategory;
module.exports.getSubCategory = getSubCategory;