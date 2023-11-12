import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstance";

const initialState = {courseList: []}

export const allCourses = createAsyncThunk('/course/allCourses',async ()=> {
    try 
    {
    const response = axiosInstance.get('/course')
    toast.promise(response, {
        loading:"loading courses data",
        success:"successfully fetched the course details",
        failed:"failed to get the courses"
    })
    return await response
    } catch (error) {
            toast.error(error?.response?.data?.message)
    }
})


export const createCourses = createAsyncThunk('/course/create',async (data)=> {
    try 
    {
    const response = axiosInstance.post('/course',data)
    toast.promise(response, {
        loading:"Please wait creating courses",
        success:"successfully created the course",
        failed:"failed to create the courses"
    })
    return await response
    } catch (error) {
            toast.error(error?.response?.data?.message)
    }
})


const courseSlice = createSlice({name:"course",initialState,reducers:{},
                                    extraReducers: (builder) => {
                                        builder.addCase(allCourses.fulfilled,(state,action)=> {
                                            if(action?.payload)
                                            {
                                                state.courseList = [...action.payload.data.courses]
                                            }     
                                        })
                                    }                               
                                })


export default courseSlice.reducer