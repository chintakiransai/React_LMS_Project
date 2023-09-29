import {configureStore} from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import courseSliceReducer from './slices/courseSlice'

const store = configureStore({reducer:{auth:authReducer,course:courseSliceReducer},
                middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
                devTools:true})

export default store