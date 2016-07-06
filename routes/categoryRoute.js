var express = require('express');
var queries = require('../queries/categoryQuery');

var categoryRoute = express.Router();

categoryRoute.route('/')
  .get(queries.getCategory)
  .post(queries.getSubCategory)

module.exports.categoryRoute = categoryRoute;