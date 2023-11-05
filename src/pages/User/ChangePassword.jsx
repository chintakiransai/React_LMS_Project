import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {Link, useNavigate } from "react-router-dom";

import { isPassword } from "../../helpers/regexMatchers";
import HomeLayout from "../../layouts/HomeLayout";
import { changePassword } from "../../redux/slices/authSlice";


function ChangePassword() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data,setData] = useState({oldPassword:"",newPassword:""})

    function inputHandler(e) {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    async function formSubmit(e) {
        e.preventDefault()
        if(!data.oldPassword || !data.newPassword) {
            toast.error("Please fill the all details")
            return
        }
        if(!isPassword(data.newPassword)) {
            toast.error("Contains at least 8 characters long, one alphabetic character (uppercase or lowercase), one digit (0-9) and one special characters")
            return
        }
        const response = await dispatch(changePassword(data))
        if(response?.payload?.data?.success) {
            setData({oldPassword:"",newPassword:""})
            navigate('/profile')
            console.log(response);
        }
    }

    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex justify-center items-center mt-16">
                <form onSubmit={formSubmit} noValidate className="w-[320px] flex flex-col items-center my-10 gap-4 px-4 py-8 shadow-[0_0_10px_black] rounded-lg">
                            <h3 className="text-2xl font-bold">Password Change</h3>
                            <div>
                                <label className="text-lg font-semibold mb-1"
                                htmlFor="oldPassword">
                                    <h3 >Enter Old Password</h3>
                                </label>
                                <input className=" bg-transparent border border-white"
                                type="password"
                                onChange={inputHandler} 
                                name="oldPassword" 
                                id="oldPassword" 
                                value={data.oldPassword}
                                required 
                                size='28'/>
                                <label className="text-lg font-semibold mb-1"
                                htmlFor="newPassword">
                                    <h3>Enter New Password</h3>
                                </label>
                                <input className=" bg-transparent border border-white"
                                type="password"
                                onChange={inputHandler} 
                                name="newPassword" 
                                id="newPassword"
                                value={data.newPassword}
                                required 
                                size='28'/>
                            </div>
                            <Link to="/profile">
                                <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                                <AiOutlineArrowLeft /> Back to Profile
                                </p>
                            </Link>

                            <button className="block bg-blue-500 hover:bg-blue-600 text-white text-lg transition-all ease-in-out duration-300 py-1 px-16 rounded-sm ">Submit</button>
                </form>
            </main>
        </HomeLayout>
    )
}


export default ChangePassword