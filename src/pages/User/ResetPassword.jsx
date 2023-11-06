import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link,useNavigate, useParams } from "react-router-dom";

import { isPassword } from "../../helpers/regexMatchers";
import HomeLayout from "../../layouts/HomeLayout";
import { resetPassword } from "../../redux/slices/authSlice";


function ResetPassword() {
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const {resetToken} = useParams()

    const [password,setPassword] = useState("")

    async function submitHandler(e) {
        e.preventDefault()
        if(!password) {
            toast.error("Please enter password")
            return
        }
        if(!isPassword(password)) {
            toast.error("Contains at least 8 characters long, one alphabetic character (uppercase or lowercase), one digit (0-9) and one special characters")
            return
        }
 
        const response = await dispatch(resetPassword({resetToken,password}))
        if(response?.payload?.data?.success) {
            navigate('/signin')
        }
    }

    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex justify-center items-center">
                <form onSubmit={submitHandler} noValidate
                className="w-[320px] flex flex-col items-center my-10 gap-4 px-4 py-8 shadow-[0_0_10px_black] rounded-lg">
                    <h2 className="text-3xl font-semibold">Reset password</h2>
                    <input className="bg-transparent border border-white py-1"
                    type="password" 
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value = {password}
                    placeholder=" Enter your password"
                    size="30"
                    required />
                    <Link to="/Signin">
                            <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                                <AiOutlineArrowLeft /> Back to Login
                            </p>
                    </Link>
                    <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-600 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
                        Reset Password
                    </button>
                </form>
            </main>
        </HomeLayout>
    )
}

export default ResetPassword