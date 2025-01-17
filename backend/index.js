const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

main().catch((err) => console.log(err));

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route")
const userRoutes = require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  console.log("Db connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.get("/", (req, res) => {
    res.send("Hello!!");
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
