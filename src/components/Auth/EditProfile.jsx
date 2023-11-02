import HomeLayout from "../../layouts/HomeLayout";


function EditProfile() {
    return (
        <HomeLayout>
            <main className="min-h-[90vh] flex justify-center items-center mt-16">
                <section className="w-[300px] flex flex-col items-center my-10 gap-4 px-4 py-8 shadow-[0_0_10px_black] rounded-lg">
                        <img className='w-36 h-36 rounded-full border border-black' 
                        src=''
                        // src={userData.avatar} 
                        alt="Profile" />
                        <div className="space-y-4 flex flex-col justify-center">
                            <div>
                            <h3 className="text-lg font-semibold mb-1">Enter your Name</h3>
                            <input className=" bg-transparent border border-white"
                             type="text" name="" id="" size='28'/>
                            </div>
                            <button className="block bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 text-white text-lg  py-1 rounded-sm ">Submit</button>

                        </div>
                </section>
            </main>
        </HomeLayout>
    )
}


export default EditProfile