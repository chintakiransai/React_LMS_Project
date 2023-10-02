import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function CourseCard({courseList}) {
    const navigate =useNavigate()
    const { role, data } = useSelector((state)=>state.auth)
    return (
            <main className="m-4 cursor-pointer">
                <div onClick={()=>navigate('/courses/description',{state:{...courseList}})} className="card card-compact w-[28vw] bg-[#1A2238] shadow-[0_0_8px_black]">
                    <figure><img className="w-full h-44" src={courseList.thumbnail} alt="Shoes" /></figure>
                    <div className="card-body h-36">
                        <h2 className="card-title">{courseList.title}</h2>
                        <p className="">Created by : {courseList.createdby}</p>
                        <p className="">Category : {courseList.category}</p>
                        <p className="">For college students & working profeesional</p>
                    </div>
                    <div className="card-actions inline-block">
                        <button className="w-1/2 btn btn-primary rounded-none rounded-bl-xl">Explore</button>

                        { role ==="ADMIN" || data?.subscription?.status ==="active" ? 
                        (<button className="w-1/2 btn btn-secondary rounded-none rounded-br-xl" onClick={(e)=>{e.stopPropagation(); navigate('/')}}>Watch Now</button>):
                        (<button className="w-1/2 btn btn-secondary rounded-none rounded-br-xl">Enroll Now</button>)} 
                        </div>
                </div>
                
            </main>
    );
}

export default CourseCard;