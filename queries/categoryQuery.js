var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var categoryModel = mongoose.model('category',new Schema(),'category');

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

  console.log("req body:");
  console.log(req.body.category);
  console.log("req params:");
  console.log(req.params.category);

  categoryModel.find({
    category: req.body.category
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

module.exports.getCategory = getCategory;
module.exports.getSubCategory = getSubCategory;