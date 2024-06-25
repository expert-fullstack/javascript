import express from "express";
import {
 getPayment,
 createPayment
} from "../controllers/paymentController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router
  .route("/create-payment")
  .post(createPayment);

  router.route('/get-payment')
  .post(getPayment);
export default router;
