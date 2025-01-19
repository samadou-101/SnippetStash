import { Request, Response, NextFunction } from "express";
import { compareToken } from "../../utils/jwtUtils.js";
import { JwtPayload } from "jsonwebtoken";

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
  if (!token) {
    res.status(400).send({ message: "Invalid tooken" });
    return;
  }

  try {
    if (token !== undefined) {
      const result = compareToken(token) as JwtPayload;
      console.log(result);
      req.body.userId = result.userId;
      next();
    }
  } catch (error) {
    res.status(401).send({ message: "Unauthorizeid!" });
  }
};
