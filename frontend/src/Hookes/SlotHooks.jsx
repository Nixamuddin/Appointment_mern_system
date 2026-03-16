import { useState } from "react";
import { AxiosInstance } from "../Services/Apis";
export const useSlot=()=>{
    const [slots,setSlots]=useState([]);

 const getSlotByDate=async(date)=>{
    try{
        const response=await AxiosInstance.get(`/booking/slots?date=${date}`)
        console.log(response?.data)
        setSlots(response?.data?.data)
    }
    catch(error){
        console.log("Error While Fetching Slots",error);
    }
 }
    return {slots,getSlotByDate};
}


