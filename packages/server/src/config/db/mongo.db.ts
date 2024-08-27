import mongoose from "mongoose"
import { CONSTANTS } from "../../utils/constants.utils"


export const dbConnection = () => {
  mongoose.connect(CONSTANTS.mongodbUrl).then(() => {
    console.log("mongo db connected")
  }).catch((err) => {
    console.log("Error occured" + err)
  })

}
