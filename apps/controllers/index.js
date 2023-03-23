var express = require('express');
var router = express.Router();
//Router change for page home
router.use('/home', require(__dirname + '/home'));
//Router change for page login 
router.use('/login', require(__dirname + '/dangnhap'));
///Product
router.use('/product', require(__dirname + '/productController'));
///Home
router.use('/home', require(__dirname + '/home'));
///Order
router.use('/Order', require(__dirname + '/order'));
//Giao dien chinh
router.get('/', function (req, res) {
  res.render("dangnhap");
});

router.get('/orderFood', function (req, res) {
  res.render("order.ejs");
});
module.exports = router;