import dotenv from "dotenv"
dotenv.config()

const mongodbUrl = process.env.MONGOURL as string
const port = process.env.PORT

export const CONSTANTS = { mongodbUrl, port }

