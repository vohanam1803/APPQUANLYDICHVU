var express = require('express');
var router = express.Router();

const { ObjectId } = require("mongodb");

//Router change for page login 
router.use('/login', require(__dirname + '/dangnhap'));
///Product
router.use('/product', require(__dirname + '/productController'));
///Home to choose
router.use('/home', require(__dirname + '/home'));
///Order
router.use('/Order', require(__dirname + '/order'));
///Food
router.use('/food', require(__dirname + '/food'));
///OrderFood
router.use('/orderFood', require(__dirname + '/orderFood'));
///OrderFood
router.use('/orderTable', require(__dirname + '/orderTable'));

//Giao dien chinh
router.get('/', function (req, res) {
  res.redirect("/login");
});



module.exports = router;