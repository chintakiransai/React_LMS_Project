import { useNavigate } from "react-router-dom"

function Denied() {
    const navigation = useNavigate()
    return (
        <main className="h-screen bg-[#1A2238] text-white flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold">
                403
            </h1>
            <div className="bg-black text-white absolute rotate-12 px-1 my-1">
                Access Denied
            </div>
            <button onClick={()=>navigation(-1)} className="text-white border relative top-6 px-6 py-2 hover:border-orange-500 hover:text-orange-500 ">
                <span>Go Back</span>
            </button>
        </main>
    )
}

export default Denied