import express from "express";
import { Login, SignUp } from "../../Controllers/User/Auth.js";
import {
  getProducts,
  getSingleProduct,
} from "../../Controllers/User/Products.js";

export const router = new express.Router();
router.post("/auth/signUp", SignUp);
router.post("/auth/login", Login);

router.get("/getProducts", getProducts);
router.get("/productDetail/:_id", getSingleProduct);
