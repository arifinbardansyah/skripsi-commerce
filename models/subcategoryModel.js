var mongoose = require('mongoose');

var subcategory = new mongoose.Schema({
  // _id: Number,
  category: String,
  subcategory: String
});

module.exports = mongoose.model('subcategory', subcategory, 'subcategory');