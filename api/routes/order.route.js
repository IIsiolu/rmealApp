import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.addNewOrder);
router.put('/:id', OrderController.updateOrder);

export default router;