"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecords = void 0;
var _cassandraDriver = _interopRequireDefault(require("cassandra-driver"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var client = new _cassandraDriver["default"].Client({
  contactPoints: ['cassandra']
});
var getRecords = function getRecords(query, callback) {
  query = 'select key from ' + query;
  client.execute(query, function (err, result) {
    if (err) {
      return callback(err);
    }
    console.log("result Found");
    return callback(null, result);
  });
};
exports.getRecords = getRecords;