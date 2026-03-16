import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { LoginUser, registerUser } from "../Services/Userapi";
export const useUser=()=>{
    const {mutateAsync:createUser}=useMutation({
        mutationKey:["user"],
        mutationFn:registerUser
    })
const {mutateAsync:loginUser}=useMutation({
    mutationKey:["login"],
    mutationFn:LoginUser
})

    return {createUser, loginUser}
}