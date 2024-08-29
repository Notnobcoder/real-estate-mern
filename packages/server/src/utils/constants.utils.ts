import dotenv from "dotenv"
dotenv.config()

const mongodbUrl = process.env.MONGOURL as string
const port = process.env.PORT
const jwtSecret = process.env.JWTSECRET as string
const NODEMAILER_HOST = process.env.NODEMAILER_HOST as string
const NODEMAILER_PORT = process.env.NODEMAILER_PORT
const NODEMAILER_USER = process.env.NODEMAILER_USER as string
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD as string

const NODEMAILER_USER_TEST = process.env.NODEMAILER_USER_TEST
const NODEMAILER_Pass_TEST = process.env.NODEMAILER_Pass_TEST
export const CONSTANTS = {
  mongodbUrl, port,
  jwtSecret, NODEMAILER_USER, NODEMAILER_PASSWORD,
  NODEMAILER_HOST, NODEMAILER_PORT, NODEMAILER_USER_TEST, NODEMAILER_Pass_TEST
}

