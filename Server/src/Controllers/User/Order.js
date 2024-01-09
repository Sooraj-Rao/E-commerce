import Order from "../../Models/User/Order.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../../Models/User/userModel.js";
dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const SaveOrderInfo = async (req, res) => {
  try {
    const { cart, addressInfo, date, paymentId, amountInfo, token } = req.body;
    if (!addressInfo.name || !addressInfo.phone || !token) {
      return res.json({ error: true, message: "Unauthorized" });
    }

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
    const { token } = req.params;
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.json({ error: true, message: "Unauthorized", data: null });
      }
      const userId = decoded.id;
      const orderList = await Order.find({ user: userId });

      const ordersWithProducts = await Promise.all(
        orderList.map(async (order) => {
          const productsInOrder = await Promise.all(
            order.cart.map(async (cartItem) => {
              const populatedCartItem = await Order.populate(cartItem, {
                path: "product",
                model: "products",
              });
              return populatedCartItem;
            })
          );
          const orderWithProducts = {
            ...order.toJSON(),
            cart: productsInOrder,
          };
          return orderWithProducts;
        })
      );

      return res.json({
        error: false,
        message: "success",
        data: ordersWithProducts,
      });
    });
  } catch (error) {
    console.log(error);
    res.json({ error: true, message: "failed" });
  }
};
