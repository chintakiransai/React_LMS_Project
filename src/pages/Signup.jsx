import { useState } from 'react'
import {toast} from "react-hot-toast"
import { BsPersonCircle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { isEmail, isPassword } from '../helpers/regexMatchers'
import HomeLayout from '../layouts/HomeLayout'
import { createAccount } from '../redux/slices/authSlice'

function Signup() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [signupDetails,setSignupDetails] = useState({name:'',email:'',password:'',avatar:''})
    const [previewImage,setPreviewImage] = useState(null)

    function imageHandler(e)
    {
        const uploadImage = (e.target.files[0])
        setSignupDetails({...signupDetails,avatar:uploadImage})
        setPreviewImage(URL.createObjectURL(uploadImage))
    }

    function userInputHandler(e) {
       const {name,value} = e.target
       setSignupDetails({...signupDetails,[name]:value})
    }
    
    async function formSubmit(e) {
        e.preventDefault()
        if(!signupDetails.name || !signupDetails.email || !signupDetails.password || !signupDetails.avatar)
        {
            toast.error("Please fill the all details")
            return
        }
        if(signupDetails.name.length < 5) {
            toast.error("Name should be more than 5 charaters")
            return
        }
        if(!isEmail(signupDetails.email)) {
            toast.error("Please Provided validated email")
            return
        }
        if(!isPassword(signupDetails.password)) {
            toast.error("Contains at least 8 characters long, one alphabetic character (uppercase or lowercase), one digit (0-9) and one special characters")
            return
        }

        const formData = new FormData()
        formData.append("name",signupDetails.name)
        formData.append("email",signupDetails.email)
        formData.append("password",signupDetails.password)
        formData.append("avatar",signupDetails.avatar)

        const response = await dispatch(createAccount(formData))
        console.log(response);
        if(response?.payload?.data?.success)
        {
            navigate('/signin')
            setSignupDetails({name:'',email:'',password:'',avatar:''})
        }
    }

    return (
        <HomeLayout>
            <div className='h-screen mt-16 w-full flex justify-center items-center -my-8'>
                <form onSubmit={formSubmit} noValidate className='w-80 flex flex-col space-y-1 border border-white px-10 py-6'>
                    <h1 className='text-2xl text-center font-bold'>Registration Page</h1>
                    <div>
                        <label htmlFor="avatar">
                            {previewImage ? 
                            (<img className='w-24 h-24 rounded-full m-auto' src={previewImage} alt="previewImage"/>) 
                            : 
                            (<BsPersonCircle className='w-24 h-24 rounded-full m-auto'/> )}</label>
                        <input 
                            className='hidden' 
                            type="file"
                            onChange={imageHandler} 
                            name="avatar" 
                            id="avatar" 
                            accept='.jpg, .jpeg, .png, .svg'
                            required />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className='bg-transparent px-2 py-1 border border-white'
                            onChange={userInputHandler}
                            value={signupDetails.name}
                            placeholder='Enter Your Name' 
                            name="name" 
                            id="name 
                            required" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            className='bg-transparent px-2 py-1 border border-white'
                            onChange={userInputHandler}
                            value={signupDetails.email}  
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
                            value={signupDetails.password}  
                            placeholder='Enter Your Password' 
                            name="password" 
                            id="password 
                            required" />
                    </div>
                    <button className='text-lg text-white font-semibold bg-blue-500 rounded-sm py-1 px-2 hover:bg-blue-600 transition-all ease-in-out duration-300 cursor-pointer'>Create account</button>
                    <p className='text-center mt-2'>
                        Already have an account ?<Link to="/signin" className='text-blue-500 hover:text-blue-600'>Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Signup