"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//routes
var app = (0, _express.default)();
var port = process.env.PORT || 3000;
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  res.send('Welcome, to your app server');
});
app.use('/api/v1/meals', _meal.default);
app.use('/api/v1/orders', _order.default);
app.use('/api/v1/menu', _menu.default);
app.listen(port, function () {
  return console.log("Server is up on port ".concat(port, "..."));
}); //module.exports = app;

var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map