import { useEffect } from "react"
import toast from "react-hot-toast"
import { BiRupee } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"

import HomeLayout from "../../layouts/HomeLayout"
import { createSubscription, razorpayKey, verifySubscription } from "../../redux/slices/razorpaySlice"

function Checkout() {
    const dispatch =useDispatch()

    const userData = useSelector((state)=>state?.auth?.data)

    const razorpay_Key = useSelector((state)=>state.razorpay.key)
    const subscription_id = useSelector((state)=>state.razorpay.subscription_id)

    const paymentDetails = {
            razorpay_payment_id:"",
            razorpay_subscription_id:"",
            razorpay_signature:"",
    }
    async function subscriptionHandler(e) {
        e.preventDefault()
        if(!razorpay_Key || !subscription_id ) {
            toast.error("razorpay key or subscription are not available")
            return
        }
        const options = {
            key: razorpay_Key,
            subscription_id:subscription_id,
            amount: 49900, 
            currency: 'INR',
            name: 'LMS privited Limited',
            description: 'Test Transaction',
            handler: async function(response) {
                paymentDetails.razorpay_payment_id= response.razorpay_payment_id;
                paymentDetails.razorpay_subscription_id=response.razorpay_subscription_id;
                paymentDetails.razorpay_signature=response.razorpay_signature;

                await dispatch(verifySubscription(paymentDetails))
                
            },
            prefill: {
              name: userData.name,
              email: userData.email,
            },
            notes: {
              address: 'Razorpay Corporate Office',
            },
            theme: {
              color: '#3399cc',
            },
          };
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    async function getKeys() {
        await dispatch(razorpayKey())
        await dispatch(createSubscription())
}

    useEffect(()=>{
        getKeys()
    },[])

    
    return (
        <HomeLayout>
            <form onSubmit={subscriptionHandler} noValidate
                className="min-h-[90vh] flex justify-center items-center">
                <section className="w-[280px] h-[400px] mt-20 shadow-[0_0_10px_black] rounded-lg text-white relative">
                    <h1 className="text-xl font-semibold py-3 bg-blue-500 rounded-tl-lg rounded-tr-lg text-center ">
                        Subscription Bundle
                    </h1>
                    <div className="my-4 px-1 text-center">
                        <p>
                            This purchase will allow you to access all the available courses
                            of our platform for
                        <span className="text-blue-500 font-semibold"> 1 year duration </span>
                        All the existing and new launched courses will be available to you
              in this subscription bundle
                        </p>
                        <p className="flex justify-center items-center font-bold text-2xl gap-1 my-4">
                            <BiRupee /> 499 only
                        </p>
                        <div className="text-gray-400">
                            <p>100% refund at cancellation</p>
                            <p>Terms & Condition Apply*</p>
                        </div>
                    </div>
                    <button className="absolute bottom-0 w-full text-lg font-semibold py-2 bg-blue-500 hover:bg-blue-600 transition-all ease-in-out rounded-bl-lg rounded-br-lg text-center">
                        Buy Now
                    </button>
                </section>
            </form>
        </HomeLayout>
    )
}

export default Checkout