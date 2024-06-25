import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema({
  href: { type: String, required: true },
  rel: { type: String, required: true },
  method: { type: String, required: true },
});

const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  image_url: { type: String, required: true },
  home_url: { type: String, required: true },
  create_time: { type: Date, required: true },
  update_time: { type: Date, required: true },
  links: [LinkSchema],
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
