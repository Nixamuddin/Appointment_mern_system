import { AxiosInstance } from "./Apis";

export const CreateProvider=async(data)=>{
    try{
        const response=await AxiosInstance.post('/providers/create',data);
        return response.data
    }
    catch(error){
        console.log("Error While Creating Provider",error);
    }
}

export const UpdateProvider=async(id,data)=>{
    try{
        const response=await AxiosInstance.put(`/providers/update/${id}`,data);
        return response.data
    }
    catch(error){
        console.log("Error While Updating Provider",error);
    }
}

export const DeleteProvider=async(id)=>{
    try{
        const response=await AxiosInstance.delete(`/providers/delete/${id}`);
        return response.data
    }
    catch(error){
        console.log("Error While Deleting Provider",error);
    }
}

export const GetAllProviders=async()=>{
    try{
        const response=await AxiosInstance.get('/providers/getall');
        return response.data
    }
    catch(error){
        console.log("Error While Fetching Providers",error);
    }
}