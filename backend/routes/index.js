const express = require('express');
const router = express.Router();
const path = require('path'); // 모듈 추가

/* GET home page. */
router.get('/', function(req, res, next) {

  res.sendFile(path.join(__dirname, '../public/index.html'));

  // res.render('index', { title: 'Express' });
});

module.exports = router;
