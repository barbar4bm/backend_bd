"use strict";

var _router = _interopRequireDefault(require("./router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var express = require("express");
var app = express();
var port = 8000;

// Module's

// initial level of scaling
var os = require('os');
var cpu = os.cpus().length;
var cluster = require('cluster');
if (cluster.isMaster) {
  console.log("Master ".concat(process.pid, " is running"));

  // Fork workers.
  for (var i = 0; i < cpu; i++) {
    cluster.fork();
  }
  cluster.on('exit', function (worker, code, signal) {
    console.log("worker ".concat(worker.process.pid, " died"));
  });
} else {
  app.all('/', function (req, res, next) {
    console.log("Request Identified");
    next();
  });
  app.use('/account', _router["default"]);
  app.use(function (err, req, res, next) {
    //console.error(err.stack)
    res.status(500).send(err);
  });
  var server = app.listen(port, function () {
    console.log("Server Started in port : " + port);
  });
}