var express = require('express');
var queries = require('../queries/categoryQuery');

var categoryRoute = express.Router();

categoryRoute.route('/')
  .get(queries.getAllData)

categoryRoute.route('/:category')
  .get(queries.getcategory);

module.exports.categoryRoute = categoryRoute;