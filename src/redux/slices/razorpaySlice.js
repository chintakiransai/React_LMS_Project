import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../config/axiosInstance"


const initialState = {
    key: "",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: [],
}


export const razorpayKey = createAsyncThunk('razorpay/razorpayKey',async ()=> {
    try {
        const response = axiosInstance.get('payment/razorpayKey')
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const createSubscription = createAsyncThunk('razorpay/subcription',async ()=> {
    try {
        const response = axiosInstance.post('payment/subscription')
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const verifySubscription = createAsyncThunk('razorpay/verifySubcription',async (paymentDetail)=> {
    try {
        const response = axiosInstance.post('payment/verify', {
            razorpay_payment_id:paymentDetail.razorpay_payment_id,
            razorpay_subscription_id:paymentDetail.razorpay_subscription_id,
            razorpay_signature:paymentDetail.razorpay_signature,
        })
        toast.promise(response,{
            loading:"Please wait verifying payment",
            success: (data)=> {
                return data?.data?.message
            },
            error:"Failed to verify payment"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const cancelSubscription = createAsyncThunk('razorpay/cancelSubcription',async ()=> {
    try {
        const response = axiosInstance.post('payment/unSubscription')
        toast.promise(response,{
            loading:"Please wait unsubscribing",
            success: (data)=> {
                return data?.data?.message
            },
            error:"Failed to unsubscribed"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const allPayments = createAsyncThunk('razorpay/allPayments',async ()=> {
    try {
        const response = axiosInstance.get('payment/payments?count=100')
        toast.promise(response,{
            loading:"Please wait unsubscribing",
            success: (data)=> {
                return data?.data?.message
            },
            error:"Failed to unsubscribed"
        })
        return await response
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})


const razorpaySlice = createSlice({name:"razorpay",
                                    initialState,
                                    reducers:{},
                                    extraReducers : (builder) => {
                                        builder
                                        .addCase(razorpayKey.fulfilled,(state,action)=> {
                                            state.key = action?.payload?.data?.key
                                        })
                                        .addCase(createSubscription.fulfilled,(state,action)=> {
                                            state.subscription_id = action?.payload?.data?.user?.subscription.id
                                        })
                                        .addCase(verifySubscription.fulfilled,(state,action)=> {
                                            state.isPaymentVerified = action?.payload?.data?.success
                                        })
                                        .addCase(allPayments.fulfilled,(state,action)=> {
                                            state.allPayments = action?.payload?.data?.allPayments
                                            state.monthlySalesRecord = action?.payload?.data?.monthlySalesRecord
                                            state.finalMonths = action?.payload?.data?.finalMonths
                                        })                                     
                                    }
})


export default razorpaySlice.reducer