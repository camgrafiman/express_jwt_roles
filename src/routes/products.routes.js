import { Router } from 'express';
const router = Router()

import * as productsController from '../controllers/products.controller'

router.get('/', productsController.getProducts)

export default router;