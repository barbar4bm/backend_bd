"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _index = require("../database/index.js");
var router = (0, _express.Router)();

// GET
router.get('/vivek', function (req, res, next) {
  (0, _index.getRecords)('system.local', function (err, result) {
    if (err) {
      next(err);
    } else {
      res.send({
        "db": result
      });
    }
  });
});
var _default = router;
exports["default"] = _default;