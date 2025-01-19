import { param, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateSnippetID = [
  param("id").isMongoId().withMessage("Invalid Object format"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send({ errors: errors.array() });
      return;
    } else {
      next();
    }
  },
];
