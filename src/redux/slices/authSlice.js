import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";

const initialState = {
    isLoggedIn : localStorage.getItem("isLoggedIn") || false,
    role : localStorage.getItem("role") || "",
    data : localStorage.getItem("data") || {}
}

export const createAccount = createAsyncThunk('auth/signup',async (data)=> {
    try {
        const response = axiosInstance.post('user/usercreate',data)
        toast.promise(response,{
            loading:"Please await User account is creating!",
            success:(data)=> {
                return data?.data?.message
            },
            error:"Failed to create User account"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const userlogin =createAsyncThunk("auth/login",async (data)=>
{
    try {
    const response = axiosInstance.post('/user/userlogin',data)
    toast.promise(response,{
        loading:"Please await User account is Authenicating!",
        success: (data)=> {
            return data?.data?.message
        },
        error:"Failed to login"
    })
    return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


export const userlogout = createAsyncThunk("auth/userlogout", async () => {
    try {
    const response = axiosInstance.get('/user/userlogout')
    toast.promise(response,{
        loading:"Please await User is logout",
        success:(data)=> {
            return data?.data?.message
        }
    })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


const authSlice = createSlice({name:"auth",initialState,reducers:{},
                                extraReducers: (builder) => {
                                    builder.addCase(userlogin.fulfilled,(state,action) => {
                                        state.isLoggedIn = true
                                        state.role = action?.payload?.data?.data?.role
                                        state.data = action?.payload?.data?.data
                                        localStorage.setItem("isLoggedIn", true)
                                        localStorage.setItem("role",action?.payload?.data?.data?.role)
                                        localStorage.setItem("data",JSON.stringify(action?.payload?.data?.data))                                        
                                    })
                                    .addCase(userlogout.fulfilled,(state) => {
                                        localStorage.clear()
                                        state.isLoggedIn = false
                                        state.role = {}
                                        state.data = ""
                                    })
                                }
                            })

export default authSlice.reducer