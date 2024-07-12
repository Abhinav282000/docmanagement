
const mongoose = require("../db/dbConfig");
const Student = require("../models/Student");
module.exports=(req,res) => {
    if(req.url == "/save"){
     const{rno,stu_name,contact}=req.body;
     const student = new Student({rno,stu_name,contact});
     student
     .save()
     .then  (()=>{
        res.status(201).json({message:"Records saved"});
     })
    .catch((err)=>{
        res.status(500).json({message:err});
    });
} 
};