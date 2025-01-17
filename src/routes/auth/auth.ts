import express from "express";
import { handleRegister } from "../../controllers/auth/handleRegister";
const router = express.Router();

router.get("/register", handleRegister);
