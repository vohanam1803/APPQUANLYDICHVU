var express = require('express');
var router = express.Router();
//Router change for page home
router.use('/home', require(__dirname + '/home'));
//Router change for page login 
router.use('/login', require(__dirname + '/dangnhap'));
router.get('/', function (req, res) {
  res.render("dangnhap");
});
module.exports = router;