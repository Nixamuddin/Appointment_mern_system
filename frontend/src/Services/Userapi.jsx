import { AxiosInstance } from "./Apis";

export const registerUser=async(data)=>{
    try{
        const response=await AxiosInstance.post("/auth/register", data);
        return response.data;
    }
    catch(error){
        console.log("Error while registering user", error)
    }
}

export const LoginUser=async(data)=>{
    try{
        const response=await AxiosInstance.post("/auth/login", data);
        return response.data;
    }
    catch(error){
        console.log("Error while logging in User ", error)
    }
}