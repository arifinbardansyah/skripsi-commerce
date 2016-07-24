var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  routesCategory = require('./routes/categoryRoute');
  routesProduct = require('./routes/productRoute');
  routesSubcategory = require('./routes/subcategoryRoute');
  routesChild = require('./routes/childRoute');

mongoose.connect('mongodb://localhost:27017/commerce');
// mongoose.connect('mongodb://restapi:henra12@ds011933.mlab.com:11933/dbrest');
// mongoose.connect('mongodb://commerce:arifin@ds021034.mlab.com:21034/dbcommerce');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

var categoryModel = require('./models/categoryModel');
var productModel = require('./models/productModel');
var productModel = require('./models/subcategoryModel');
var productModel = require('./models/childModel');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api/category', routesCategory.categoryRoute);
app.use('/api/product', routesProduct.productRoute);
app.use('/api/subcategory', routesSubcategory.subcategoryRoute);
app.use('/api/child', routesChild.childRoute);
app.listen(port);