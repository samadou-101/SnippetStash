import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
