import express from "express"
import dotenv from "dotenv"
import { ConnectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(201).json({
        message:"welcome to CSEC-ASTU AI !",
        successe:true
    })
})


app.listen(PORT,async()=>{
    ConnectDB()
    console.log(`🚀 Server is running on: http://localhost:${PORT}`)
})