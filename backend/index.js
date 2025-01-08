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
app.use("/api/books", bookRoutes);

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
