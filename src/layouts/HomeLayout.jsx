import {AiFillCloseCircle} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Footer from "../components/Footer"

function HomeLayout({children}) {
    const dispatch =useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn)
    const role = useSelector((state)=>state?.auth?.role)

    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked =false
    }

    function logout(e) {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div>  
            <div className="drawer z-50">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content m-2">
                    <label htmlFor="my-drawer" className="drawer-button btn bg-transparent border-none hover:bg-transparent cursor-pointer"><FiMenu size={40}/></label>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li className='absolute top-4 right-4 w-fit z-50'><button onClick={hideDrawer}><AiFillCloseCircle size={20}/></button></li>
                        <li><Link to="/">Home</Link></li>
                        {isLoggedIn && role == 'ADMIN' && ( <li><Link to="/admin/dasboard">Admin Dasboard</Link></li>)}
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/courses">All Courses</Link></li>
                        {isLoggedIn ? ( 
                            <li className='absolute bottom-4 w-[90%]'>
                                <div className=' space-x-4 hover:bg-transparent  flex justify-center items-center'>
                                    <Link to="/profile"><button className='bg-blue-500 text-white px-10 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>Profile</button></Link>
                                    <Link onClick={logout}><button className='bg-blue-500 text-white px-10 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>logout</button></Link>
                                </div>
                            </li>
                        ) 
                        : ( <li className='absolute bottom-4 w-[90%]'>
                                <div className=' space-x-4 hover:bg-transparent  flex justify-center items-center'>
                                    <Link to="/login"><button className='bg-blue-500 text-white px-10 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>Login</button></Link>
                                    <Link to="/signup"><button className='bg-blue-500 text-white px-10 py-1 rounded-md  hover:bg-blue-600 transition-all ease-in-out duration-300'>Signup</button></Link>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout