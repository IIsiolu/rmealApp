import { Router } from 'express';
import MenuController from '../controllers/menu.controller';

const router = Router();

router.get('/', MenuController.fetchMenuList);
router.post('/', MenuController.add);


export default router;