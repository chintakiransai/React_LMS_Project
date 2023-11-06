import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

import { isEmail } from "../../helpers/regexMatchers";
import HomeLayout from "../../layouts/HomeLayout";
import { forgotPassword } from "../../redux/slices/authSlice";


function ForgotPassword() {
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const [email,setEmail] = useState("")

    async function submitHandler(e) {
        e.preventDefault()
        if(!email) {
            toast.error("Please enter email")
            return
        }
        if(!isEmail(email)) {
            toast.error("Please enter validated email")
            return
        }

        const response = await dispatch(forgotPassword(email))
        if(response?.payload?.data?.success) {
            navigate('/signin')
        }
    }

    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex justify-center items-center">
                <form onSubmit={submitHandler} noValidate
                className="w-[320px] flex flex-col items-center my-10 gap-4 px-4 py-8 shadow-[0_0_10px_black] rounded-lg">
                    <h2 className="text-3xl font-semibold">Forgot password</h2>
                    <input className="bg-transparent border border-white py-1"
                    type="email" 
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value = {email}
                    placeholder=" Enter your Email"
                    size="30"
                    required />
                    <Link to="/Signin">
                            <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                                <AiOutlineArrowLeft /> Back to Login
                            </p>
                    </Link>
                    <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-600 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
                        Get Verification Link
                    </button>
                </form>
            </main>
        </HomeLayout>
    )
}


export default ForgotPassword
