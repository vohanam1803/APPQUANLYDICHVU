var express = require("express");
const { Table } = require("mssql");
var router = express.Router();
var Ticket = require("./../model/TicketBuffet");
var listBFService = require("./../services/listbuffetService");

var status = require("./../model/StatusTable");
var statusService = require("./../services/statusService");
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
router.post("/checkStatus", async function (req, res) {
  var sS = new statusService();
  var pro = new status()
  pro.NameTable = req.body.SoBan;
  pro.ManyPeople = req.body.People;
  pro.Price = req.body.Price;
  pro.Status = 1;
  var getdata = await sS.insertInfo(pro);
  if (getdata == 2) {
    res.json({ "Message": "False" })
  }
  else {
    res.json({ "Message": "True" })
  }
});
module.exports = router;

