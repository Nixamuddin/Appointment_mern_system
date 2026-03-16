import Booking from "../model/Booking.js";
import AppError, { AsyncErrorHandler } from "../Utils/Error.js";
import { GenerateSlots } from "../Utils/GenerateSlots.js";
import createEvent from "../Utils/GoogleCalender.js";
import { sendAppointmentEmail } from "../Utils/SendEmail.js";
export const createBooking=AsyncErrorHandler(async(req,res,next)=>{
  const {providerId,serviceId,fullname,email,phone, message, time, date }=req.body;
  if(!providerId || !serviceId || !fullname || !email || !phone  || !time || !date){
    return next(new AppError(400,'Please Enter All Fields'))
  }
  const bookingnew=await Booking.create({ provider:providerId,service:serviceId,fullname,email,phone, message, time, date });  
  await bookingnew.findById(bookingnew._id).populate("provider").populate("service");
  await bookingnew.save();
  await sendAppointmentEmail(bookingnew);
  // await createEvent({
  //   name: booking.fullname,
  //   email: booking.email,
  //   phone: booking.phone,
  //   service: booking.service.heading,
  //   date: booking.date,
  //   time: booking.time,
  // });


  res.status(201).send({success:true,data:bookingnew});
});

export const getBookings=AsyncErrorHandler(async(req,res,next)=>{
  const bookings=await Booking.find({});
  res.status(200).send({success:true,data:bookings})
});


export const ConfirmBooking=AsyncErrorHandler(async(req,res,next)=>{
  const {id}=req.params;
  const booking=await Booking.findById(id);
  if(!booking){
      return next(new AppError(404,'Booking Not Found'))
  }
  const updatedBooking=await Booking.findByIdAndUpdate(id,{status:true},{new:true});
  res.status(200).send({success:true,data:updatedBooking})
});

// today bookings

export const todayBooking=AsyncErrorHandler(async(req,res,next)=>{
  
    const today=new Date().toISOString().split('T')[0];
    const todayBooked=await Booking.find({date:today}).populate("provider").populate("service");
    res.status(200).send({success:true,data:todayBooked})

  
})

export const ConfirmBook=AsyncErrorHandler(async(req,res,next)=>{
  
  const updatedBooking=await Booking.findByIdAndUpdate( req.params.id,{$set: req.body},{new:true});
  res.status(200).send({success:true, message:"Booking Updated Successfully",data:updatedBooking})
});

export const getSlots=AsyncErrorHandler(async(req,res,next)=>{
  const {date}=req.query;
   const slots=GenerateSlots();
   const booked=await Booking.find({date});
   const bookedStatus=booked.map(slot=>slot.time);
   const result=slots.map((time) => ({
     time,
     bookedStatus: bookedStatus.includes(time) ? "booked" : "available"
   }))
   res.status(200).send({success:true,data:result})
})

