import dotenv from "dotenv"
import mongoose from "mongoose";

import connectDB from "./db/db.js";
// require('dotenv').config({path:./env});

import { DB_NAME } from "./constants.js";
dotenv.config({
    path:"./env"
})

connectDB().then(()=>{
    app.listen(process.env.PORT ||8000 ,()=>{
        console.log(`server running at port ${process.env.PORT}`);
    })
   
}).catch((error)=>{
    console.log("Found Error:",error)
});

/*
import express from'express'

const app= express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    application.on("error",()=>{
        console.log("error:",error);
        throw error;
    })

    app.listen(process.env.PORT,()=>{
        console.log(`Server is listening on: ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("Error", error);
    throw err;
  }
})();

*/