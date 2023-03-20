var express = require("express");
var router = express.Router();

//-----------------Chuc Nang-----------------//
router.get("/", function (req, res) {
  res.render("home");
});
//Res json API list ve buffet
router.get("/listBuffet", function (req, res) {
  let listBuffet = [
    { id: '101', name: 'Buffet 299K', price: 299000, picture: 'https://picsum.photos/id/237/536/354' },
    { id: '102', name: 'Product 369K', price: 369000, picture: 'https://picsum.photos/id/237/536/354' },
    { id: '103', name: 'Product 459K', price: 459000, picture: 'https://picsum.photos/id/237/536/354' }
  ];
  res.json(listBuffet);
});
module.exports = router;

