const mongoose = require("mongoose");
require("dotenv").config();
mongoose
.connect(process.env.dbString)
.then(()=>{
    console.log("MongoDB Connected");
})
.catch((err)=>{
console.log("MongoDB not connected");
});
module.exports=mongoose;
