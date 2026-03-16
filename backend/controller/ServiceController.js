import Service from './../model/services.js';
import AppError from '../Utils/Error.js';
import { AsyncErrorHandler } from '../Utils/Error.js';

export const getAllServices=AsyncErrorHandler(async(req,res,next)=>{
  const services=await Service.find({});
  res.status(200).send({success:true,message:"Services Fetched Successfully",data:services});  
});


export const createService=AsyncErrorHandler(async(req,res,next)=>{
  const {heading,description,time,price}=req.body;
  if(!heading || !description || !time || !price){
      return next(new AppError(400,'Please Enter All Fields'))
  }
  const service=await Service.create({heading,description,time,price});  
  await service.save();
  res.status(201).send({success:true,message:"Service Created Successfully",data:service})
});

export const getSingleServices=AsyncErrorHandler(async(req,res,next)=>{
  const {id}=req.params;  
  const services=await Service.findById(id);
  if(!services){
      return next(new AppError(404,'Service Not Found'))
  }
  res.status(200).send({success:true,data:services})
})
export const updatedServices=AsyncErrorHandler(async(req,res,next)=>{
    const {id}=req.params;
    const services=await Service.findById(id);
    if(!services){
        return next(new AppError(404,'Service Not Found'))
    }
    const updatedServices=await Service.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).send({success:true,message:"Service Updated Successfully",data:updatedServices})

});


export const deleteServices=AsyncErrorHandler(async(req,res,next)=>{
    const {id}=req.params;
    const services=await Service.findById(id);
    if(!services){
        return next(new AppError(404,'Service Not Found'))
    }
    await Service.findByIdAndDelete(id);
    res.status(200).send({success:true,message:"Service Deleted Successfully"})
});
