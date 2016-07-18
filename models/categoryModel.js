var mongoose = require('mongoose');

var category = new mongoose.Schema({
  id: Number,
  category: String,
  subcategory: [String]
});

// module.exports = mongoose.model('category', category, 'category');