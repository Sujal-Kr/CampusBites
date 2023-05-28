const express = require("express");
const cors = require("cors");
require('./Db/Database');
require("dotenv").config();
const orderRouter = require('./Router/orderRouter');
const successRouter = require('./Router/successRouter');
const userRouter = require('./Router/userRouter');


const app = express();
//? MiddleWares
app.use(express.json());
app.use(cors());

//? Routes
app.use('/menu',orderRouter);
app.use('/success',successRouter);
app.use('/',userRouter)

//? Server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is Active in PORT : ${PORT} `);
});

// app.use("/menu",orderRouter)

