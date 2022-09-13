const express= require("express");
const app =express();
const userrouter=require("./routes/userdata.rout");

app.use(express.json());

app.use("/home",userrouter);

module.exports=app;
