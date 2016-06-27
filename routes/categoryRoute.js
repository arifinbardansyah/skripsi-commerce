var express = require('express');
var queries = require('../queries/categoryQuery');
var query = require('../queries/productQuery');

var categoryRoute = express.Router();

categoryRoute.route('/category/')
  .get(queries.getAllData)

categoryRoute.route('/product/')
  .get(query.getAllData);
  .post(quey.getProduct);

module.exports.categoryRoute = categoryRoute;