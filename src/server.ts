import express from "express";
import registerRouter from "./routes/auth/registerRouter.js";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome");
});
app.use("/register", registerRouter);
console.log("added to test building ");
// mongoose.connect();

app.listen(3000, () => console.log("listening on port 3000"));
