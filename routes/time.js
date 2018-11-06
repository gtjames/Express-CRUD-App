var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
    let today = new Date()
    let HH = today.getHours()
    let mm = today.getMinutes()
    res.send(HH+":"+mm)
})

module.exports = router;