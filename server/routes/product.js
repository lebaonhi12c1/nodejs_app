
import { Router } from 'express';
import productController from '../controller/productController.js';
const router = Router()

router.get('/getall',productController.getall)

router.post('/create',productController.create)

router.put('/update',productController.update)

router.delete('/delete/:id',productController.delete)

export default router