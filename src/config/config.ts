import dotenv from "dotenv";

dotenv.config();

export const tokenSecretKey = process.env.SECRET_TOKEN_KEY;
export const dbURI = process.env.DB_URI;
export const DEV_PORT = process.env.DEV_PORT;
