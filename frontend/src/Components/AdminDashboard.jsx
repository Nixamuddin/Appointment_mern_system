import {Calendar1, CheckLine, Clock, DollarSign, Mail, Phone, User } from 'lucide-react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Activity } from 'lucide-react'
import { useState } from 'react'
import { useBooking } from '../Hookes/BookingHooks'
import {useSelector} from "react-redux"
import { AxiosInstance } from '../Services/Apis';
const localizer = momentLocalizer(moment);
const AdminDashboard = () => {
    const [activeTab,setActiveTab]=useState("Calendar")
    const [status,setStatus]=useState("pending")
    const {bookingData, adminStats, todayBookings,todayBookingData}=useBooking();
       const events = bookingData?.data.map((booking) => {
        const starts =new Date(booking.date);
        const ends = new Date(starts.getTime() + 30 * 60 * 1000);
     return {
        id: booking._id,
        title: `${booking?.fullname}- ${booking.time} ${booking.time >= "12" ?"PM" :"AM"}`,
        start: starts,
        end: ends,
    }
    });
    const handleConfirm = async (id) => {
        try {
            const response = await AxiosInstance.patch(`/booking/admin/today/${id}`, { status: "confirmed" });
            return response.data;
        }
        catch (error) {
         console.log("Error While Confirming Booking ", error); 
        } 
    }
  
    const handleCancel = async (id) => {
        try {
            const response = await AxiosInstance.patch(`/booking/admin/today/${id}`, { status: "cancelled" });
            return response.data;
        }
        catch (error) {
         console.log("Error While Canceling Booking ", error); 
        } 
    }

   const user = useSelector((state) => state?.user?.user);
  return (
    <div className='min-h-screen p-6 container mx-auto'>
     <h1 className='text-3xl font-bold pt-20 text-gray-600'>Admin Dashboard</h1>
        <p className='text-gray-500 font-semibold'>Manage your appointments and business details</p>
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6'>
            <div className='bg-blue-500 p-5 rounded-lg shadow  border border-gray-200 text-white'>
               <div className='flex justify-between items-center mb-4'>
                <Calendar1 size={30} className='text-gray-600' />
                 <Activity className='text-gray-600' />
                </div>
                <h2 className='text-sm font-bold  '>Total Appointments</h2>
                <p className='text-3xl font-bold  mt-2'>{adminStats?.data?.totalAppointments ||0}</p>
                <p className='text-sm'>This Month</p>
            </div>
             <div className='bg-green-500 p-5 rounded-lg shadow  border border-gray-200 text-white'>
               <div className='flex justify-between items-center mb-4'>
                <DollarSign size={30} className='text-gray-600' />
                 <Activity className='text-gray-600' />
                </div>
                <h2 className='text-sm font-bold  '>Total Revenue</h2>
                <p className='text-3xl font-bold  mt-2'> $ {adminStats?.data?.TotalRevenue?.map((item) => item.totalAmount) ||0}</p>
                <p className='text-sm'>This Month</p>
            </div>
             <div className='bg-yellow-500 p-5 rounded-lg shadow  border border-gray-200 text-white'>
               <div className='flex justify-between items-center mb-4'>
                <Clock size={30} className='text-gray-600' />
                 <Activity className='text-gray-600' />
                </div>
                <h2 className='text-sm font-bold  '>Panding</h2>
                <p className='text-3xl font-bold  mt-2'>{adminStats?.data?.totalPanding ||0}</p>
                <p className='text-sm'>This Month</p>
            </div>
             <div className='bg-blue-400 p-5 rounded-lg shadow  border border-gray-200 text-white'>
               <div className='flex justify-between items-center mb-4'>
                <CheckLine size={30} className='text-gray-600' />
                 <Activity className='text-gray-600' />
                </div>
                <h2 className='text-sm font-bold  '>Confirmed</h2>
                <p className='text-3xl font-bold  mt-2'>{adminStats?.data?.totalConfirm||0}</p>
                <p className='text-sm'>This Month</p>
            </div>
    </div>
      <div className='flex lg:w-md mt-10 bg-gray-50  ps-5 text-gray-600 py-1 font-semibold shadow  border border-gray-200 text-black  gap-4'>
             <button onClick={()=>setActiveTab("Calendar")}
              className={activeTab==="Calendar"?"bg-gray-100 text-black shadow px-2":"bg-gray-50 text-gray-600"}  >View Calendar</button>
             <button onClick={()=>setActiveTab("today")} className={activeTab==="today"?"bg-gray-100 text-black shadow px-2":"bg-gray-50 text-gray-600"}>Today Appointments</button>
             <button onClick={()=>setActiveTab("statistics")} className={activeTab==="statistics"?"bg-gray-100 text-black shadow px-2":"bg-gray-50 text-gray-600"}>Statistics</button>
            </div>

        <div className='mt-6'>

        {activeTab==="Calendar" && 
        <div className="container mx-auto border border-gray-200 shadow rounded-md" style={{ height: "500px" }}>
              <Calendar 
              style={{textAlign:"center"}}
              className={`text-gray-400 font-bold font-sans text-sm`}
                localizer={localizer}
                events={events }
                startAccessor="start"
                endAccessor="end"
                views={["month", "week", "day"]}
                showMultiDaytoolbar={false}
              />
            </div>}
        {activeTab==="today" && <div className=' text-gray-600'>
           <div className='grid grid-cols md:grid-cols-3 gap-4'>
            {todayBookingData?.data?.map((item,index)=>(<div key={index} className='bg-gray-50 p-5 rounded-lg shadow  boder-l  border border-gray-200'>
               <div className='flex items-center gap-2 '>
                 <p className='text-md font-semibold'> {item?.fullname}</p>
                 <p className='bg-yellow-400 rounded-md text-center  text-orange-600 text-sm'>{item?.status}</p>
               </div>
                <div>
                  <p className='text-sm  text-gray-600'>
                        {item?.service?.heading}
                  </p>
             
                </div>
                <div className='flex flex-col items-start mt-3'>
                  {new Date(item?.date).toDateString() || item?.date}
                  <p className='flex items-center gap-1 text-sm py-2'><span><Clock size={18} color='red' /></span> Time: {item?.time}</p>
                  <p className='flex items-center gap-1 text-sm py-2'><span><User size={18} color='blue' /></span> {item?.provider?.name}</p>
                  <p className='flex items-center gap-1 text-sm py-2'><span><Phone size={18} color='green' /></span> {item?.phone}</p>
                  <p className='flex items-center gap-1 text-sm'><span><Mail size={18} color='red' /></span> {item?.email}</p>
                </div>
                <div className='flex gap-6 mt-4'>
                <button onClick={()=>handleConfirm(item?._id)} className='bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600'>Confirm</button>
                <button onClick={()=>handleCancel(item?._id)} className='bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600'>Cancel</button>
                </div>
              </div>))}
            </div>
            </div>}

        {activeTab==="statistics" && <h1 className='text-2xl font-bold text-gray-600'>Statistics</h1>}
        </div>
    </div>
  )
}

export default AdminDashboard
