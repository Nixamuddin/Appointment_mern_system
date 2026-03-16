import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "../Services/ServicesApi";

export const useService = () => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["services"],
    queryFn: getAllServices
  });

  return {
    services: data,
    isLoading,
    isError,
    error
  };
};