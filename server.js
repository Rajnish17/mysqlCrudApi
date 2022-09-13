// require("dotenv").config();
const express= require("express");
const app =require("./app");
const port =8080;



app.listen(port,function(err,data){
    console.log(`server started at port ${port}`)
});