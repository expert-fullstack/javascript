import express from "express";
import {
    createPaymentIntent
} from "../controllers/stripeController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router
  .route("/createPaymentIntent")
  .post(createPaymentIntent);

export default router;
