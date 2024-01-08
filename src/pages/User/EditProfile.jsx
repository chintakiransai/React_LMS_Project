import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { profileUpdate } from "../../redux/slices/authSlice";


function EditProfile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const avatarField = useSelector((state)=>state?.auth?.data?.avatar)
    const nameField = useSelector((state)=>state?.auth?.data?.name)

    const [previewImage,setPreviewImage] = useState('')
    const [userData,setUserData] = useState({avatar:avatarField,name:nameField})

    function imageHandler(e) {
        const updateImage =(e.target.files[0])
        setUserData({...userData,avatar:updateImage})
        setPreviewImage(window.URL.createObjectURL(updateImage))
    }

    function inputHandler(e) {
        const {name,value} = e.target
        setUserData({...userData,[name]:value})
    }

    async function submitHandler(e) {
        e.preventDefault()
        if(!userData.name || !userData.avatar) {
            toast.error("Please fill the all details")
            return
        }
        if((userData.name).length<4) {
            toast.error("Name should be greater than 4 character")
            return
        }

        const formData = new FormData()
        formData.append("name",userData.name)
        formData.append("avatar",userData.avatar)

        const response = await dispatch(profileUpdate(formData))
        if(response?.payload?.data?.success) {
            navigate('/profile')
        }
    }

    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex justify-center items-center mt-16">
                <form onSubmit={submitHandler} noValidate
                    className="w-[300px] flex flex-col items-center my-10 gap-4 px-4 py-8 shadow-[0_0_10px_black] rounded-lg">
                        <label htmlFor="avatar">
                        {previewImage ?
                        (<img className='w-36 h-36 rounded-full border border-black' 
                        src={previewImage}
                        alt="Profile" />) : 
                        (<img className='w-36 h-36 rounded-full border border-black' 
                        src={userData.avatar}
                        alt="Profile" />)}
                        </label>
                        <input className="hidden"
                        type="file" 
                        name="avatar" 
                        id="avatar"
                        onChange={imageHandler}
                        accept='.jpg, .jpeg, .png, .svg'
                        required/>
                        <div className="space-y-4 flex flex-col justify-center">
                            <div className="space-y-2">
                            <label htmlFor="name" className="text-lg font-semibold">Enter your Name</label>
                            <input className=" bg-transparent border border-white flex justify-center"
                             type="text" 
                             name="name" 
                             id="name" 
                             size='26'
                             onChange={inputHandler}
                             value={userData.name}
                             required/>
                            </div>
                            <Link to="/profile">
                                <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                                <AiOutlineArrowLeft /> Back to Profile
                                </p>
                            </Link>
                                <button className="block bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 text-white text-lg  py-1 rounded-sm ">Update</button>

                        </div>
                        </form>
            </main>
        </HomeLayout>
    )
}


export default EditProfile