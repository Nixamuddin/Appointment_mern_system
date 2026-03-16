import {google} from "googleapis"
const auth=new google.auth.GoogleAuth({
      keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/calendar"]
})

const calendar=google.calendar({
  auth,
  version:"v3"})

  export const createEvent=async(appointment)=>{
   const event={
   summary: "New Appointment",
   location: "Online",
   description: `${appointment.name} ${appointment.email} ${appointment.phone} ${appointment.service} ${appointment.date} ${appointment.time}`,
   start: {
        dateTime: appointment.startTime,
      timeZone: "Asia/Riyadh"
   }   
   , 
   attendees:
   [
     {

    email:appointment.email
   }
   ],
   
   };
   await calendar.events.insert({
     calendarId:"primary",
     resource:event
   })
  }

  export default createEvent

