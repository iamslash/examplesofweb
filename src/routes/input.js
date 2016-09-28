var express = require('express');
var path = require('path');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
     res.sendFile(path.join(__dirname + '/../../docs/input.html'));
});

module.exports = router;