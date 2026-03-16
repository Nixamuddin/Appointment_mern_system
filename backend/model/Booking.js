import mongoose from "mongoose";
const BookingSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"Please Enter Your Full Name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true
    },
    phone:{
        type:String,
        required:[true,"Please Enter Your Phone Number"],
        unique:true
    },
    message:{
        type:String
    },
    time:{
        type:String,
        default:"00:00"
    },
    date:{
        type:Date,
        default:Date.now
    },
    bookedStatus:{
     type:String,
     enum:["available", "booked"],
     default:"available"
    },
    status:{
        type:String,
        enum:["pending", "cancelled","confirmed"],
        default:"pending"
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Services"
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Provider"
    }
    
    
},{timestamps:true});
BookingSchema.index({date:1, time:1, provider:1}, {unique: true})

export default mongoose.model("Booking",BookingSchema);