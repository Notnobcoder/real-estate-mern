import express from "express"
import http from "node:http"
import { dbConnection } from "./config/db/mongo.db"
import { CONSTANTS } from "./utils/constants.utils"
import { userRouter } from "./api/routes/user.routes"
import { listingRouter } from "./api/routes/listing.routes"
import cookieParser from "cookie-parser"
import compression from "compression"
import { authRouter } from "./api/routes/auth.routes"



const main = async () => {

  const app = express()
  app.use(express.json())
  app.use(compression())

  app.use(cookieParser())

  // database connection
  dbConnection()

  app.use("/auth", authRouter)
  app.use("/user", userRouter)
  app.use("/listing", listingRouter)



  const server = http.createServer(app)
  server.listen(CONSTANTS.port, () => {
    console.log(`Server running at port ${CONSTANTS.port}`)
  });

}

main()
