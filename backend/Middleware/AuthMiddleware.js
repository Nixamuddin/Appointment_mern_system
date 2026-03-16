import jwt from "jsonwebtoken";
import Auth from "../model/Auth.js";

export const authMiddleware=async(req,res,next)=>{
    try{
        const token=req.cookies.token || req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
       jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
         if(err){
             return res.status(401).json({message:"Unauthorized"})
         }
         const user=Auth.findById(decode.userId);
         if(!user){
             return res.status(401).json({message:"Unauthorized"})
         }
         req.user=user;
         next();
       })
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"})
    }
}

export const IsAdmin=async(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.roles)){
            return res.status(401).json({message:"Unauthorized Access "})
        }
        next();   
    }
}