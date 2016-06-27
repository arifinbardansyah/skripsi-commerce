var express = require('express');
var queries = require('../queries/categoryQuery');

var categoryRoute = express.Router();

categoryRoute.route('/')
  .get(queries.getAllData)
  .post(queries.getProduct);

module.exports.categoryRoute = categoryRoute;