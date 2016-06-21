var Data = require('../models/testData');

var getData = (req, res) => {
  Data.find({}, {
    '_id': 0
  }, (err, data) => {
    if (err)
      res.send(err)
    else
      res.json(data)
    console.log(data)
  })
}

var getSingleData = (req, res) => {
  Data.find({
    id: req.params.id
  }, (err, data) => {
    res.json(data)
    console.log(data);
  })
}

module.exports.getData = getData;
module.exports.getSingleData = getSingleData;