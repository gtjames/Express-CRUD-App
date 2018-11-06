var express = require('express');
var router = express.Router();

let counter = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Page Broh.  Pickle Rick!!',
    cnt: counter,
    param:req.query.first,
    linkClicked: req.query.clicked
  });
    counter++;
});

module.exports = router;
