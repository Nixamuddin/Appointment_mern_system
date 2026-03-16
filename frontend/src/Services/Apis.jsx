import axios from "axios";

export const AxiosInstance=axios.create({
    baseURL:'https://appointment-backend.onrender.com/api/v1',
    withCredentials:true
});

AxiosInstance.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token');
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config

},
(err)=>{
    return Promise.reject(err)
}

)