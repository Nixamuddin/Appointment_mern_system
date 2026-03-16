import React from 'react'
import {ArrowRight} from 'lucide-react';
import WhyChose from '../Components/commens/whyChose';
import Works from '../Components/commens/Works';
import NewLatter from '../Components/commens/NewLatter';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
 
    <div> 
    <div className='w-full relative'>
    <img src='https://media.istockphoto.com/id/1008297190/photo/surprised-client-in-beauty-salon-and-administrator.jpg?s=612x612&w=0&k=20&c=UXzwcOW56_-7AVTXw6LgHQXBgecPidYaou3eV_VE9EE=' className='w-full h-[500px] object-cover brightness-50'/>
      <div className='absolute inset-0 bg-blue-500/50'></div>
      <div className='absolute inset-5 flex items-center w-1/2xl'>
      <div className='flex-col space-y-4 w-1/2'>
       <h1 className='text-2xl lg:text-5xl font-bold text-white'>Book Your Appointment with Ease</h1>
        <p className='text-white text-md lg:text-xl'>Experience seamless scheduling for all your wellness and beauty needs</p>

        <div className='flex  items-center space-x-6 space-y-20'>
            <div className='flex items-center space-x-4'>
                <Link  to='/appointment'  className='flex bg-white text-blue-500 md:font-bold py-1 lg:py-3 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in border border-white'> Book Appointment <ArrowRight /></Link>
                <Link to='/calendar' className='bg-white text-blue-500 md:font-bold py-1 lg:py-3 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300 ease-in border border-white'>View Calendar</Link>
            </div>
        </div>
      </div>
      </div>
     
    </div>
   
   <div className='container mx-auto'>
    <WhyChose/>
     </div>
        <Works/>
    <div className='container mx-auto mt-10 my-10'>
      <NewLatter/>
    </div>
    </div>
    

  )
}

export default HomePage
