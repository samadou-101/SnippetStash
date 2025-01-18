import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: { type: [String] },
  description: { type: String },
  dateCreated: { type: Date, default: Date.now },
  expirationDate: { type: Date },
  category: { type: String },
  language: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Snippet = mongoose.model("Snippet", snippetSchema);
