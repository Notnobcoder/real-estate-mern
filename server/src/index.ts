import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import axios from "axios";
import Redis from "redis"

const redisClient = Redis.createClient();

const DEFAULT_Expiration = 3600


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/my-hotels", myHotelRoutes);
// app.use("/api/hotels", hotelRoutes);
// app.use("/api/my-bookings", bookingRoutes);



app.get("/photoes", async (_req, res) => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/photos")
  redisClient.setEx("photoes", DEFAULT_Expiration, JSON.stringify(data))
  // console.log(data.data.data)
  res.json(data.data)

})

app.listen(7000, () => {
  console.log("server running on localhost:7000");
});
