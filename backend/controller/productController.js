import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

//Get single Product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    return res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
    // throw new Error('Resource not found');
  }
});

export {getAllProducts, getProductById};