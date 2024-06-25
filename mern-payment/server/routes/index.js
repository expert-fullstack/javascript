import express from 'express';
import paymentRoutes from './paymentRoutes.js';
import productRoutes from './productRoutes.js'
import userRoutes from './userRoutes.js';
import subscriptionRoutes from './subscriptionRoutes.js'
const router = express.Router();

router.use('/paypal', paymentRoutes);
router.use('/product', productRoutes);
router.use('/users', userRoutes);
router.use('/subscription',subscriptionRoutes);
export default router;
