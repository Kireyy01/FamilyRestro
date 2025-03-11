import "dotenv/config";
import cors from "cors";
import express from "express";

import connectDB from "./config/db.js";
import FoodRouter from "./routes/foodRoute.js";
import UserRouter from "./routes/userRoute.js";
import CartRouter from "./routes/cartRoute.js";
import OrderRouter from "./routes/orderRoute.js";
import UploadRoutes from "./routes/uploadRoute.js";

const app = express();

connectDB();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/food", FoodRouter);
app.use("/api/user", UserRouter);
app.use("/api/cart", CartRouter);
app.use("/api/order", OrderRouter);
app.use("/api/upload", UploadRoutes);

app.get("/", (_, res) => {
  res.send("API Working...");
});

app.listen(port, () => {
  console.log("Server started on PORT: " + port);
});
