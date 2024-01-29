import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../config/axiosInstance"

const initialState = {
    Lectures:[]
}

export const createLecture = createAsyncThunk('/lecture/createLecture', async (inputUser)=> {
    try {
        const data = new FormData()
        data.append("title",inputUser.title)
        data.append("description",inputUser.description)
        data.append("lecture",inputUser.lecture)
        const response = axiosInstance.post(`/course/${inputUser.id}`,data)
        toast.promise(response,{
            loading:"please wait Creating lecture",
            success:(data)=> {
                return data?.data?.message
            },
            error:"Failed to create the lecture"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


export const deleteLecture = createAsyncThunk('/lecture/deleteLecture', async (data)=> {
    try {
        const response = axiosInstance.delete(`/course?courseId=${data.courseId}&lectureId=${data.lectureId}`)
        toast.promise(response,{
            loading:"please wait deleting lecture",
            success:(data)=> {
                return data?.data?.message
            },
            error:"Failed to delete the lecture"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


export const getLectures = createAsyncThunk('/lecture/getLecture', async (courseId)=> {
    try {
        const response = axiosInstance.get(`/course/${courseId}`)
        toast.promise(response,{
            loading:"please wait fetching the lectures",
            success:(data)=> {
                return data?.data?.message
            },
            error:"Failed to fetch the lectures"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


const lectureSlice = createSlice({
                        name:'lecture',
                        initialState,
                        reducers:{},
                        extraReducers: (builder) => {
                            builder.addCase(createLecture.fulfilled,(state,action)=> {
                                state.Lectures = action?.payload?.data?.Lecture
                            })
                            .addCase(deleteLecture.fulfilled,(state,action)=> {
                                state.Lectures = action?.payload?.data?.Lecture
                            })
                            .addCase(getLectures.fulfilled,(state,action)=> {
                                state.Lectures = action?.payload?.data?.Lectures
                            })
                        }
})


export default lectureSlice.reducer