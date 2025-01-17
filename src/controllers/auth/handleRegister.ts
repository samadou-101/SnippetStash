import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { generateJWT } from "../../utils/jwtUtils";

const handleRequest = (req: Request, res: Response) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const userId = "123";
    const token = generateJWT(userId, "secret");
    res.cookie("jwt", token);
  } else {
    res.send({ errors: result.array });
  }
};

export const handleRegister = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 25 })
    .withMessage("the name should be between 3 and 25 characters")
    .matches("/^[a-zA-Z0-9_-]+$/")
    .withMessage("invalid username"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email address"),
  handleRequest,
];
