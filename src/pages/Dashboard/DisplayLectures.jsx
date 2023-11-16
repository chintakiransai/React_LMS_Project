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
        <div className=" bg-gray-900 "> 
            <main className="w-full min-h-[90vh] relative flex justify-center overflow-hidden">
                    <section className="w-[70vw]">
                        <div className="fixed top-0 left-0 right-0 flex z-50">
                            <h1 className="w-[70vw] text-3xl px-4 py-4 font-semibold bg-gray-900  text-white">
                                <span className="font-normal">
                                    <MdArrowBack onClick={()=>navigate(-1)}
                                        className="inline mx-2 text-4xl cursor-pointer"/>
                                        Now Playing
                                </span> - {Lectures&&Lectures[currentVideo]?.title}
                            </h1>
                            <div className="flex items-center w-[30vw] px-2 py-4 font-semibold border-b-2 bg-gray-900 border-white">
                                <h1 className="text-2xl inline">
                                    Lectures List
                                </h1>
                                {(role=="ADMIN")&&(<button className="bg-blue-500 text-white py-2 px-2 rounded-sm absolute right-2  hover:bg-blue-600 transition-all ease-in-out">
                                    Add new lecture
                                </button>)}
                            </div>
                        </div>
                        <div className="min-h-[90vh] overflow-y-scroll">
                            <div className="w-full mt-16">
                                <video className="object-fill w-full h-full" src={Lectures&&Lectures[currentVideo]?.lecture}
                                    controls
                                    disablePictureInPicture
                                    muted
                                    controlsList="nodownload" >
                                </video>
                                <p>
                                </p>
                            </div>
                            <div className="my-6 px-2 mb-24">
                                <p className="text-4xl">
                                    Title: {courseDetails.title}
                                </p>
                                <p className="text-2xl my-2">
                                    Description: {courseDetails.description}
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="mt-20 w-[30vw] bg-gray-900 min-h-[90vh] overflow-y-scroll">
                        <div>
                            {Lectures && Lectures.map((element,index)=> {
                                return (
                                    <li className="list-none text-xl py-4 px-2 border-b border-white cursor-pointer hover:bg-gray-800 active:bg-gray-700"
                                        key={element._id}>
                                            {console.log(index,currentVideo)}
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