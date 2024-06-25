import express from "express";
import { createProduct } from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router
  .route("/createProduct")
  .post(createProduct);

export default router;
