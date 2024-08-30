import express from "express";
import http from "node:http";
import { dbConnection } from "./config/db/mongo.db";
import { CONSTANTS } from "./utils/constants.utils";
import { userRouter } from "./api/routes/user.routes";
import { listingRouter } from "./api/routes/listing.routes";
import cookieParser from "cookie-parser";
import compression from "compression";
import { authRouter } from "./api/routes/auth.routes";
import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

export const app = express();
let server: http.Server;

const main = async () => {
  app.use(express.json());
  app.use(compression());
  app.use(cookieParser());

  // database connection
  await dbConnection();

  app.get("/", (_req: Request, res: Response) => {
    return res.status(200).send("working")
  });

  app.use("/auth", authRouter);
  app.use("/user", userRouter);
  app.use("/listing", listingRouter);

  server = http.createServer(app);
  server.listen(CONSTANTS.port, () => {
    console.log(`Server running at port ${CONSTANTS.port}`);
  });
};

main();

export { server };
