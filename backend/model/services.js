import mongoose from "mongoose";
const ServicesSchema=new mongoose.Schema({
    heading:{
        type:String,
        required:[true,"Please Enter Services Heading"]
        },
    description:{
        type:String,
        required:[true,"Please Enter Services Description"]
        },
    time:{
        type:String,
        required:[true,"Please Enter Services Time"]
        
    },
   price:{
       type:Number,
       required:[true,"Please Enter Services Price"]
   }
},{timestamps:true});

export default mongoose.model("Services",ServicesSchema);