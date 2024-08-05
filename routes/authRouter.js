import express from "express";
// import User from "../models/userModel.js";
// import asyncHandler from "../middlewares/asyncHandler.js";
import { registerUser } from "../controllers/authController.js";

const router = express.Router();

//post /api/v1/auth/register
router.post("/register", registerUser);

//post /api/v1/auth/login
router.post("/login", (reg, res) => {
  res.send("login");
});

//post /api/v1/auth/logout
router.get("/logout", (reg, res) => {
  res.send("logout");
});

//post /api/v1/auth/getUser
router.get("/getUser", (reg, res) => {
  res.send("getUser");
});

export default router;
