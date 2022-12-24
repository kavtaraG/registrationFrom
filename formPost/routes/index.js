var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user_reg', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/sing_in', function(req, res, next) {
  res.render('singin', { title: 'Express' });
});

module.exports = router;
