const mongoose = require("mongoose");
require("dotenv").config();

const Mongoose = mongoose
  .connect(process.env.DBLINK)
  .then((Database) => {
    console.log("Database is Connect");
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });


module.export =  Mongoose;