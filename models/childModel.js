var mongoose = require('mongoose');

var child = new mongoose.Schema({
  // _id: Number,
  subcategory: String,
  child: String
});

module.exports = mongoose.model('child', child, 'child');