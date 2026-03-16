import mongoose from "mongoose";

const ProviderSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Provider Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Provider Email"],
        unique:true
    },
    label:{
        type:String,
        required:[true,"Please Enter Provider Label"]
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    phone:{
        type:Number
    }
        
},{timestamps:true});

export default mongoose.model("Provider",ProviderSchema);