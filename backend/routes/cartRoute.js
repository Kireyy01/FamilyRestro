import express from "express";
import {
  addToCart,
  removeFromCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const CartRoute = express.Router();

CartRoute.post("/add", authMiddleware, addToCart);
CartRoute.post("/remove", authMiddleware, removeFromCart);
CartRoute.post("/get", authMiddleware, getCart);

export default CartRoute;
