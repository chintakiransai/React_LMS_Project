import {configureStore} from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import courseSliceReducer from './slices/courseSlice'
import lectureSliceReducer from './slices/lectureSlice'
import razorpaySliceReducer from './slices/razorpaySlice'
import statSliceReducer from './slices/statSlice'

const store = configureStore({reducer:{auth:authReducer,course:courseSliceReducer,razorpay:razorpaySliceReducer,lecture:lectureSliceReducer,stat:statSliceReducer},
                middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
                devTools:true})

export default store