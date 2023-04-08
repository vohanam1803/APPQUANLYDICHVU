var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Save = require("./../model/savefood");
var savefoodService = require("./../services/savefoodService");

router.get("/", async function (req, res) {
	res.render("order");
});
router.post("/GetFood", async function (req, res) {
	var saveS = new savefoodService();
	var pro = new Save();
	pro.NameFood = req.body.NameFood;
	pro.NumberTable = req.body.Soban;
	pro.Price = req.body.Price;
	pro.TimeOrder = req.body.TimeOrder;
	const result = await saveS.InsertInfo(pro);
	res.json({ "Message": "Insert Success!!" });
});
router.post("/GioHang", async function (req, res) {
	var saveS = new savefoodService();
	var NumberTable = req.body.Soban;
	const result = await saveS.getFoodTable(NumberTable);
	res.json(result);
});

router.post("/LayFoodOfTable", async function (req, res) {
	var saveS = new savefoodService();
	var NumberTable = req.body.Soban;
	const result = await saveS.getInfo(NumberTable);
	res.json(result);
});

module.exports = router;