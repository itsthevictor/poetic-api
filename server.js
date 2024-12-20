import morgan from "morgan";
import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDb.js";
dotenv.config();
const app = express();

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());

// error middleware
app.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

// PORT
const PORT = process.env.PORT || 8080;

// Spin-up function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

// spin-up server
start();
