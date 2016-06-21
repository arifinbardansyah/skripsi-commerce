var userModel = require('../models/userModel');
var testData = require('../models/test');

// get all data from user data
var getAllData = function(err, res) {
  userModel.find(function(err, data) {
    if (err) {
      res.send(err);
    }
    // res.json(data);
    res.json({
      data: data
    })
  })
}


// get one data from user data by id
var getOne = function(req, res) {
  userModel.find({
    _id: req.params.id
  }, function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  })
}

// upload data
var postData = function(req, res) {
  var newUser = new userModel({
    name: req.body.name,
    age: req.body.age
  });

  newUser.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        message: "success"
      })
    }
  })
}

// var editData = function {
//   var data = req.body.id;


// }
var post = function(req, res) {
  var newTest = new testData({
    firstName: req.params.firstName,
    lastName: req.params.lastName
  });

  newTest.save((err) => {
    if (err) {
      res.send(err)
    } else {
      res.json({
        message: "success"
      })
    }
  })
}

// export all object
module.exports.getAllData = getAllData;
module.exports.getOne = getOne;
module.exports.postData = postData;
module.exports.post = post;