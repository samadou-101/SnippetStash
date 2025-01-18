import mongoose from "mongoose";
import { dbURI, DEV_PORT } from "../config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error Connecting to the DB!");
  }
};
