import Product from "../models/catalogProduct.js";
import { getPaypalHeaders } from "../utils/getPaypalHeaders.js";

const paypalApi = process.env.PAYPAL_API;

//example data   {
    //   name: "Video Streaming Service",
    //   description: "Video streaming service",
    //   type: "SERVICE",
    //   category: "SOFTWARE",
    //   image_url: "https://example.com/streaming.jpg",
    //   home_url: "https://example.com/home",
// }

/**
 * @function createCatalogProduct
 * @param {*} data 
 * @returns {}
 */

const createCatalogProduct = async (data) => {
    try {
      const headers = await getPaypalHeaders('PRODUCT');
      const response = await axios.post(`${paypalApi}/v1/catalogs/products`, data, { headers });
  
      const productData = response.data;
      const product = new Product(productData);

      await product.save();
      return product;
      
    } catch (error) {
      console.error('Error creating and saving product:', error);
      throw new Error('Could not create and save product');
    }
  };

export { createCatalogProduct };
