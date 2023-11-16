import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CourseCard({courseList}) {
    const navigate =useNavigate()
    const { role, data } = useSelector((state)=>state.auth)
    return (
            <main className="m-4 cursor-pointer">
                <div onClick={()=>navigate('/courses/description',{state:{...courseList}})} className="card card-compact lg:w-[28vw] bg-[#1A2238] shadow-[0_0_8px_black]">
                    <figure><img className="w-full h-[36vh]" src={courseList.thumbnail} alt="Shoes" /></figure>
                    <div className="card-body h-[36vh] my-2">
                        <h2 className="card-title">{courseList.title}</h2>
                        <p className="text-lg">Created by : {courseList.createdby}</p>
                        <p className="text-lg">Category : {courseList.category}</p>
                        <p className="text-lg">For college students & working profeesional</p>
                    </div>
                    <div className="card-actions inline-block">
                        <button className="w-1/2 h-[8vh] btn btn-primary rounded-none rounded-bl-xl">Explore</button>

                        { role ==="ADMIN" || data?.subscription?.status ==="active" ? 
                        (<button className="w-1/2 h-[8vh] btn btn-secondary rounded-none rounded-br-xl" onClick={(e)=>{e.stopPropagation(); navigate('/dashboard/dispalyLectures',{state:{...courseList}})}}>Watch Now</button>):
                        (<button className="w-1/2 h-[8vh] btn btn-secondary rounded-none rounded-br-xl" onClick={(e)=>{e.stopPropagation(); navigate('/payment/checkout')}}>Enroll Now</button>)} 
                        </div>
                </div>
                
            </main>
    );
}

export default CourseCard;