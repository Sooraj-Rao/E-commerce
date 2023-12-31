import express from "express";
import { Login, SignUp } from "../../Controllers/User/Auth.js";
import {
  getProducts,
  getSingleProduct,
} from "../../Controllers/User/Products.js";
import { SaveOrderInfo, getOrderInfo } from "../../Controllers/User/Order.js";

export const router = new express.Router();
router.post("/auth/signUp", SignUp);
router.post("/auth/login", Login);

router.get("/getProducts/:category", getProducts);
router.get("/productDetail/:name", getSingleProduct);

router.post("/order/payment", SaveOrderInfo);
router.get("/order/details/:token", getOrderInfo);