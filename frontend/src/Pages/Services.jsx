
import {Timer} from 'lucide-react'
import { useService } from '../Hookes/ServiceHooks';
const Services = ({setStep, setSelectService}) => {
  const {services,isLoading,isError,error}=useService();
   if(isLoading) return (<h1> Loading</h1>) 
  return (
    <div className='mx-auto container'>
       <h1 className='font-semibold text-2xl text-gray-600'>Select a Service</h1>
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
        {
            services?.data.map((service)=>(
                <div onClick={() => {setStep(2); setSelectService(service)}} key={service._id} className='bg-white px-5 py-5 shadow-md border border-gray-200 rounded-md text-center space-y-2 hover:scale-105 transition duration-300 ease-in '>
        <h2 className='font-semibold text-lg'>{service.heading}</h2>
        <p className='text-gray-600'>{service.description}</p>
        <div className='flex justify-between items-center pt-5'>
                <p className='text-gray-600 text-sm font-bold flex items-center space-x-1'> <span><Timer /></span> {service.time}</p>
        <p className='text-blue-600 text-sm font-bold'>Price: ${service.price}</p>
        </div>

      </div>
            ))
        }
      
       </div>
    </div>
  )
}

export default Services
