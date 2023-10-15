import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import HomeLayout from "../../layouts/HomeLayout"

function UserProfile() {
    const userData = useSelector((state)=>state?.auth?.data)
    return (
        <HomeLayout>
            <main className='min-h-[90vh] flex justify-center items-center mt-16'>
                <section className='w-[340px] flex flex-col items-center my-10 gap-4 px-4 py-6 shadow-[0_0_10px_black] rounded-lg'>
                    <img className='w-36 h-36 rounded-full border border-black' 
                        src={userData.avatar} alt="" />
                    <h3 className='text-3xl capitalize'>{userData.name}</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        <p>Email:</p><p>{userData.email}</p>
                        <p>Role:</p><p>{userData.role}</p>
                        <p>Subscription:</p><p>{userData.subscription=='active' ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div className='w-full flex items-center justify-between gap-2'>
                        <Link to='/changePassword' className='w-1/2 text-white bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center'>
                            <button>
                                Change Password
                            </button>
                        </Link>
                        <Link to='/editProfile' className='w-1/2 text-white bg-blue-500 hover:bg-blue-600 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center'>
                            <button>
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                    {userData.subscription=='active'&&(
                            <button className='w-full text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center'>
                                Cancel Subscription
                            </button>
                    )}

                </section>
            </main>
        </HomeLayout>
    )
}

export default UserProfile