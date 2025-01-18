import { body, validationResult } from "express-validator";
import { resourceUsage } from "process";
import { Request, Response, NextFunction } from "express";

export const inputValidation = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 25 })
    .withMessage("the name should be between 3 and 25 characters")
    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage("invalid username"),
  body("email").isEmail().normalizeEmail().withMessage("Invalid email address"),
  body("password").trim().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ message: "invalid input!" });
      return;
    }
    next();
  },
];
