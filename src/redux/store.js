import {configureStore} from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import courseSliceReducer from './slices/courseSlice'
import razorpaySliceReducer from './slices/razorpaySlice'

const store = configureStore({reducer:{auth:authReducer,course:courseSliceReducer,razorpay:razorpaySliceReducer},
                middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
                devTools:true})

export default store