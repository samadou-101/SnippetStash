import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { generateJWT } from "../../utils/jwtUtils.js";
import { createUser } from "../../services/user/userSrvice.js";
import { tokenSecretKey } from "../../config/config.js";

export const handleRegisterRequest = async (req: Request, res: Response) => {
  const result = validationResult(req);
  const { username, email, password } = req.body;
  if (!result.isEmpty()) {
    res
      .status(400)
      .send({ message: "Validation Failed. Please check your input" });
  } else {
    try {
      const userId = await createUser(username, email, password);
      const token = generateJWT(userId, tokenSecretKey);
      console.log(token);
      if (token) {
        res.cookie("jwt", token);
        res.status(201).send({ message: "User Created Successfully!" });
      } else {
        console.log("Token Generation Failed!");
        res.status(500).send({ message: "Internal Server Error" });
      }
    } catch (error) {
      console.log("Error duging User creation", error);
      res.status(500).send({ message: "Internal Server Error!" });
    }
  }
};
