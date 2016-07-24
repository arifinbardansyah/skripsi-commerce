var subcategoryModel = require('../models/subcategoryModel');

var getSubcategory = function(req, res) {
    console.log("req :");
    console.log(req.body.category);

  subcategoryModel.find({
    category: req.body.category
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

// module.exports.getAllData = getAllData;
module.exports.getSubcategory = getSubcategory;