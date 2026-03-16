import { GetAllProviders } from "../Services/ProviderApi"
import { useQuery } from "@tanstack/react-query"
export const useProvider=()=>{
    const {data,isLoading,isError,error}=useQuery({
        queryKey:["providers"],
        queryFn:GetAllProviders
    })

    return{providers:data,isLoading,isError,error}
}