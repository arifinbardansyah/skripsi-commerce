var childModel = require('../models/childModel');

var getChild = function(req, res) {
    console.log("req :");
    console.log(req.body.tipe);

  productModel.find({
    tipe: req.body.tipe
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

// module.exports.getAllData = getAllData;
module.exports.getChild = getChild;