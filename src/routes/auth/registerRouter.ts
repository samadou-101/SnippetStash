import express from "express";
import { inputValidation } from "../../middleware/auth/validation.js";
import { handleRegisterRequest } from "../../controllers/auth/handleRegister.js";
const registerRouter = express.Router();

registerRouter.post("/", inputValidation, handleRegisterRequest);
registerRouter.get("/", (req, res) => {
  res.send({ message: "welcome" });
});

export default registerRouter;
