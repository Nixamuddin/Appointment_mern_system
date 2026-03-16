import {configureStore} from "@reduxjs/toolkit"
import AuthSlice from "../AuthSlice/AuthSlice"
 export const AuthStore=configureStore({
    reducer:{
        user:AuthSlice
    }
 })