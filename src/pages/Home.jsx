import { Link } from "react-router-dom"

import HomeImage from '../assets/Images/homePageMainImage.png'
import HomeLayout from "../layouts/HomeLayout"

function Home() {
    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex flex-col  lg:flex-row  justify-center items-center px-6 lg:px-20 space-x-2 gap-6">
                <section className="w-full lg:w-1/2 space-y-2 space-x-1 order-2 lg:order-1">
                    <h1 className="text-4xl text-white font-semibold">Find out best <span className="text-4xl text-blue-500 font-bold">Online courses</span></h1>
                    <p>We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cose.</p>
                    <div className="space-x-4">
                        <Link to="/courses">
                           <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all ease-in-out duration-300">Explore courses</button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all ease-in-out duration-300">Contact Us</button>
                        </Link>
                    </div>
                </section>
                <section className="flex justify-center items-center pb-4 lg:pb-0 order-1 lg:order-2">
                <img src={HomeImage} alt="HomeImage" />
                </section>
            </div>
        </HomeLayout>
    )

}

export default Home