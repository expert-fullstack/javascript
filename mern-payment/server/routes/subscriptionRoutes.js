import express from "express";
import {
  createSubscription,
    createSubscriptionPlan
} from "../controllers/subscriptionController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router
  .route("/createSubcription")
  .post(createSubscription);

  router.route('/createSubscriptionPlan')
  .post(createSubscriptionPlan);
export default router;
