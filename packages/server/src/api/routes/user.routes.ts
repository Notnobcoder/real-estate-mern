import { Router } from "express"
import UserController from "../controller/user.controller"

export const userRouter = Router()

const userController = new UserController()

userRouter.post("/", (req, res) => userController.createUser(req, res))
userRouter.get("/", (req, res) => userController.getUsers(req, res))
userRouter.delete("/delete/:id", (req, res) => userController.deleteUserById(req, res))
