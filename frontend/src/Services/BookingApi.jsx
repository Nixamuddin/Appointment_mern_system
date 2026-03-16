import { AxiosInstance } from "./Apis";

export const getSlots=async(date)=>{
    try{
        const response=await AxiosInstance.get(`/booking/slots`);
        console.log(response?.data)
        return response.data
    }
    catch(error){
        console.log("Error While Fetching Slots", error);
    }
}

export const createBookings=async(data)=>{
    try{
        const response=await AxiosInstance.post('/booking/create',data);
        return response.data
    }
    catch(error){
        console.log("Error While Creating Booking", error);
    }
}

export const getBookings=async()=>{
    try{
        const response=await AxiosInstance.get('/booking/getall');
        return response.data
    }
    catch(error){
            console.log("Error While Fetching Bookings", error);
    }
}

// admin stats
export const getAdminStats=async()=>{
    try{
        const response=await AxiosInstance.get('/booking/admin/stats');
        console.log("Status for admin",response?.data)
        return response.data
    }
    catch(error){
        console.log("Error While Fetching Admin Stats", error);
    }
}

export const getBookingsByDate=async()=>{
    try{
        const response=await AxiosInstance.get('/booking/admin/today');
        return response.data
    }
    catch(error){
        console.log("Error While Fetching Bookings", error);
    }
}
export const getTodayBookings=async({id, status})=>{
try{
    const response=await AxiosInstance.patch(`/booking//admin/today/${id}`, {status});
    console.log(response?.data)
    return response.data;
}
catch(error){
    console.log("Error While Fetching Bookings", error);
}
}