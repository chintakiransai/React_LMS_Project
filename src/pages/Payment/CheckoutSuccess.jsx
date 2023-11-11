import { useEffect } from "react"
import { AiFillCheckCircle } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import HomeLayout from "../../layouts/HomeLayout"
import { userDetails } from "../../redux/slices/authSlice"


function CheckoutSuccess() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function onload() {
        await dispatch(userDetails())
    }
    
    useEffect(()=> {
        onload()
    },[])

    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex justify-center items-center">
                <section className="w-[280px] h-[380px] mt-20 shadow-[0_0_10px_black] rounded-lg text-white relative flex flex-col justify-center items-center">
                    <h1 className="w-full text-2xl font-semibold bg-green-500 text-white text-center py-2 rounded-tl-lg rounded-tr-lg absolute top-0">
                        Payment Successful
                    </h1>
                    <div className="space-y-2">
                        <p className="text-xl font-semibold">Welcome to pro bundle</p>
                        <p>Now enjoy all premium content</p>
                        <p className="flex justify-center items-center text-5xl text-green-500"><AiFillCheckCircle/></p>
                    </div>
                    <button onClick={()=>{navigate('/courses')}} 
                        className="w-full text-2xl font-semibold bg-green-500 hover:bg-green-700 transition-all ease-in-out text-white text-center py-2 rounded-bl-lg rounded-br-lg absolute bottom-0">
                        Go to dashboard
                    </button>
                </section>
            </main>
        </HomeLayout>
    )
}

export default CheckoutSuccess