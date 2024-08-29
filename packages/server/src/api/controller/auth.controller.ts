import UserRepository from "../../repository/user.repository";
import { Request, Response } from "express"
import { zodSchema } from "../../schema/user.schema";
import { ZodError } from "zod";
import { compareBcryptpassword, hashPassword } from "../../service/bcrypt.service";
import { generateTokenAndGetCookie, VerficationToken } from "../../utils/token.utils";
import { sendWelcomeEmail } from "../../service/nodemailer.service";

export class AuthController {
  public readonly user: UserRepository;

  constructor() {
    this.user = new UserRepository()
  }


  async register(req: Request, res: Response) {
    try {
      const { email, password, username } = zodSchema.userSchema.parse(req.body)


      const existingUser = await this.user.findByEmail(email)

      if (existingUser) {
        return res.status(404).json("User already Existed ")
      }

      const incriptedPassword = hashPassword(password)

      const verificationToken = VerficationToken()
      const payload = {
        email,
        username,
        password: incriptedPassword,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      }

      const user = await this.user.createUser(payload)

      sendWelcomeEmail(payload.email, payload.username, verificationToken.toString())


      // generateTokenAndGetCookie(payload.password, res)
      return res.status(201).json({ "status": "working", message: "user registerd Succesfully", user })

    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ "status": "validation Error", error: error.errors })
      }

      return res.status(500).json({ "status": "error", error: error })

    }

  }


  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body


      const existingUser = await this.user.findByEmail(email)

      if (!existingUser) {
        return res.status(404).json("User not registered ")
      }

      const isPasswordCorrect = await compareBcryptpassword(password, existingUser.password)

      if (!isPasswordCorrect) {
        return res.status(201).json({ "status": "error", message: "Password is incorrect" })
      }


      existingUser.lastLogin = new Date();

      generateTokenAndGetCookie(existingUser.password, res)
      return res.status(201).json({ "status": "working", message: "user login Succesfully" })

    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ "status": "validation Error", error: error.errors })
      }

      return res.status(500).json({ "status": "error", error: error })

    }

  }

  async verifyToken(req: Request, res: Response) {
    try {
      const { code } = req.body;

      const user = await this.user.findByVerificationToken(code)

      if (!user) {
        return res.json({ "status": "no token is available" })
      }


      user.isVerified = true;
      user.verificationToken = undefined;
      user.verificationTokenExpiresAt = undefined;
      await user.save();

      return res.json({ status: "User is Verified" })
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ "status": "validation Error", error: error.errors })
      }

      return res.status(500).json({ "status": "error", error: error })

    }
  }



}
