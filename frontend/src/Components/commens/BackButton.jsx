import { ArrowLeft } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = ({setStep, step}) => {
    const navigator=useNavigate();
  return (
    <div className='flex items-center py-1 w-25   cursor-pointer text-gray-600 hover:text-black hover:bg-gray-100 rounded border border-gray-200' onClick={() => {setStep(1)} }><ArrowLeft />Back</div>
  )
}

export default BackButton
