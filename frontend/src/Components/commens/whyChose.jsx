import React from 'react'
import { Calendar, Clock, Users } from "lucide-react";
const whyChose = () => {
    const features = [
  {
    title: "Easy Scheduling",
    description: "Book appointments in seconds with our intuitive calendar interface",
    icon: Calendar,
  },
  {
    title: "Flexible Hours",
    description: "Choose from available time slots that work best for your schedule",
    icon: Clock,
  },
  {
    title: "Expert Staff",
    description: "Select from our team of experienced professionals",
    icon: Users,
  },
];
  return (
  <>
  <div className='mt-20'>
     <h1 className='text-4xl font-bold text-center'>Why Choose Us?</h1>
     <p className='text-center text-gray-500 pt-5 font-bold text-xl'>Simple, fast, and reliable appointment booking</p>

     <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
      {features.map((feature)=>(
     <div key={feature.title} className='flex items-center space-x-4'>
     <div className='bg-white p-8 shadow-md rounded-md text-center '>
        <div className='flex justify-center  rounded-md'>
              <feature.icon className='text-blue-500' size={50}/>
        </div>
      <h1 className='font-bold text-2xl py-2'>{feature.title}</h1>
      <p className='text-gray-500'>{feature.description}</p>
      
     </div>
     </div>
      ))}
     </div>
  </div>
  
  </>
  )
}

export default whyChose
