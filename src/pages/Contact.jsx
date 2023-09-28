import { useState } from "react"
import toast from "react-hot-toast"

import axiosInstance from "../config/axiosInstance"
import { isEmail } from "../helpers/regexMatchers"
import HomeLayout from "../layouts/HomeLayout"


function Contact() {

    const [contactInput,setContactInput] = useState({name:'',email:'',message:''})

    function userInputHandler(e)
    {
        const {name,value} = e.target
        setContactInput({...contactInput,[name]:value})
    }

 async  function formSubmit(e) {
        e.preventDefault()
        if(!contactInput.name || !contactInput.email || !contactInput.message)
        {
            toast.error("Please fill the all details")
            return
        }
        if(!isEmail(contactInput.email))
        {
            toast.error("Please Provided validated email")
            return
        }
        try {
            const response = axiosInstance.post('contact/contactus',contactInput)
            toast.promise(response,{
                loading:"Submitting your query",
                success : "Form submitted successfully",
                error : "Failed to submit the form"
            })
           const responseData = await response
           console.log(responseData);
            if(responseData?.data)
            {
                setContactInput({name:'',email:'',message:''})
                setContactInput({...contactInput})
            }
        } catch (error) {
                toast.error("operation failed....")
        }
    }

        return (
            <HomeLayout>
            <div className="min-h-[90vh]  mt-16 flex justify-center items-center">
                <form onSubmit={formSubmit} noValidate className="w-80 flex flex-col justify-center items-center space-y-2 border border-white px-10 py-10">
                    <h1 className="text-4xl font-semibold mb-2">Contact Us</h1>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            onChange={userInputHandler}
                            className="bg-transparent border px-2 py-1 rounded-sm" 
                            placeholder="Enter your name" 
                            name="name" 
                            id="name" 
                            required/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            onChange={userInputHandler}
                            className="bg-transparent border px-2 py-1 rounded-sm" 
                            placeholder="Enter your email" 
                            name="email" 
                            id="email" 
                            required/>
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="message">Message</label>
                        <textarea rows={3}
                            type="text"
                            onChange={userInputHandler}
                            className="bg-transparent border px-2 py-1 rounded-sm mb-2" 
                            placeholder="Enter your message" 
                            name="message" 
                            id="message" 
                            required/>
                    </div>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out duration-300 text-xl py-1 px-8 w-full rounded-sm">
                        submit
                    </button>
                </form>
            </div>
            </HomeLayout>
        )
}


export default Contact