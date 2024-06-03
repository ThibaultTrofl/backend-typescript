// @ts-ignore
import mongoose from "mongoose";
import { envVariables } from "./envVariables";

export async function connectDB() {
  try {
    await mongoose.connect(envVariables.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Failed to connect to MongoDB", e);
    process.exit(1);
  }
}
