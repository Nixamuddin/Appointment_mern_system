import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const AuthSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],  
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
    },
    roles: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }
},{timestamps:true});

AuthSchema.pre("save",async function () {
    if(!this.isModified("password")){
     return
    }
      this.password=await bcrypt.hash(this.password,10);
   
    
})

AuthSchema.methods.comparePassword=async function (userpassword){
    return await bcrypt.compare(userpassword,this.password);
}

export default mongoose.model("Auth", AuthSchema);