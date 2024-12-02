import express from "express";
import { protectedMiddleware } from "../middlewares/authMiddleware.js";
import { CreateProduct, AllProduct, DetailProduct, DeleteProduct, Fileupload, UpdateProduct } from "../controllers/ProductController.js";

const router = express.Router();
// crud product
// post/api/v1/product
// middleware owner
router.post("/", CreateProduct);

// get/api/v1/product/
router.get("/", AllProduct);

// get/api/v1/product/:id
router.get("/:id", DetailProduct);

// put/api/v1/product/:id
// middleware owner
router.put("/:id", UpdateProduct);

// delete/api/v1/product/:id
// middleware owner
router.delete("/:id", DeleteProduct);

// post/api/v1/product/file-upload
// middleware owner
router.post("/file-upload", Fileupload);

export default router;
