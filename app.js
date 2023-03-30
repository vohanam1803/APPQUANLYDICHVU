var express = require("express");
var socketio = require("socket.io");

var app = express();


var controller = require(__dirname + "/apps/controllers");
var bodyParser = require('body-parser');



app.use(express.json());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controller);

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


var server = app.listen(3000, function () {
  console.log("Server is running");
});
process.on('warning', e => {
  console.warn(e.stack);
});
var io = socketio(server);
var socketcontroller = require("./apps/controllers/chatcontroller")(io);
