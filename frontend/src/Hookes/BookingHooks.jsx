import { useMutation, useQuery } from "@tanstack/react-query"
import { createBookings, getAdminStats, getBookings, getBookingsByDate, getTodayBookings } from "../Services/BookingApi"
export const useBooking=()=>{
    const {mutate:createBooking}=useMutation({
        mutationFn:createBookings

    })
const {data:adminStats}=useQuery({
    queryKey:['admin-stats'],
    queryFn:getAdminStats
})
  const {data:bookingData}=useQuery({
    queryKey:['bookings'],
    queryFn:getBookings
  })

  const {data:todayBookingData}=useQuery({
    queryKey:["today-booking"],
    queryFn:getBookingsByDate  
  })
 const {mutate:todayBookings}=useMutation({
   queryKey:["today-booking"],
   mutationFn:getTodayBookings  
 })
    return {createBooking,adminStats, bookingData, todayBookings, todayBookingData}
}