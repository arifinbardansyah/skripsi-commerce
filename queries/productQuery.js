var productModel = require('../models/productModel');

// get all data from user data
var getAllData = function(err, res) {
  productModel.find(function(err, data) {
    if (err) {
      res.send(err);
    }
    // res.json(data);
    res.json(data);
  })
}


var getProduct = function(req, res) {
    console.log("req :");
    console.log(req.body.category);

  productModel.find({
    category: req.body.category
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}


module.exports.getAllData = getAllData;
module.exports.getProduct = getProduct;