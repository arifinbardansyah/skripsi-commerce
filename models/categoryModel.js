var mongoose = require('mongoose');

var category = new mongoose.Schema({
  id: Number,
  category: String
});

module.exports = mongoose.model('category', category, 'category');