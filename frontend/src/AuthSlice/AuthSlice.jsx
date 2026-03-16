import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,

}

const AuthSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload,
            localStorage.setItem("user",JSON.stringify(action.payload))
    },
    logout:(state)=>{
        state.user=null,
        localStorage.removeItem("user")
    }
    }


})

export const { login, logout }=AuthSlice.actions;
export default AuthSlice.reducer;