import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CourseCard from "../../components/CourseCard"
import HomeLayout from "../../layouts/HomeLayout"
import { allCourses } from "../../redux/slices/courseSlice"


function CourseList() {
    const dispatch = useDispatch()
    const { courseList} = useSelector((state)=>state.course)

async function getAllCourses() {
        await dispatch(allCourses())
}

useEffect(()=> {
    getAllCourses()
},[])

    return (
        <HomeLayout>
            <main className="min-h-[90vh] mt-20 mb-8  lg:ml-16 ">
                <h1 className="text-center text-4xl font-semibold">Explore the courses made by<span className="text-blue-500"> Industry experts</span></h1>
                <div className="flex flex-wrap mt-10">
                  {courseList.map((data)=> {
                    return <CourseCard key={data._id} courseList={data}/>
                  })}
                </div>
            </main>
            
        </HomeLayout>
    )
}

export default CourseList