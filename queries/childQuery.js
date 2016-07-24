var childModel = require('../models/childModel');

var getAllData = function(err, res) {
  subcategoryModel.find(function(err, data) {
    if (err) {
      res.send(err);
    }
    // res.json(data);
    res.json(data);
  })
}

var getChild = function(req, res) {
    console.log("req :");
    console.log(req.body.tipe);

  childModel.find({
    tipe: req.body.tipe
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

module.exports.getAllData = getAllData;
module.exports.getChild = getChild;