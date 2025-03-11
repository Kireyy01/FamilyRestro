import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";

const FoodRouter = express.Router();

FoodRouter.get("/list", listFood);
FoodRouter.post("/remove", removeFood);

export default FoodRouter;
