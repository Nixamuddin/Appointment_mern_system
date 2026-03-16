import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import AuthRoutes from "./Route/AuthRoutes.js";
import { connect } from "./lib/Connection.js";
import ErrorMiddleware from "./Utils/ErrorMiddleware.js";
import ProviderRoutes from "./Route/ProviderRoutes.js";
import ServiceRoutes from "./Route/ServiceRoutes.js";
import BookingRoutes from "./Route/BookingRoutes.js";
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
dotenv.config();
app.use(cors({origin:"*", credentials:true}));
const __dirname=path.resolve();
app.use("/api/v1/auth",AuthRoutes)
app.use("/api/v1/providers",ProviderRoutes);
app.use("/api/v1/services",ServiceRoutes);
app.use("/api/v1/booking", BookingRoutes);
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
})
app.use(ErrorMiddleware); 
const port=process.env.PORT || 8080;
app.listen(process.env.PORT,()=>{
    connect();
    console.log(`Server is running on port ${process.env.PORT}`);
})
