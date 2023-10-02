import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import HomeLayout from "../../layouts/HomeLayout"
import { createCourses } from "../../redux/slices/courseSlice"


function CreateCourse() {
    const dispatch =useDispatch()
    const navigate = useNavigate()

    const [inputText,setInputText] =useState({title:'',description:'',thumbnail:'',category:'',createdby:'', previewImage:''})

    function inputHandler(e) {
        const {name,value} = e.target
        setInputText({...inputText,[name]:value})
    }

    function imageHandler(e) {
        const uploadImage = e.target.files[0]
        setInputText({...inputText,thumbnail:uploadImage,previewImage:(URL.createObjectURL(uploadImage))})
    }

    async function submitHandler(e) {
        e.preventDefault()
        if(!inputText.title || !inputText.description || !inputText.thumbnail || !inputText.category || !inputText.createdby) {
            toast.error('Please fill the all details')
            return
        }

        const form =new FormData()
        form.append("title",inputText.title)
        form.append("description",inputText.description)
        form.append("category",inputText.category)
        form.append("createdby",inputText.createdby)
        form.append("thumbnail",inputText.thumbnail)

        const response =await dispatch(createCourses(form))
        if(response?.payload?.data?.success) {
                navigate(-1)
                setInputText({title:'',description:'',thumbnail:'null',category:'',createdby:'', previewImage:''})
        }

    }

    return (
        <HomeLayout>
            <main className="h-[90vh] flex justify-center items-center mt-24 mb-8">
                <form onSubmit={submitHandler} className="gap-x-20 shadow-[0_0_10px_black] w-[620px] h-[480px]">
                    <h1 className="text-center text-4xl font-semibold my-8">Create Course</h1>
                    <div className="flex justify-center gap-8 mx-4">
                        <section className="space-y-4 w-1/2">
                            <label htmlFor="thumbnail">{inputText.previewImage ? 
                            (<img className="w-[280px] h-[160px]" src={inputText.previewImage}/>):
                            (<div className="w-[280px] h-[160px] border border-white text-center text-2xl">Upload Image</div>)}</label>
                                <input className="hidden" onChange={imageHandler} type="file" name="thumbnail" id="thumbnail" />
                            <div className="flex flex-col gap-1">
                                <label htmlFor="Title" className="text-lg">Course Title</label>
                                <input type="text" 
                                name="title"
                                className='bg-transparent px-2 py-1 border border-white'
                                onChange={inputHandler}
                                value={inputText.title}
                                placeholder="Enter Title" 
                                id="title"
                                required 
                                />
                            </div>
                        </section>
                        <section className="space-y-4 w-1/2 relative -top-2">
                            
                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg">Category</label>
                                <input type="text" 
                                name="category"
                                className='bg-transparent px-2 py-1 border border-white'
                                onChange={inputHandler}
                                value={inputText.category}
                                placeholder="Enter category" 
                                id="category"
                                required 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="createdby" className="text-lg">Createdby</label>
                                <input type="text" 
                                name="createdby"
                                className='bg-transparent px-2 py-1 border border-white'
                                onChange={inputHandler}
                                value={inputText.createdby}
                                placeholder="Enter Createdby" 
                                id="createdby"
                                required 
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg">Description</label>
                                <textarea rows={3} type="text" 
                                name="description"
                                className='bg-transparent px-2 py-1 border border-white resize-none'
                                onChange={inputHandler}
                                value={inputText.description}
                                placeholder="Enter Description" 
                                id="description"
                                required 
                                />
                            </div>
                        </section>
                    </div>
                    <button className="w-[90%] btn btn-primary m-8">Submit</button>
                </form>
            </main>
        </HomeLayout>
    )
}

export default CreateCourse