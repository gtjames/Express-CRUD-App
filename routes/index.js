var express = require('express');
var router = express.Router();

let counter = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  counter++;
  res.render('index', { 
    title: 'Product CRUD app!!',
    cnt: counter,
    param:req.query.first,
    linkClicked: req.query.clicked
  });
});

module.exports = router;
