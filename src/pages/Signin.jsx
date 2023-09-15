import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import HomeLayout from "../layouts/HomeLayout"
import { userlogin } from "../redux/slices/authSlice"


function Signin() {
    
    const navigate = useNavigate()

    const [signinDetails,setSigninDetails]=useState({email:'',password:''})

function userInputHandler(e) {
    const {name,value}= e.target
    setSigninDetails({...signinDetails,[name]:value})
}

async function formSubmit(e)
{
    e.preventDefault()
    
}


    return (
        <HomeLayout>
            <div className='h-screen w-full flex justify-center items-center -my-8'>
                <form onSubmit={formSubmit} noValidate className='w-80 flex flex-col space-y-1 border border-white px-10 py-6'>
                    <h1 className='text-2xl text-center font-bold'>Login Page</h1>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            className='bg-transparent px-2 py-1 border border-white'
                            onChange={userInputHandler}
                            value={signinDetails.email}  
                            placeholder='Enter Your Email' 
                            name="email" 
                            id="email 
                            required" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password">Password</label>
                            <input 
                            type="password" 
                            className='bg-transparent px-2 py-1 border border-white mb-2'
                            onChange={userInputHandler}
                            value={signinDetails.password}  
                            placeholder='Enter Your Password' 
                            name="password" 
                            id="password 
                            required" />
                    </div>
                    <button className='text-lg text-white font-semibold bg-blue-500 rounded-sm py-1 px-2ransition-all ease-in-out duration-300 cursor-pointer'>Create account</button>
                    <p className='text-center mt-2'>
                        Donot have a Account?<Link to="/signup" className='text-blue-500'>Signup</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Signin