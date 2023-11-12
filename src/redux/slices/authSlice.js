import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";

const initialState = {
    isLoggedIn : localStorage.getItem("isLoggedIn") || false,
    role : localStorage.getItem("role") || "",
    data : JSON.parse(localStorage.getItem("data")) || {}
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

export const changePassword =createAsyncThunk("auth/password",async (userPassword)=>
{
    try {
    const response = axiosInstance.post('/user/changePassword',userPassword)
    toast.promise(response,{
        loading:"Please await User password is changing",
        success: (data)=> {
            return data?.data?.message
        },
        error:"Failed to change password"
    })
    return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const forgotPassword =createAsyncThunk("auth/forgotPassword",async (email)=>
{
    try {
    const response = axiosInstance.post('/user/reset',{email})
    toast.promise(response,{
        loading:"Please await sending email",
        success: (data)=> {
            return data?.data?.message
        },
        error:"Failed to sent email"
    })
    return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const resetPassword =createAsyncThunk("auth/forgotPassword",async (data)=>
{
    try {
    const response = axiosInstance.post(`/user/reset/${data.resetToken}`,{password:data.password})
    toast.promise(response,{
        loading:"Please await reseting password",
        success: (data)=> {
            return data?.data?.message
        },
        error:"Failed to reset password"
    })
    return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const profileUpdate =createAsyncThunk("auth/editProfile",async (data)=>
{
    try {
    const response = axiosInstance.put('/user/updateProfile',data)
    toast.promise(response,{
        loading:"Please await User profile is updating!",
        success: (data)=> {
            return data?.data?.message
        },
        error:"Failed update profile"
    })
    return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const userDetails = createAsyncThunk("auth/userDetails", async () => {
    try {
    const response = axiosInstance.get('/user/userDetails')
    toast.promise(response,{
        loading:"Please getting user detailst",
        success:(data)=> {
            return data?.data?.message
        }
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
                                        state.isLoggedIn = action?.payload?.data?.success
                                        state.role = action?.payload?.data?.user?.role
                                        state.data = action?.payload?.data?.user
                                        localStorage.setItem("isLoggedIn",  action.payload.data.success)
                                        localStorage.setItem("role",action.payload.data.user.role)
                                        localStorage.setItem("data",JSON.stringify(action.payload.data.user))                                        
                                    })
                                    .addCase(userlogout.fulfilled,(state) => {
                                        localStorage.clear()
                                        state.isLoggedIn = false
                                        state.role = {}
                                        state.data = ""
                                    })
                                    .addCase(profileUpdate.fulfilled,(state,action)=> {
                                        state.isLoggedIn = action?.payload?.data?.success
                                        state.role = action?.payload?.data?.user?.role
                                        state.data = action?.payload?.data?.user
                                        localStorage.setItem("isLoggedIn",  action.payload.data.success)
                                        localStorage.setItem("role",action.payload.data.user.role)
                                        localStorage.setItem("data",JSON.stringify(action.payload.data.user))                                       
                                    })
                                    .addCase(userDetails.fulfilled,(state,action)=> {
                                        state.isLoggedIn = action?.payload?.data?.success
                                        state.role = action?.payload?.data?.user?.role
                                        state.data = action?.payload?.data?.user
                                        localStorage.setItem("isLoggedIn",  action.payload.data.success)
                                        localStorage.setItem("role",action.payload.data.user.role)
                                        localStorage.setItem("data",JSON.stringify(action.payload.data.user))                                       
                                    })
                                }
                            })

export default authSlice.reducer