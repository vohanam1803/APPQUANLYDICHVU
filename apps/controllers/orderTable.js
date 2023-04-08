var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Table = require("./../model/table");
var TableService = require("./../services/tableService");

var status = require("./../model/StatusTable");
var statusService = require("./../services/statusService");
router.get("/", async function (req, res) {
	//var tableService = new TableService();
	//var get = await tableService.getAllTable();
	//res.json(get);
	res.render("datban");
});
router.get("/ViewAllTable", async function (req, res) {
	var tableService = new TableService();
	var get = await tableService.getAllTable();
	res.json(get);
});
router.get("/checkStatus", async function (req, res) {
	var tableService = new TableService();
	var get = await tableService.getCheck();
	res.json(get);
});

// router.get("/choose", async function (req, res) {
// 	var data = { name: req.query.name };
// 	//console.log(data);
// 	const params = new URLSearchParams(data).toString();
// 	res.json(params);
// });

module.exports = router;