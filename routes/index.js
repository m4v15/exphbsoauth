var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Boggo' });
});

router.get('/add', (req, res, next) => {
  res.render('add', { title: 'Add Post' })
})

module.exports = router;
