import mongoose from "mongoose";
import { CONSTANTS } from "../../utils/constants.utils";

export const dbConnection = async () => {
  try {
    await mongoose.connect(CONSTANTS.mongodbUrl);
    console.log("mongo db connected");
  } catch (err) {
    console.error("Error occurred: ", err);
  }
};


