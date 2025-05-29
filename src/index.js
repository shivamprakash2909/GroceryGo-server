import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDB from "./config/db.js";

app.use(
  cors({
    credentials: true,
    origin: "process.env.FRONTEND_URL ",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Server Running on: " + PORT,
  });
});
connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
