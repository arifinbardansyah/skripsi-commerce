var express = require('express');
var queries = require('../queries/dataQuery');

var router = express.Router();

router.route('/testdata')
  .get(queries.getData)
router.route('/single/:id')
  .get(queries.getSingleData)

module.exports.router = router;