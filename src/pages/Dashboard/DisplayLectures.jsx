import { useEffect, useState } from "react"
import { MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate} from "react-router-dom"

import { deleteLecture, getLectures } from "../../redux/slices/lectureSlice"


function DisplayLectures() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [currentVideo,setCurrentVideo] = useState(0)

    const courseDetails = useLocation().state
    const {Lectures} = useSelector((state)=>state.lecture)
    const {role} = useSelector((state)=>state.auth)
    
    async function handleDeleteLecture(courseId, lectureId) {
            const data  = {courseId, lectureId}
            await dispatch(deleteLecture(data))
            await dispatch(getLectures(courseDetails._id))
    }

    async function onload() {
        await dispatch(getLectures(courseDetails._id))
    }

useEffect(()=> {
    onload()
},[])

    return (
        <div className=" bg-gray-900 overflow-hidden"> 
            <main className="w-full h-full md:flex justify-center ">
                <div className="fixed top-0 left-0 flex z-50">
                            <h1 className="w-[100vw] md:w-[70vw] text-3xl px-4 py-4 font-semibold bg-gray-900  text-white overflow-ellipsis hover:overflow-visible truncate data-tool">
                                <span className="font-normal">
                                    <MdArrowBack onClick={()=>navigate(-1)}
                                        className="inline mx-2 text-4xl cursor-pointer"/>
                                        Now Playing
                                </span> - {Lectures&&Lectures[currentVideo]?.title}
                            </h1>    
                </div>
                    <section className="w-[100vw] md:w-[70vw] h-[50vh] md:h-[100vh] mt-20 overflow-y-scroll">
                            <div className="w-full ">
                                <video className="object-fill w-full h-full" src={Lectures&&Lectures[currentVideo]?.lecture}
                                    controls
                                    disablePictureInPicture
                                    muted
                                    controlsList="nodownload" >
                                </video>
                                <p>
                                </p>
                            </div>
                            <div className="my-6 px-2 mb-4 md:mb-24">
                                <p className="text-4xl">
                                    Title: {courseDetails?.title}
                                </p>
                                <p className="text-2xl my-2">
                                    Description: {courseDetails?.description}
                                </p>
                            </div>
                    </section>
                        <div className="w-[100vw] md:w-[30vw] h-20 md:fixed md:top-0 md:right-0 md:z-50 flex items-center  px-2 py-4 font-semibold border-b-2 bg-gray-900 border-white">
                                <h1 className="text-white font-semibold text-2xl inline">
                                    Lectures List
                                </h1>
                                {(role=="ADMIN")&&(<button className="bg-blue-500 text-white py-2 px-2 rounded-sm absolute right-2  hover:bg-blue-600 transition-all ease-in-out"
                                    onClick={()=>{navigate('/dashboard/addLectures',{state:{...courseDetails}})}}>
                                    Add new lecture
                                </button>)}
                        </div>
                    <section className="md:mt-20 w-[100vw] md:w-[30vw] h-[50vh] md:h-[100vh] bg-gray-900 min-h-[90vh] overflow-y-scroll">
                        <div>
                            {Lectures && Lectures.map((element,index)=> {
                                return (
                                    <li className="list-none text-xl py-4 px-2 border-b border-white cursor-pointer hover:bg-gray-800 active:bg-gray-700"
                                        key={element._id}>
                                        <p onClick={()=>{setCurrentVideo(index)}}>
                                            {index+1}.{element?.title}
                                        </p>
                                        <p>
                                            {(role==="ADMIN")&&(<button className="text-lg bg-blue-500 text-white py-1 px-1 rounded-sm mt-2 hover:bg-blue-600 transition-all ease-in-out"
                                                onClick={()=>{handleDeleteLecture(courseDetails._id,element._id)}}>
                                                    Delete lecture
                                            </button>)}
                                        </p>
                                    </li>)
                            })}
                        </div>
                    </section>   
            </main>          
                 </div>
        )

}

export default DisplayLectures