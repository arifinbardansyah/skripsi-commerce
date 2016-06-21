var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Test', testSchema);