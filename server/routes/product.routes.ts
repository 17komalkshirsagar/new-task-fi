import express from "express"
import { protectedRoute } from "../utils/protected"
import * as productController from "../controllers/product.controller"
const productRouter = express.Router()
productRouter
    .get("/get-all-product", productController.getAllProducts)
    .get("/get-product/:id", productController.getProductById)
    .get("/slug/:slug", productController.getProductBySlug)
    .post("/create/product", productController.createProduct)
    .put("/update/product/:id", productController.updateProduct)
    .delete("/delete/product/:id", productController.deleteProduct);
export default productRouter