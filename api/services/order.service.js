import dummyData from '../utils/orderDummyData';
import Order from '../models/order.model';

const OrderService = {
  fetchAllOrder() {
    const allOrder = dummyData.orderedmeal.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.mealid = order.mealid;
      newOrder.quantity = order.quantity;
      return newOrder;
    });
    return allOrder;
  },

  addOrder(order) {
    const orderId = order;
    const lengthOfOrder = dummyData.orderedmeal.length;
    const lastOrderId = dummyData.orderedmeal[lengthOfOrder - 1].id;
    const newId = lastOrderId + 1;
    orderId.id = newId;
    dummyData.orderedmeal.push(order);
    return order;
  },

  getAnOrder(id) {
    const orderId = id;
    const findOrderById = dummyData.orderedmeal.find(order => Number(order.id) === Number(orderId));
    return findOrderById || {};
  },

  // Modify Order Action Down here..Having Bugs. Had to suspend it a little for now
  // So as to fix then just paste it here and conitnue..cos ESLint makes all red
};

export default OrderService;