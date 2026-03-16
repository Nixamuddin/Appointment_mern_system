import React from 'react'

const Footer = () => {
  return (
    <div className='my-10 mx-10  md:mx-auto md:container space-y-5 border-t border-gray-50 py-5'>
     <div className='border-b border-gray-200 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20'>
        <div className='flex flex-col space-y-3'>
        <h1 className='font-bold text-xl'>AppointMe</h1>
        <p className='text-gray-600'>Professional appointment booking made simple and elegant.</p>
       </div>
       <div>
        <h1 className='font-bold text-xl text-gray-600 pb-3'>Quick Links</h1>
        <div className='flex flex-col space-y-2'>
          <p className='text-gray-600'>Home</p>
          <p className='text-gray-600'>Book Appointment</p>
          <p className='text-gray-600'>Calendar</p>
        </div>
       </div>
       <div>
   <h1 className='font-bold text-xl text-gray-600'>Contact Info</h1>
        <div className='text-gray-600 font-sens'>
         <p> Email:nizamuddin15701@gmail.com</p>
         <p>Phone: (+966) 500214965</p>
        </div>
       </div>
      </div>
     </div>
     <p className='text-center text-gray-600 py-4'>© {new Date().getFullYear()} AppointMe. All rights reserved.</p>
    </div>
  )
}

export default Footer
