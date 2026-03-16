import express from 'express';
import {createService, deleteServices, getAllServices, getSingleServices, updatedServices} from './../controller/ServiceController.js'
const ServiceRoutes=express.Router();
ServiceRoutes.get("/getall",getAllServices);
ServiceRoutes.get("/get/:id",getSingleServices);
ServiceRoutes.post("/create",createService);
ServiceRoutes.put("/update/:id",updatedServices);
ServiceRoutes.delete("/delete/:id",deleteServices);
export default ServiceRoutes