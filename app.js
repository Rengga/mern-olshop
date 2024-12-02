import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import authRouter from "./routes/authRouter.js";
import productRouter from "./routes/productRouter.js";

// parent router
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`jalan di port ${port}`);
});

mongoose.connect(process.env.DATABASE, {}).then(() => {
  console.log("database connect");
});
