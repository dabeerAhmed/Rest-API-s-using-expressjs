const express = require("express");
const morgan = require("morgan");
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

const server = express();

//body parser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);


// server.get("/demo", (req, res) => {
//   res.json(products)
//   res.status(201).send("<h1>hello</h1>")
//   res.sendFile("D:\New folder (2)\Nodejs-express-mongodb\express-js\index.html")
// });

server.listen(8080, () => {
  console.log("server started");
});
