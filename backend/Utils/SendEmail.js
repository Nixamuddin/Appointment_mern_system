import { Resend } from "resend";

export const sendAppointmentEmail=async(appointment)=>{
    const resend = new Resend(process.env.RESEND_KEY)

   try{
     const response=await resend.emails.send({
         from: 'Resend <onboarding@resend.dev>', 
      to: appointment.email,                        
      subject: "Your Appointment Details",
      html: `
        <h2>Appointment Confirmation</h2>
        <p>Hi ${appointment?.fullname},</p>
        <p>Your appointment is confirmed with the following details:</p>
        <ul>
          <li>Service: ${appointment.service.heading}</li>
          <li>Date: ${appointment?.date}</li>
          <li>Time: ${appointment?.time}</li>
          <li>Provider: ${appointment.provider.name}</li>
        </ul>
        <p>Thank you for booking with us!</p>
      `

    })
    console.log("Email sent successfully",response)
    return response
    
   }
   catch(error){
    console.log("Error While Sending Email",error);
   }

}