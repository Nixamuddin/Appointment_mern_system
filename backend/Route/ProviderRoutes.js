import express from 'express';
import { createProvider, getProviders } from '../controller/ProviderController.js';

const ProviderRoutes=express.Router();
ProviderRoutes.get("/getall",getProviders);
ProviderRoutes.post("/create",createProvider);

export default ProviderRoutes