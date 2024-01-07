import { GetProdMsg } from "../../Constants/Messages/Message.js";
import Product from "../../Models/Admin/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const { category } = req.params;
    const isParam = category == "all" ? "" : category;
    const productList = await Product.find(
      isParam ? { category:isParam } : null
    );
    if (productList.length != 0) {
      return res.json({ error: false, data: productList, message: "success" });
    } else {
      return res.json({ error: false, data: null, message: "failed" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: GetProdMsg.fail, data: null });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    let { name } = req.params;
    name = name.replaceAll("-", " ");
    const productData = await Product.findOne({ name: name  });
    if (!productData) {
      return res.json({ error: true, message: GetProdMsg.NoExist, data: null });
    }
    return res.json({ error: false, data: productData, message: "success" });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: GetProdMsg.fail, data: null });
  }
};
