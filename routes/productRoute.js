var express = require('express');
var queries = require('../queries/productQuery');

var productRoute = express.Router();

productRoute.route('/product/')
  .get(queries.getAllData);
  .post(queries.getProduct);

module.exports.productRoute = productRoute;