var mongoose = require('mongoose');

var product = new mongoose.Schema({
  _id: String,
  product: String,
  category: String,
  image: String,
  brand: String,
  rating: Number,
  jumlah_review:Number,
  harga: Number,
  diskon: Number,
  harga_diskon: Number,
  deskripsi: String,
  detail: String,
  spesifikasi:String 
});

module.exports = mongoose.model('product', product, 'product');