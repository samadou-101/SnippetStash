import express from "express";
import registerRouter from "./routes/auth/registerRouter.js";
import cors from "cors";
import { connectDB } from "./config/db/db.js";
import { dbURI, DEV_PORT } from "./config/config.js";
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/t", (req, res) => {
  res.send({ message: "from t" });
});
app.use("/register", registerRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(DEV_PORT, () => {
      console.log(`Server Listens on port ${DEV_PORT}`);
    });
  } catch (error) {
    console.log("Connection to the server failed");
  }
};

startServer();
