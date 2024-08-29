import { Router } from "express"
import { AuthController } from "../controller/auth.controller"


export const authRouter = Router()
const authController = new AuthController()

authRouter.post("/register", (req, res) => authController.register(req, res))
authRouter.post("/login", (req, res) => authController.login(req, res))
authRouter.post("/verifyToken", (req, res) => authController.verifyToken(req, res))
