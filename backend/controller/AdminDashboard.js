import Booking from "../model/Booking.js";
import Service from "../model/services.js";
import Provider from "../model/Provider.js";
import AppError, { AsyncErrorHandler } from "../Utils/Error.js";

export const AdminStatistic=AsyncErrorHandler(async(req,res,next)=>{
const totalAppointments=await Booking.countDocuments();
const TotalRevenue=await Booking.aggregate([
  { $match:{status:"confirmed"}},
  {$lookup:{from:"services",localField:"service",foreignField:"_id",as:"service"}},
  {$unwind:"$service"},
  {
    $group: {
      _id:null,
      totalAmount: { $sum: "$service.price" }
    }
  },
   
])
const totalPanding=await Booking.countDocuments({status:"pending"});
const totalConfirm=await Booking.countDocuments({status:"confirmed"});
const totalServices=await Service.countDocuments();
const totalProviders=await Provider.countDocuments();
const AverageAppointmentRate=await Service.aggregate([
     { $match:{$and:[{price:{$exists:true}},{ price:{$gt:0}}]}},
     {
       $group: {
         _id:"null",
         totalAmount: { $avg: "$price" }
       }
     },
])

res.status(200).send({success:true,data:{totalAppointments,TotalRevenue, totalPanding,totalConfirm,totalServices,totalProviders,AverageAppointmentRate}})
})
