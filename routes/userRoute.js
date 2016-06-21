var express = require('express');
var queries = require('../queries/userQuery');

// set route for user
var userRoute = express.Router();

// host/api
userRoute.route('/')
  .get(queries.getAllData)
  .post(queries.postData)

// host/api/:id
userRoute.route('/:id')
  .get(queries.getOne);

userRoute.route('/test')
  .post(queries.post);

//export all object
module.exports.userRoute = userRoute;