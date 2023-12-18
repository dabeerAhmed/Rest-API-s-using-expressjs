require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
console.log("env", process.env.DB_PASSWORD);

// db connection

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const server = express();
//body parser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

// server.get("/demo", (req, res) => {
//   res.json(products)
//   res.status(201).send("<h1>hello</h1>")
//   res.sendFile("D:\New folder (2)\Nodejs-express-mongodb\express-js\index.html")
// });

server.listen(process.env.PORT, () => {
  console.log("server started");
});
