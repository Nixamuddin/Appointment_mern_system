import { AxiosInstance } from "./Apis";

export const createService = async (data) => {
  try {
    const response = await AxiosInstance.post("/services/create", data);
    return response.data;
  } catch (error) {
    console.log("Error While Creating Service", error);
    throw error;
  }
};

export const getAllServices = async () => {
  try {
    const response = await AxiosInstance.get("/services/getall");
    console.log(response?.data)
    return response?.data
  } catch (error) {
    console.log("Error While Fetching Services", error);
    throw error;
  }
};

export const deleteService = async (id) => {
  try {
    const response = await AxiosInstance.delete(`/services/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error While Deleting Service", error);
    throw error;
  }
};

export const updateService = async (id, data) => {
  try {
    const response = await AxiosInstance.put(`/services/update/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("Error While Updating Service", error);
    throw error;
  }
};