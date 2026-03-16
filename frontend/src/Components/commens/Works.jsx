import React from 'react'

const Works = () => {
    const bookingSteps = [
  {
    step: 1,
    title: "Choose Service",
    description: "Select from our range of services",
  },
  {
    step: 2,
    title: "Pick Provider",
    description: "Choose your preferred staff member",
  },
  {
    step: 3,
    title: "Select Time",
    description: "Pick a date and time that works for you",
  },
  {
    step: 4,
    title: "Confirm",
    description: "Complete booking and receive confirmation",
  },
];
  return (
 <div className='mt-20 bg-blue-50  pb-10'>
     <h1 className='text-4xl font-bold text-center pt-10'>How It Works</h1>
     <p className='text-center text-gray-500 pt-5 font-bold text-xl'>Book your appointment in 4 simple steps</p>

     <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
      {bookingSteps.map((feature)=>(
     <div key={feature.title} className='flex justify-center items-center space-x-4'>
     <div className=' text-center '>
        <div className='flex justify-center py-5'>
            <div className='flex justify-center items-center font-bold bg-blue-500 rounded-full w-18 h-18 text-center text-white  text-2xl'>{feature.step}</div>
        </div>
      <h1 className='font-bold text-2xl py-2'>{feature.title}</h1>
      <p className='text-gray-500'>{feature.description}</p>
      
     </div>
     </div>
      ))}
     </div>
  </div>
  
  )
}

export default Works
