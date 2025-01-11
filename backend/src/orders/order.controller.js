const Order = require("./order.model");

const createAorder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("error creating order", error);
    res.status(500).json({ message: "Faild to create order" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "orders not found !!!" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("error creating order", error);
    res.status(500).json({ message: "Faild to create order" });
  }
};

module.exports = {
  createAorder,
  getOrderByEmail,
};
