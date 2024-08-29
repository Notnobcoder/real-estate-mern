import { Response } from "express"

export const ZodErrorHandler = (error: any, res: Response) => {
  return res.status(400).json({
    success: false,
    message: "Validation Error",
    errors: error.errors
  });

}
