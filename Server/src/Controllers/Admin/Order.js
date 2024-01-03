import Order from "../../Models/User/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ error: false, data: orders, message: "success" });
  } catch (error) {
    console.log(error);
    res.json({ error: true, data: null, message: "failed" });
  }
};
