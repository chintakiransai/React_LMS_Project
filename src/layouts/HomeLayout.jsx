import {AiFillCloseCircle} from 'react-icons/ai'
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Footer from "../components/Footer"

function HomeLayout({children}) {

    function hideDrawer() {
        const element = document.getElementsByClassName('drawer-toggle')
        element[0].checked =false
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
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/courses">All Courses</Link></li>
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout