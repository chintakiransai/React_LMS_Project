import toast from 'react-hot-toast'
import { BsPersonCircle } from 'react-icons/bs'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import HomeLayout from "../../layouts/HomeLayout"
import { userDetails } from '../../redux/slices/authSlice'
import { cancelSubscription } from '../../redux/slices/razorpaySlice'

function UserProfile() {
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const userData = useSelector((state)=>state?.auth?.data)

    async function subCancelHandler()
    {
        toast("Cancellation initalized")
        const res = await dispatch(cancelSubscription())
        await dispatch(userDetails())
        res?.payload?.data?.success ? (toast.success("you are unSubscribed"), navigate('/')) : (toast.error("failed to unsubscribed"))
        
    }

    return (
        <HomeLayout>
            <main className='min-h-[90vh] flex justify-center items-center mt-16'>
                <section className='w-[340px] flex flex-col items-center my-10 gap-4 px-4 py-8 shadow-[0_0_10px_black] rounded-lg'>
                    {userData.avatar ? (<img className='w-36 h-36 rounded-full border border-black' 
                        src={userData.avatar} alt="Avatar"/>):(<BsPersonCircle className='w-24 h-24 rounded-full m-auto'/>)}
                    <h3 className='text-3xl capitalize'>{userData.name}</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        <p>Email:</p><p className='overflow-hidden hover:overflow-visible truncate'>{userData.email}</p>
                        <p>Role:</p><p>{userData.role}</p>
                        <p>Subscription:</p><p>{userData?.subscription?.status==='active' ? 'active' : 'Inactive'}</p>
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
                    {userData?.subscription?.status==='active'&&(
                            <button onClick={subCancelHandler}
                                className='w-full text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center'>
                                Cancel Subscription
                            </button>
                    )}

                </section>
            </main>
        </HomeLayout>
    )
}

export default UserProfile