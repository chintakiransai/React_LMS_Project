import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../config/axiosInstance"

const initialState = {
    allUsersCount: 0,
    subscribedCount: 0
}

export const getStats = createAsyncThunk('/stats/get', async ()=> {
        try {
            const response = axiosInstance.get('contact/user/stats')
            toast.promise(response,{
                loading:"Getting the stat data....",
                success:(data)=> {
                    return data?.data?.message
                },
                error:"Failed to load stata data"
            })
            return await response
        }
        catch(error) {
            toast.error(error?.response?.data?.data)
        }
})

const statSlice = createSlice({
                    name:"stat",
                    initialState,
                    reducers:{},
                    extraReducers:(builder) => {
                            builder.addCase(getStats.fulfilled,(state,action)=>{
                                state.allUsersCount = action?.payload?.data?.allUsersCount
                                state.subscribedCount = action?.payload?.data?.subscribedCount
                            })
                    }
                })



export default statSlice.reducer