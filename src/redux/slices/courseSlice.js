import { createSlice } from "@reduxjs/toolkit";

const initialState = {courseList: []}

const courseSlice = createSlice({name:"course",initialState,reducers:{}})


export default courseSlice.reducer