import { AddProdMsg, GetProdMsg } from "../../Constants/Messages/Message.js";
import Product from "../../Models/Admin/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, imageUrl, stock } = req.body;
    const isProduct = await Product.findOne({ name });
    if (isProduct) return res.json({ error: true, message: AddProdMsg.exist });
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
      stock,
    });
    await newProduct.save();
    return res.json({ error: false, message: AddProdMsg.success });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: AddProdMsg.fail });
  }
};

export const getProduct = async (req, res) => {
  try {
    const productList = await Product.find();
    console.log(productList);
    return res.json({ error: false, data: productList });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: GetProdMsg.fail });
  }
};
