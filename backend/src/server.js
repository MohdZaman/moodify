import express from "express";
import app from './app.js';
import dbConnect from "./utils/dbConnect.js";
import dotenv from "dotenv"

const PORT = process.env.PORT || 4000;
 // Connect to the database
 dotenv.config();
 dbConnect();
 app.listen(PORT,() =>{
     console.log(`Server is running on PORT ${PORT}`)
 })