import React from 'react'
import { Outlet } from 'react-router-dom'
import StepsIndicator from '../Components/commens/StepsIndicator'
import { useState } from 'react'
import Providers from '../Pages/Providers'
import Services from '../Pages/Services'
import TimeSlot from '../Pages/TimeSlot'
import Booking from '../Pages/Booking'
import ConfirmBooked from '../Pages/ConfirmBooked'

const BookingLayout = () => {
  const [step, setStep]=useState(1);
  const [selectService, setSelectService]=useState(null);
  const [selectProvider, setSelectProvider]=useState(null);
  const [selectTime, setSelectTime]=useState(null);
  const [selectDate, setSelectDate]=useState(null)
  const [bookingDone, setBookingDone]=useState(false);
  return (
    <div className='min-h-screen p-10'>
        <div className='mt-2'>
            <div className='container mx-auto pt-20 space-y-5'>

              <h1 className='text-4xl font-bold text-center'>Book Your Appointment</h1>
          <p className='text-center text-gray-600 font-semibold'>Select a service and choose your preferred time</p>
         <StepsIndicator step={step}/>
         <div className='lg:mx-20 mx-auto'>
          {step === 1 && <Services setStep={setStep} setSelectService={setSelectService}  />}
          {step === 2 && <Providers setStep={setStep} setSelectProvider={setSelectProvider}/>}
          {step === 3 && <TimeSlot setStep={setStep} setSelectTime={setSelectTime} setSelectDate={setSelectDate}/>}     
           {step === 4 && !bookingDone &&  <div className='space-y-5'>
            <Booking selectService={selectService} selectProvider={selectProvider} selectTime={selectTime} selectDate={selectDate} setStep={setStep} setBookingDone={setBookingDone}/>

            </div>}
          {step === 4 && bookingDone && <ConfirmBooked  selectService={selectService} selectProvider={selectProvider} selectTime={selectTime} selectDate={selectDate} />}
         </div>
        </div>
        </div>
    </div>
  )
}

export default BookingLayout
