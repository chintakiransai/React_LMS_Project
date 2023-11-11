import { RxCrossCircled } from "react-icons/rx"
import { useNavigate } from "react-router-dom"

import HomeLayout from "../../layouts/HomeLayout"


function CheckoutFailure() {
    const navigate = useNavigate()
    return (
        <HomeLayout>
        <main className="min-h-[90vh] flex justify-center items-center">
            <section className="w-[280px] h-[380px] mt-20 shadow-[0_0_10px_black] rounded-lg text-white relative flex flex-col justify-center items-center">
                <h1 className="w-full text-2xl font-semibold bg-red-500 text-white text-center py-2 rounded-tl-lg rounded-tr-lg absolute top-0">
                 Payment Failed
                </h1>
                <div className="space-y-2 flex flex-col items-center">
                    <h3 className="text-xl font-semibold">Oops! Your Payment Failed</h3>
                    <p className="text-center">Please try it again as it can be a temporary issue</p>
                    <p className="flex justify-center items-center text-5xl text-red-500"><RxCrossCircled/></p>
                </div>
                <button onClick={()=>{navigate('/payment/checkout')}} 
                    className="w-full text-2xl font-semibold bg-red-500 hover:bg-red-700 transition-all ease-in-out text-white text-center py-2 rounded-bl-lg rounded-br-lg absolute bottom-0">
                    Revisit Payment
                </button>
            </section>
        </main>
    </HomeLayout>
    )
}

export default CheckoutFailure