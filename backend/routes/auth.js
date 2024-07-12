const express=require("express");
const router=express.Router();
const records=require("../modules/post-api");
router.get("/",(req,res)=>{
  res.send("Welcome Here");
});
router.post("/save",(req,res)=>{
records(req,res);
});
module.exports=router;