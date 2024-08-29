import jwt from "jsonwebtoken"
import { CONSTANTS } from "./constants.utils"
import { Response } from "express"

export const generateTokenAndGetCookie = (userId: string, res: Response): string => {
  const token = jwt.sign({ userId }, CONSTANTS.jwtSecret, { expiresIn: "7d" })

  res.cookie("TREAL_ESTATE", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })

  return token
}


export const VerficationToken = () => {
  const verificationToken = Math.floor(Math.random() * 90000 + 100000)
  return verificationToken
}

