import { useLocation } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";


function CourseDescription() {
    const {state} =useLocation()
    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex flex-col justify-center items-center mt-20 mb-4">
                <div className="max-w-[60vw] min-h-[50vh] card card-side  shadow-xl bg-[#1A2238]">
                    <figure className="w-[50vw] max-w-md"><img src={state.thumbnail} alt="Movie"/></figure>
                    <div className="card-body w-[50vw]">
                        <h2 className="card-title">{state.title}</h2>
                        <p className="overflow-hidden">{state.description}</p>
                        <p>Number of lectures : {state.numberOfLectures}</p>
                        <p>500.00</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </main>
        </HomeLayout>
    )
}

export default CourseDescription