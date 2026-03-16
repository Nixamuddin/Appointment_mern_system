import React from 'react'
import { useNavigate } from 'react-router-dom';

const ConfirmBooked = ({selectService, selectProvider, selectTime, selectDate}) => {
  const navigate=useNavigate();
  return (
    <div>
      <h1 className='text-4xl font-bold text-center pt-10'>Appointment Confirmed!</h1>
      <div className='max-w-xl text-center mx-auto'>
      <p className='text-center text-gray-600 font-semibold text-lg mt-5'>Your appointment has been successfully booked! and confirmation has been sent to your email</p>
      </div>
     
      <div className='bg-white mx-auto max-w-xl p-4 rounded-md shadow border border-gray-200 mt-5'>
        <div className='flex justify-between items-center px-4'>
          <h1 className='text-gray-600 '>Service:</h1>
          <h1 className='text-gray-600 '>{selectService?.heading}</h1>
        </div>
        <div className='flex justify-between items-center px-4'>
          <h1 className='text-gray-600 '>Provider:</h1>
          <h1 className='text-gray-600 '>{selectProvider?.name}</h1>
        </div>
        <div className='flex justify-between items-center px-4'>
          <h1 className='text-gray-600 '>Date:</h1>
          <h1 className='text-gray-600 '>{selectDate}</h1>
        </div>
        <div className='flex justify-between items-center px-4'>
          <h1 className='text-gray-600 '>Time:</h1>
          <h1 className='text-gray-600 '>{selectTime?.time}</h1>
        </div>
      </div>
      <button onClick={()=>navigate('/')} className='bg-blue-500 text-white px-6 py-2 rounded-md mt-10 block mx-auto'>Back to Home</button>
    </div>
  )
}

export default ConfirmBooked
