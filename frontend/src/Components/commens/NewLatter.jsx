import React from 'react'
import { Link } from 'react-router-dom'
const NewLatter = () => {
  return (
    <div className='mx-auto container py-10 bg-blue-600 rounded-xl shadow-2xl p-10'>
      <h1 className='text-center font-bold text-3xl text-white'>Ready to Get Started?</h1>
      <p className='text-center text-white pt-5 text-xl'>Book your first appointment today and experience the difference</p>
      <div className='flex justify-center  mt-5'>
       <Link to='/appointment' className='py-4 px-18 bg-white text-blue-500 font-bold rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in border border-white'>Book Appointment</Link>
      </div>
     
    </div>
  )
}

export default NewLatter
