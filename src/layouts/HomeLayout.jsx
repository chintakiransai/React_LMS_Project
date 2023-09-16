import {AiFillCloseCircle} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Footer from "../components/Footer"
import { userlogout } from '../redux/slices/authSlice'

function HomeLayout({children}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn)
    const role = useSelector((state)=>state?.auth?.role)

    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked =false
    }

    async function logout(e) {
        e.preventDefault()
        const response = await dispatch(userlogout())
        if(response?.payload?.data?.success)
        {
        navigate("/")
        }
    }

    return (
        <div className='h-[90vh]'>  
            <div className="w-fit fixed top-0 drawer h-16 z-50 flex">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-fit">
                    <label htmlFor="my-drawer" className="drawer-button h-16 btn bg-gray-800 border-none hover:bg-transparent cursor-pointer"><FiMenu size={40}/></label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li className='absolute top-4 right-4 w-fit z-50'><button onClick={hideDrawer}><AiFillCloseCircle size={20} /></button></li>
                        <li><Link to="/">Home</Link></li>
                        {isLoggedIn && role == 'ADMIN' && ( <li><Link to="/admin/dasboard">Admin Dasboard</Link></li>)}
                        <li><Link to="/courses">All Courses</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/aboutus">About us</Link></li>
                        
                    </ul>
                </div>
            </div>
                <div className='bg-gray-800 w-full h-16 z-40 fixed top-0 flex items-center justify-end'>
                {isLoggedIn ? ( 
                            <div className='absolute bottom-4'>
                                <div className=' space-x-4 hover:bg-transparent  flex justify-end items-end mr-8'>
                                    <Link to="/profile"><button className='bg-blue-500 text-white px-6 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>Profile</button></Link>
                                    <Link onClick={logout}><button className='bg-blue-500 text-white px-6 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>logout</button></Link>
                                </div>
                            </div>
                        ) 
                        : ( <div className='absolute bottom-4'>
                                <div className=' space-x-4 hover:bg-transparent  flex justify-end items-end mr-8'>
                                    <Link to="/signin"><button className='bg-blue-500 text-white px-6 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>Login</button></Link>
                                    <Link to="/signup"><button className='bg-blue-500 text-white px-6 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>Signup</button></Link>
                                </div>
                            </div>
                        )}   
                </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout