const mongoose=require("mongoose");
const Sch=new mongoose.Schema({
    unpw:{
        type:String
    },
});
module.exports=mongoose.model("UNPW",Sch);