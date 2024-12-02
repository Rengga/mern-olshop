import asyncHandler from "../middlewares/asyncHandler.js";

export const CreateProduct = asyncHandler(async (req, res) => {
  res.send("create product");
});
export const AllProduct = asyncHandler(async (req, res) => {
  res.send("all product");
});
export const DetailProduct = asyncHandler(async (req, res) => {
  res.send("detail product");
});
export const UpdateProduct = asyncHandler(async (req, res) => {
  res.send("update product");
});
export const DeleteProduct = asyncHandler(async (req, res) => {
  res.send("delete product");
});
export const Fileupload = asyncHandler(async (req, res) => {
  res.send("file upload product");
});
