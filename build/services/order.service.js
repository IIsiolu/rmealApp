"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orderDummyData = _interopRequireDefault(require("../utils/orderDummyData"));

var _order = _interopRequireDefault(require("../models/order.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderService = {
  fetchAllOrder: function fetchAllOrder() {
    var allOrder = _orderDummyData.default.order.map(function (order) {
      var newOrder = new _order.default();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.orderAmount = order.orderAmount;
      return newOrder;
    });

    return allOrder;
  },
  addOrder: function addOrder(order) {
    var lengthOfOrder = _orderDummyData.default.order.length;
    var lastOrderId = _orderDummyData.default.order[lengthOfOrder - 1].id;
    var newId = lastOrderId + 1;
    var AddUp = {
      id: newId,
      name: order.name,
      orderAmount: order.orderAmount
    };

    _orderDummyData.default.order.push(AddUp);

    return AddUp;
  },
  updateAnOrder: function updateAnOrder(a, b) {
    var orderToUpdate = _orderDummyData.default.order.find(function (order) {
      return Number(order.id) === Number(a);
    }); //update meal


    orderToUpdate.id = a;
    orderToUpdate.name = b.name;
    orderToUpdate.orderAmount = b.orderAmount;
    return orderToUpdate;
  }
};
var _default = OrderService;
exports.default = _default;
//# sourceMappingURL=order.service.js.map