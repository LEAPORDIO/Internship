const express=require("express");
const app=express();
const cors=require("cors");
const dotenv=require("dotenv").config();
const connectChey=require("./Shed/connect");
const pw=require("./Figures/UNPW");
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hi");
})
app.post("/raasaleelalu",async(req,res)=>{
    const items=new pw({
        unpw:req.body.pw
    });
    await items.save();
    res.status(200).send("ok")
})
connectChey();
module.exports=app;