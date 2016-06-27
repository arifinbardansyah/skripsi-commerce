var categoryModel = require('../models/categoryModel');
var productModel = require('../models/productModel');

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


// get one data from user data by id
var getProduct = function(req, res) {
  productModel.find({
    category: req.params.category
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

module.exports.getAllData = getAllData;
module.exports.getProduct = getProduct;