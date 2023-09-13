import { useNavigate } from "react-router-dom"




function NotFound() {
    const navigate =useNavigate()
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center">
                <div className="text-8xl font-extrabold text-white">404</div>
                <div className="text-sm bg-black text-white absolute rounded rotate-12 px-2">Page Not Found....</div>
                <button onClick={()=>{navigate(-1)}} className="text-sm border border-red-400 text-red-400 mt-4 px-6 py-2 rounded-sm hover:border-red-600 hover:text-red-600">Go Back</button>
        </section>
    )
}


export default NotFound