var express = require('express');
var queries = require('../queries/childQuery');

var childRoute = express.Router();

childRoute.route('/')
  .get(queries.getAllData)
  .post(queries.getChild);

module.exports.childRoute = childRoute;