import { NextFunction, Request, Response } from "express"

export const verfiyUser = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.cookies
  console.log(token)
  console.log("working")

  console.log(token)
  next()

}
