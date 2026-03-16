import React, { useState } from 'react'
import { useBooking } from '../Hookes/BookingHooks';
import { useNavigate } from 'react-router-dom';
const Booking = ({selectService, selectProvider, selectTime, selectDate,setBookingDone}) => {
  const {createBooking}=useBooking()
  const navigate=useNavigate();
  const [userInformation, setUserInformation]=useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequest: "",
  });
  const handleUserInformation=(e)=>{
    setUserInformation({...userInformation,[e.target.name]:e.target.value}); 
  }
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!userInformation.fullName || !userInformation.email || !userInformation.phone) {
    return alert("Please Enter All Fields");
  }

  const data = {
    fullname: userInformation.fullName,
    email: userInformation.email,
    phone: userInformation.phone,
    message: userInformation.specialRequest,
    serviceId: selectService?._id,
    providerId: selectProvider?._id,
    time:selectTime?.time,
    date:selectDate
  };

  try {
    const res = await createBooking(data);

    if (res) {
      setUserInformation({
        fullName: "",
        email: "",
        phone: "",
        specialRequest: "",
      });
   
     navigate('/booking-success', { state: { bookingData: res.data } })
       setBookingDone(true);
    }
     
  } catch (error) {
    console.log(error);
  }
};
  return (
   <div className='mx-auto container'>
     <form onSubmit={handleSubmit} className='p-3'>
    <h1 className='text-xl font-bold text-gray-600 pt-10'>Your Information</h1>
    <div className='bg-white p-4 rounded-md shadow border border-gray-200 mt-5'>
      
        <div className='flex flex-col py-2'>
          <label className='text-gray-600 font-semibold py-2'>Full Name *</label>
          <input type="text" name='fullName' value={userInformation.fullName} onChange={handleUserInformation} placeholder='John Doe' className='p-2 border border-gray-200 outline-none rounded-md' />
        </div>
          <div className='flex flex-col py-2'>
          <label className='text-gray-600 font-semibold py-2'>Email *</label>
          <input type="email" name='email' value={userInformation.email} onChange={handleUserInformation} placeholder='example@.com' className='p-2 border border-gray-200 outline-none rounded-md' />
        </div>
          <div className='flex flex-col py-3'>
          <label className='text-gray-600 font-semibold py-2'>Phone *</label>
          <input type="text" name='phone' value={userInformation.phone} onChange={handleUserInformation} placeholder='++966500214965' className='p-2 border border-gray-200 outline-none rounded-md' />
        </div>
            <div className='flex flex-col py-3'>
          <label className='text-gray-600 font-semibold py-2'>Special Requests (Optional)</label>
          <textarea rows={4} type="text" name='specialRequest' value={userInformation.specialRequest} onChange={handleUserInformation} placeholder='Any Special Requests or notes' className='p-2 border border-gray-200 outline-none rounded-md' />
        </div>
     
    </div>

    <div className='bg-blue-50 rounded-md shadow border border-gray-200 p-4 mt-4'>
     <h1 className='py-6 font-semibold text-gray-700'>Booking Summary</h1>
     <div className='space-y-3'>
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
      <hr className='text-gray-300'></hr>
      <div className='flex justify-between items-center px-8'>
        <h1 className='text-gray-600 '>Total Price:</h1>
        <h1 className='text-gray-600 '>{selectService?.price}</h1>
      </div>
     </div>
    </div>
     <button  type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mt-4'>Booking</button>
      </form>
   </div>
  )
}

export default Booking
