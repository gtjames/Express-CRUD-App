var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let headersResponse=""
  for(var prop in req.headers){
    headersResponse+=prop+" = "+req.headers[prop]+"<br/>"
  }

  res.send(headersResponse);
});

router.get('/list', function(req, res, next){
  res.render('users', {'users':users, 'title':'Users'});
});

var User = function(fname, lname, phone) {
this.FirstName = fname;
this.LastName = lname;
this.Phone = phone;
};

var users = [];

router.init = function() {
  users.push(new User('Keith', 'Richards', '801-AC5-2030'));
  users.push(new User('Joe', 'Cocker', '801-FR3-7789'));
  users.push(new User('B.B.', 'King', '202-AAA-2345'));
};

router.init();
module.exports = router;
