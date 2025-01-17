import jwt, { TokenExpiredError } from "jsonwebtoken";
export const generateJWT = (userId: string, secretKey: string): string => {
  const token = jwt.sign({ userId }, secretKey);
  return token;
};
