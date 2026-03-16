import Provider from "../model/Provider.js";
import AppError from "../Utils/Error.js";
import { AsyncErrorHandler } from "../Utils/Error.js";

export const getProviders=AsyncErrorHandler(async(req,res,next)=>{
    const providers=await Provider.find({});
    res.status(200).send({success:true, data:providers})
})

export const createProvider=AsyncErrorHandler(async(req,res,next)=>{
  const {name,email,label,image,description,phone}=req.body;
  if(!name || !email || !label|| !description || !phone){
      return next(new AppError(400,'Please Enter All Fields'))
  }
  const providers=await Provider.create({name,email,label,image,description,phone});  
  await providers.save();
  res.status(201).send({success:true, message:"Provider Created Successfully",data:providers})
});


export const updateProvider=AsyncErrorHandler(async(req,res,next)=>{
    const {id}=req.params;
    const providers=await Provider.findById(id);
    if(!providers){
        return next(new AppError(404,'Provider Not Found'))
    }
const updatedProvider=await Provider.findByIdAndUpdate(id,req.body,{new:true});
res.status(200).send({success:true,data:updatedProvider})
});

export const deleteProvider=AsyncErrorHandler(async(req,res,next)=>{
    const {id}=req.params;
    const provider=await Provider.findById(id);
    if(!provider){
        return next(new AppError(404,'Provider Not Found'))
    }
    await Provider.findByIdAndDelete(id);
    res.status(200).send({success:true,message:"Provider Deleted Successfully"})
});
