import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
} from "../../Controllers/Admin/Product.js";
import { DeleteUser, GetUser } from "../../Controllers/Admin/Users.js";

export const router = new express.Router();
router.post("/addProduct", addProduct);
router.get("/getProduct", getProduct);
router.delete("/deleteProduct", deleteProduct);
router.get("/getUsers", GetUser);
router.delete("/deleteUser/:id", DeleteUser);
