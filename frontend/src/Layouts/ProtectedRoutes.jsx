import { Navigate } from "react-router-dom";

export const ProtectedRoutes=({children})=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(!user || user?.role !== "admin"){
        return <Navigate to="/login"/>
    }
    return children;
}