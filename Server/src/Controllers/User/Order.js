import Order from "../../Models/User/Order.js";

export const SaveOrderInfo = async (req, res) => {
  try {
    const { cart, addressInfo, date, name, email, paymentId, amountInfo } =
      req.body;
    if (name == "" || email == "" || addressInfo.phone == "") {
      return res.json({ error: true, message: "all field required" });
    }
    const newOrder = new Order({
      cart,
      amountInfo,
      addressInfo,
      date,
      name,
      email,
      paymentId,
    });
    await newOrder.save();
    res.json({ error: false, message: "success" });
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
