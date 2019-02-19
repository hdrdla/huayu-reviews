var express = require('express');
var router = express.Router();
var db = require(".helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testAPI', function(req, res, next) {
  res.send('index');
});

module.exports = router;
