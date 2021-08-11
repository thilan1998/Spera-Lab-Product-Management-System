const express  = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

//set up server

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

//connect to mongoDB

const URL= process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})
//mongoose.connect(
 //   process.env.MDB_CONNECT,
 //   {
 //   useNewUrlParser: true,
 //   useUnifiedTopology: true,
//},
// (err) => {
 //   if(err) return console.error(err);
//    console.log("Connected to mongoDB");
//});
