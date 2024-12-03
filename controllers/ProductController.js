import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

export const CreateProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);

  return res.status(201).json({
    messege: "Berhasil tambah produk",
    data: newProduct,
  });
});
export const AllProduct = asyncHandler(async (req, res) => {
  const data = await Product.find();
  return res.status(200).json({
    messege: "Berhasil tampil produk",
    data,
  });
});
export const DetailProduct = asyncHandler(async (req, res) => {
  const paramsId = req.params.id;
  const productData = await Product.findById(paramsId);

  if (!productData) {
    res.status(404);
    throw new Error("Id tidak ditemukan");
  }

  return res.status(200).json({
    messege: "detail data product berhasil ditampilkan",
    data: productData,
  });
});
export const UpdateProduct = asyncHandler(async (req, res) => {
  const paramId = req.params.id;
  const updateProduct = await Product.findByIdAndUpdate(paramId, req.body, {
    runValidators: false,
    new: true,
  });

  return res.status(201).json({
    messege: "update produk",
    data: updateProduct,
  });
});
export const DeleteProduct = asyncHandler(async (req, res) => {
  const paramId = req.params.id;
  await Product.findByIdAndDelete(paramId);

  return res.status(201).json({
    messege: "delete produk berhasil",
  });
});
export const Fileupload = asyncHandler(async (req, res) => {
  res.send("file upload product");
});
