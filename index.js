import morgan from "morgan";
import express from "express";
import "express-async-errors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDb.js";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import cors from "cors";
dotenv.config();
const app = express();
// const __dirname = dirname(fileURLToPath(import.meta.url));
const __dirname = path.resolve();
// middleware & routes imports
import poemRouter from "./routes/poemRouter.js";

// app.use(express.static("./client/dist"));

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/poem", poemRouter);
// Serve static frontend files in production
app.use(express.static(path.resolve(__dirname, "./client/dist")));
// Handle all other routes by serving the frontend
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// error middleware
// app.use("*", (req, res) => {
//   res.status(404).json({ message: "not found" });
// });

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
