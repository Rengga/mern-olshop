import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nama produk harus diisi"],
    unique: [true, "Nama produk sudah digunakan"],
  },
  price: {
    type: Number,
    required: [true, "Harga harus diisi"],
  },
  description: {
    type: String,
    required: [true, "deskripsi harus diisi"],
  },
  image: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    required: [true, "Kategori harus diisi"],
    enum: ["anime", "zenless zone zero", "vtuber"],
  },
  stock: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
