import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateSnippet = [
  body("title").notEmpty().isString().withMessage("Title should not be empty"),
  body("tag").isArray().withMessage("The tag should be an array!"),
  body("category").notEmpty().isString(),
  body("code").notEmpty(),
  body("description").isString(),
  body("language").isString(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ message: errors.array() });
      return;
    } else {
      next();
    }
  },
];
