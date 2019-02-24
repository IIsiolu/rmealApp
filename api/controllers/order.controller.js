import OrderService from '../services/order.service';

const OrderController = {
  fetchAllOrders(req, res) {
    const allOrders = OrderService.fetchAllOrder();
    return res
      .json({
        status: 'success',
        data: allOrders
      })
      .status(200);
  },

  addNewOrder(req, res) {
    const createThisNewOrder = req.body;
    const theNewlyCreatedOrder = OrderService.addOrder(createThisNewOrder);
    return res
      .json({
        status: 'success',
        data: theNewlyCreatedOrder
      })
      .status(201);
  },

  updateOrder(req, res) {
    const orderId = req.params.id;
    const orderBody = req.body;

    const theUpdatedMeal = OrderService.updateAnOrder(orderId, orderBody);
    return res
      .json({
        status: 'success',
        data: theUpdatedMeal
      })
      .status(200);
  }

};
export default OrderController;