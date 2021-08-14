const express  = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//set up server

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true,
})
);

//connect to mongoDB

const URL= process.env.MDB_CONNECT;

mongoose.connect(
    process.env.MDB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) return console.error(err);
      console.log("Connected to MongoDB");
    }
  );

// set up routes for user
app.use("/auth", require("./routes/userRouter"));

//set up routes for products
app.use("/product", require('./routes/productRouters'));

