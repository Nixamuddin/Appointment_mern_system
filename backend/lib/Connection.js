import mongoose from "mongoose";
export const connect=async()=>{
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
}
catch(error){
    console.log("Error While Connecting to database ",error)
}
}