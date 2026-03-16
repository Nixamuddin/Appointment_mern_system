import React from 'react'
import { useProvider } from '../Hookes/ProviderHooks';
import BackButton from '../Components/commens/BackButton';

const Providers = ({setStep, setSelectProvider}) => {
  const {providers}=useProvider();
  return (
    <div className='space-y-5'>
       <BackButton setStep={setStep}  />
       <h1 className='font-semibold text-2xl text-gray-600'>Select a Provider</h1>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
        {
            providers?.data?.map((Providere)=>(
                <div onClick={()=>{setStep(3);setSelectProvider(Providere)}}   key={Providere.name} className='bg-white p-8 shadow-md border border-gray-200 rounded-md text-center space-y-2 hover:scale-105 transition duration-300 ease-in '>
           <div className='flex  space-y-2 space-x-5'>
             <div className='w-10 h-10 rounded-full content-center flex justify-center items-center bg-blue-500 text-white' >{Providere.name.charAt(1).toUpperCase()}</div>
            <div className='flex flex-col'>
         <h2 className='font-semibold text-md text-gray-600'>{Providere.name}</h2>
        <p className='text-gray-600 text-xs bg-gray-100 p-1 rounded'>{Providere.label}</p>
            </div>
           </div>
         <p className='text-gray-600 text-sm'>{Providere.description}</p>
         <p className='text-gray-600 text-sm'>{Providere.email}</p>
         <p className='text-gray-600 text-sm'>{Providere.phone}</p>
      </div>
            ))
        }
      
       </div>
    </div>
  )
}

export default Providers
