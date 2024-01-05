import express from "express";
import { getAllProducts, getProductById } from "../controller/productController.js";


const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

// router.route('/').get(getAllProducts);
// router.route('/:id').get(getProductById);

export default router;
