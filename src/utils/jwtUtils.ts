import jwt, { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { tokenSecretKey } from "../config/config.js";
export const generateJWT = (userId: string, secretKey: string): string => {
  const token = jwt.sign({ userId }, secretKey);
  return token;
};

export const compareToken = (token: string): string | JwtPayload => {
  try {
    const result = jwt.verify(token, tokenSecretKey);
    return result;
  } catch (error) {
    console.log("Invalid token");
    throw new Error();
  }
};
