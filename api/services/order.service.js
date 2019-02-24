import dummyData from '../utils/orderDummyData';
import Order from '../models/order.model';

const OrderService = {
  fetchAllOrder() {
    const allOrder = dummyData.order.map((order) => {
      const newOrder = new Order();
      newOrder.id = order.id;
      newOrder.name = order.name;
      newOrder.orderAmount = order.orderAmount;
      return newOrder;
    });
    return allOrder;
  },

  addOrder(order) {

    const lengthOfOrder = dummyData.order.length;
    const lastOrderId = dummyData.order[lengthOfOrder - 1].id;
    const newId = lastOrderId + 1;

    const AddUp = {
      id: newId,
      name: order.name,
      orderAmount: order.orderAmount
    };
    
    dummyData.order.push(AddUp);
    return AddUp;
  },

  updateAnOrder(a, b) {
    const orderToUpdate = dummyData.order.find(order => Number(order.id) === Number(a));

    //update meal
    orderToUpdate.id = a;
    orderToUpdate.name = b.name;
    orderToUpdate.orderAmount = b.orderAmount;
    return orderToUpdate;
  }

};

export default OrderService;