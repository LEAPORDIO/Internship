const mongoose=require("mongoose");
const connectChey=async()=>{
    const connection=await mongoose.connect(process.env.URI);
    console.log("Connected to the DB",connection.connection.host);
}
module.exports=connectChey;