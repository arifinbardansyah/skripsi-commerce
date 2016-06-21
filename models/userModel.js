var mongoose = require('mongoose');

var userModel = new mongoose.Schema({
  // _id: String,
  name: String,
  age: Number
});

module.exports = mongoose.model('userModel', userModel);