// routes/index.js
import express from 'express';
import userRoutes from './userRoutes.js';
import stripeRoutes from './stripeRoutes.js';
// import webhookRotes from './webhookRoutes.js'

const router = express.Router();

router.use('/users', userRoutes);
router.use('/stripe', stripeRoutes);
// router.use('/webhook', webhookRotes);

export default router;
