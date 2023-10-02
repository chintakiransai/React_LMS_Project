import { useLocation } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";


function CourseDescription() {
    const {state} =useLocation()
    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex flex-col justify-center items-center mt-20 mb-4">
                <div className="max-w-[80vw] min-h-[50vh] card card-side gap-x-[6vw] bg-transparent">
                    <figure className="w-[50vw] max-w-md flex flex-col gap-4"><img src={state.thumbnail} alt="Movie"/><button className="btn btn-primary">Subscribe</button></figure>
                    
                    <div className="card-body w-[50vw] relative pt-0">
                        <h2 className="card-title text-4xl">{state.title}</h2>
                        <p className="overflow-hidden text-lg">{state.description}</p>
                        <p className="text-lg">Number of lectures : {state.numberOfLectures}</p>
                        <p className="text-xl">₹500.00</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </main>
        </HomeLayout>
    )
}

export default CourseDescription