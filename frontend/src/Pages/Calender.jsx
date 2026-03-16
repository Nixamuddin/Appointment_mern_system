import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useBooking } from "../Hookes/BookingHooks";

const localizer = momentLocalizer(moment);
const Calender = () => {
    const {bookingData} = useBooking();
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
    
  return (
    <div className="mt-30 container mx-auto border border-gray-200 shadow rounded-md" style={{ height: "500px" }}>
      <Calendar 
      style={{textAlign:"center"}}
      className={`text-gray-400 font-bold font-sans text-sm`}
        localizer={localizer}
        events={events }
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Calender;