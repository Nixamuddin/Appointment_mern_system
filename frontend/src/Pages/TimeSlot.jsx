import React, { useEffect, useState } from 'react'
import BackButton from '../Components/commens/BackButton'
import { useSlot } from '../Hookes/SlotHooks'

const TimeSlot = ({ setStep, setSelectTime, setSelectDate }) => {

  const [date, setDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const { slots, getSlotByDate } = useSlot()

  useEffect(() => {
    if (date) {
      getSlotByDate(date)
    }
  }, [date])

  const handleSelect = (slot) => {
    if (slot.bookedStatus === "booked") return

    setSelectedTime(slot.time)
    setSelectTime(slot)
  }

  return (
    <div className='mx-auto container space-y-5'>
      <BackButton setStep={setStep} />

      <h1 className='font-semibold text-2xl text-gray-600'>
        Pick Date & Time
      </h1>

      <div className='w-full border border-gray-200 py-10 shadow rounded-md bg-white'>
        <div className='px-8 rounded-md space-y-2'>
          <p className='text-gray-600 font-semibold'>Select date</p>

          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
              setSelectDate(e.target.value)
            }}
            className='p-2 w-full border border-gray-200 outline-none'
          />
        </div>
      </div>

      {date && (
        <div className='w-full border border-gray-200 py-10 shadow rounded-md bg-white'>
          <div className='px-8 rounded-md space-y-2'>

            <h1 className='text-sm text-gray-600'>
              Select a time slot (30 minutes)
            </h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
              {slots?.map((slot) => {

                const isBooked = slot.bookedStatus === "booked"
                const isSelected = selectedTime === slot.time

                return (
                  <div
                    key={slot._id}
                    onClick={() => handleSelect(slot)}
                    className={`p-5 rounded-md border transition
                      
                      ${isBooked
                        ? "bg-gray-200 cursor-not-allowed"
                        : "cursor-pointer hover:scale-105"}
                      
                      ${isSelected ? "border-blue-600 bg-blue-50" : "border-gray-200"}
                    `}
                  >
                    <p className={`font-semibold
                      ${isBooked ? "text-red-500 line-through" : "text-green-600"}
                    `}>
                      {slot.time}
                    </p>
                  </div>
                )
              })}
            </div>

            <button
              disabled={!selectedTime}
              onClick={() => setStep(4)}
              className={`px-5 py-2 w-full rounded-md mt-5 transition
                ${selectedTime
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 cursor-not-allowed"}
              `}
            >
              Continue
            </button>

          </div>
        </div>
      )}
    </div>
  )
}

export default TimeSlot