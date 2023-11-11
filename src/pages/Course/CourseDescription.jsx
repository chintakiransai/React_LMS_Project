import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";


function CourseDescription() {
    const {state} =useLocation()
    const navigate =useNavigate()
    const { role, data } = useSelector((state)=>state.auth)
    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex flex-col justify-center items-center mt-20 mb-4">
                <div className="w-full max-h-[90vh] lg:max-w-[80vw] lg:min-h-[50vh] lg:max-h-[60vh] card card-side lg:gap-x-[2vw] p-2 bg-transparent flex flex-col lg:flex-row justify-center items-center">
                    <figure className="w-[90vw] lg:w-[50vw] flex flex-col rounded-xl">
                        <img src={state.thumbnail} alt="Course"/>
                    </figure>
                    <div className="card-body w-full lg:w-[50vw] relative pt-2">
                        <h2 className="card-title text-2xl lg:text-4xl">{state.title}</h2>
                        <p className="overflow-hidden text-lg">{state.description}</p>
                        <p className="text-lg">Number of lectures : {state.numberOfLectures}</p>
                        <p className="text-xl text-blue-500">₹500.00</p>
                    </div>
                </div>
                { role ==="ADMIN" || data?.subscription?.status ==="active" ? 
                        (<button className="btn btn-primary w-[60vw] lg:w-[36vw] h-[8vh] mt-2" onClick={()=>{ navigate('/')}}>Watch Now</button>):
                        (<button className="btn btn-primary w-[60vw] lg:w-[36vw] h-[8vh] mt-2" onClick={()=>{ navigate('/payment/checkout')}}>Enroll Now</button>)} 
            </main>
        </HomeLayout>
    )
}

export default CourseDescription