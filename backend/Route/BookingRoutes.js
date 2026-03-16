import express from 'express';
import { ConfirmBook, createBooking, getBookings, getSlots, todayBooking } from '../controller/BookingController.js';
import { AdminStatistic } from '../controller/AdminDashboard.js';
const BookingRoutes=express.Router();
BookingRoutes.post('/create', createBooking)
BookingRoutes.get('/getall', getBookings)
BookingRoutes.get('/slots', getSlots)
// Admin Routes
BookingRoutes.get("/admin/stats", AdminStatistic)
BookingRoutes.get("/admin/today/", todayBooking);
BookingRoutes.patch("/admin/today/:id", ConfirmBook);

export default BookingRoutes