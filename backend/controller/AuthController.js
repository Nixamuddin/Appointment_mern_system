import Auth from './../model/Auth.js';
import AppError from '../Utils/Error.js';
import jwt from 'jsonwebtoken';
import { AsyncErrorHandler } from '../Utils/Error.js';

const generateToken=(userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'30d'});
    return token
}
const cookie=(res,token)=>{
 res.cookie('token',token,{httpOnly:true,maxAge:30*24*60*60*1000});

}
export const register=AsyncErrorHandler(async(req,res,next)=>{
const {name,email,password}=req.body;
if(!name || !email || !password){
    return next(new AppError(400,'Please Enter All Fields'))
}

const existingUser=await Auth.findOne({email});
if(existingUser){
    return next(new AppError(400,'User Already Exists'))
}
const user=await Auth.create({name,email,password});
await user.save();
generateToken(user._id);
const token=generateToken(user._id);
cookie(res,token);
res.status(201).send({success:true,message:"User Created Successfully", data:{
    name:user.name,
    email:user.email,
    role:user.roles
}})

});

export const login=AsyncErrorHandler(async(req,res,next)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return next(new AppError(400,'Please Enter All Fields'))
  }  
  const user=await Auth.findOne({email});
  if(!user){
    return next(new AppError(400,'User Not Found'))
}
const isMatch=await user.comparePassword(password);
if(!isMatch){
    return next(new AppError(400,'Incorrect Password'))
}
const token=generateToken(user._id);
cookie(res,token);
res.status(200).send({success:true,message:"User Logged In Successfully", data:{
    name:user.name,
    email:user.email,
    role:user.roles
}})
})