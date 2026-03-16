import React from 'react'

const StepsIndicator = ({step}) => {
  return (
    <div className='flex justify-center items-center border-gray-300  mb-10'>
    { [1,2,3,4].map((num, index)=>(
        <>
         <div key={num.index} className={`w-10 h-10 flex items-center justify-center rounded-full mx-1 ${step >= num ? "bg-blue-600 text-white": "bg-gray-400 text-white"}}`}>
                <p className='text-white font-bold'>{num}</p>
            </div>
            {index < 3 && <div className={`h-1 w-20 ${step > num ? "bg-blue-600": "bg-gray-400"}`}></div>}
        </>
           
     ))}
    </div>
  )
}

export default StepsIndicator
