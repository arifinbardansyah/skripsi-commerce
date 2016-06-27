var mongoose = require('mongoose');

var product = new mongoose.Schema({
  id: Number,
  product: String,
  category: String
});

module.exports = mongoose.model('product', product, 'product');