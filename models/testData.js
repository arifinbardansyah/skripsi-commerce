var mongoose = require('mongoose');

var datas = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  title: String,
  completed: Boolean
});

module.exports = mongoose.model('Data', datas, 'data');