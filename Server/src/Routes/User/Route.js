import express from "express";
import { Login, SignUp } from "../../Controllers/User/Auth.js";

export const router = new express.Router();
router.post("/auth/signUp", SignUp);
router.post("/auth/login", Login);
