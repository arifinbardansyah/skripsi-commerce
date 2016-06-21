var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  routes = require('./routes/userRoute'),
  rout = require('./routes/dataRoute');

// mongoose.connect('mongodb://127.0.0.1/datagraph');
// mongoose.connect('mongodb://restapi:henra12@ds011933.mlab.com:11933/dbrest');
mongoose.connect('mongodb://arifin:naonwae1@ds021034.mlab.com:21034/dbcommerce');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

var userModel = require('./models/userModel');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/api', routes.userRoute);
// app.use('/api', rout.router);
app.listen(port);