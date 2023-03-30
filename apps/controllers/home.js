var express = require("express");
const { Table } = require("mssql");
var router = express.Router();
var Ticket = require("./../model/TicketBuffet");
var listBFService = require("./../services/listbuffetService");
//-----------------Chuc Nang-----------------//
router.get("/", function (req, res) {
  res.render("home");
});
var hientai = "";
router.get("/listBuffet", async function (req, res) {
  var listService = new listBFService();
  var getdata = await listService.getTicket();
  res.json(getdata);
});

router.post("/getData", function (req, res) {
  console.log(req.body)
  var NameTable = req.body.NameTable;
  hientai = NameTable;
  res.json({ "NameTable": NameTable })
});

router.get("/dataTable", function (req, res) {
  res.json({ "NameTableNow": hientai });
});
module.exports = router;

