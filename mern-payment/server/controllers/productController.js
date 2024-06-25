import asyncHandler from "express-async-handler";
import { createCatalogProduct }  from '../services/product.service.js';
import status from 'http-status';
const createProduct = asyncHandler(async ( req, res) => {
    try {
      const result = createCatalogProduct(req.body);
      res.send(result, status["402_MESSAGE"]);
    } catch (error) {
      res.send(status.INTERNAL_SERVER_ERROR);
    }
  });

export { createProduct };