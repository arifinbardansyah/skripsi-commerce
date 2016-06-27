var express = require('express');
var queries = require('../queries/categoryQuery');

var categoryRoute = express.Router();

categoryRoute.route('/category/')
  .get(queries.getAllData)

module.exports.categoryRoute = categoryRoute;