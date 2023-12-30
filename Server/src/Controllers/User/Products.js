import { GetProdMsg } from "../../Constants/Messages/Message.js";
import Product from "../../Models/Admin/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const productList = await Product.find();
    return res.json({ error: false, data: productList, message: "success" });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: GetProdMsg.fail, data: null });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const productData = await Product.findOne({ _id });
    if (!productData) {
      return res.json({ error: true, message: GetProdMsg.NoExist, data: null });
    }
    return res.json({ error: false, data: productData, message: "success" });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: GetProdMsg.fail, data: null });
  }
};
