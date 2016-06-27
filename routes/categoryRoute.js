var express = require('express');
var queries = require('../queries/categoryQuery');
var query = require('../queries/productQuery');

var categoryRoute = express.Router();

categoryRoute.route('/category/')
  .get(queries.getAllData)
  .post(queries.getProduct);

categoryRoute.route('/product/')
  .get(query.getAllData);

module.exports.categoryRoute = categoryRoute;