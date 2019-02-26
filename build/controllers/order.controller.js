"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  fetchAllOrders: function fetchAllOrders(req, res) {
    var allOrders = _order.default.fetchAllOrder();

    return res.json({
      status: 'success',
      data: allOrders
    }).status(200);
  },
  addNewOrder: function addNewOrder(req, res) {
    var createThisNewOrder = req.body;

    var theNewlyCreatedOrder = _order.default.addOrder(createThisNewOrder);

    return res.json({
      status: 'success',
      data: theNewlyCreatedOrder
    }).status(201);
  },
  updateOrder: function updateOrder(req, res) {
    var orderId = req.params.id;
    var orderBody = req.body;

    var theUpdatedMeal = _order.default.updateAnOrder(orderId, orderBody);

    return res.json({
      status: 'success',
      data: theUpdatedMeal
    }).status(200);
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map