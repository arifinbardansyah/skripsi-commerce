var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  routes = require('./routes/userRoute'),
  rout = require('./routes/dataRoute');

mongoose.connect('mongodb://localhost:27017/commerce');
// mongoose.connect('mongodb://restapi:henra12@ds011933.mlab.com:11933/dbrest');
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