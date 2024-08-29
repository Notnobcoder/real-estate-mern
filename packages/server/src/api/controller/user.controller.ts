import UserRepository from "../../repository/user.repository";
import { Request, Response } from "express"
import { zodSchema } from "../../schema/user.schema";
import { hashPassword } from "../../service/bcrypt.service";
import { ZodError } from "zod";

class UserController {
  private readonly User: UserRepository

  constructor() {
    this.User = new UserRepository
  }

  async getUsers(_req: Request, res: Response) {
    try {
      // const data = [{ name: "tushar" }, { name: "working" }]
      const user = await this.User.getUsers()

      return res.json({ status: true, user })

    } catch (error) {
      return res.json("error Occured" + error.message)

    }
  }

  async deleteUserById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const existingUser = this.User.findById(id)

      if (!existingUser) {
        return res.status(404).json("user does not exist to delete / Invalid UserId")
      }

      const deleteUser = await this.User.deleteUser(id)

      if (!deleteUser) {
        return res.status(404).json("error occured while deleting")
      }

      return res.json({ "status": "success", "message": "User Deleted Succesfully" })



    } catch (error) {

      return res.json("error Occured" + error.message)
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = zodSchema.userSchema.parse(req.body)

      const incriptedPassword = hashPassword(password)

      const payload = {
        username: username,
        email: email,
        password: incriptedPassword
      }


      const data = await this.User.createUser(payload)

      if (!data) {
        return res.json({ success: false, "message": "Error Occured in user" })
      }

      return res.json({ success: true, message: "user created" })
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation Error",
          errors: error.errors, // Returning specific validation errors
        });
      }
      return res.json("error Occured" + error.message)

    }
  }
}

export default UserController
