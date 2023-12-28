import express from "express";
import { addProduct, getProduct } from "../../Controllers/Admin/Product.js";

export const router = new express.Router();
router.post("/addProduct", addProduct);
router.get("/getProduct", getProduct);
