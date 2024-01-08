import Order from "../../Models/User/Order.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../Models/User/userModel.js";
dotenv.config();

export const SaveOrderInfo = async (req, res) => {
  try {
    const { cart, addressInfo, date, paymentId, amountInfo, token } = req.body;
    if (!addressInfo.name || !addressInfo.phone || !token) {
      return res.json({ error: true, message: "Unauthorized" });
    }
    const secretKey = process.env.SECRET_KEY;

    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.json({ error: true, message: "Unauthorized" });
      }
      const userId = decoded.id;
      const findUser = await User.findById(userId);
      if (!findUser) {
        return res.json({ error: true, message: "Unauthorized" });
      } else {
        cart.map((item, i) => {
          const { product, quantity } = item;
          return findUser.purchaseHistory.push({ product, quantity });
        });
      }
      const newOrder = new Order({
        cart,
        amountInfo,
        addressInfo,
        date,
        user: userId,
        paymentId,
      });
      await findUser.save();
      await newOrder.save();
      res.json({ error: false, message: "success" });
    });
  } catch (error) {
    console.log(error);
    res.json({ error: true, message: "failed" });
  }
};

export const getOrderInfo = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(email);
    if (!email) {
      res.json({ error: true, message: "invalid email" });
    }
    const orderInfo = await Order.findOne({ email });
    if (orderInfo) {
      res.json({ error: false, message: "success", data: orderInfo });
    } else {
      res.json({ error: true, message: "not found", data: null });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: true, message: "failed" });
  }
};
