import express from "express";
import registerRouter from "./routes/auth/registerRouter.js";
import cors from "cors";
import { connectDB } from "./config/db/db.js";
import { dbURI, DEV_PORT } from "./config/config.js";
import { checkAuth } from "./middleware/auth/checkAuth.js";
import snippetRouter from "./routes/endpoints/snippetRoutes.js";
import swaggerUi from "swagger-ui-express";
// import swaggerSpec from "./docs/swagger.js";
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", checkAuth, (req, res) => {
  res.send("welcome");
});

app.use("/register", registerRouter);
app.use("/snippet", snippetRouter);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
