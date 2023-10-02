import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer() {
const newDate = new Date()
const year = newDate.getFullYear()
    return (
        <footer className="h-[10vh] bg-gray-800 relative bottom-0 left-0 right-0 flex  flex-col sm:flex-row py-4 sm:px-20 justify-between items-center">
            <section className='text-lg'>
                Copyright {year} | All rights reserved
            </section>
            <section className='flex justify-center items-center gap-4 text-xl'>
                <a href="#" className='text-blue-500 hover:text-blue-700 transition ease-in-out duration-300'>
                    <BsFacebook />
                </a>
                <a href="#" className='text-blue-500 hover:text-blue-700 transition ease-in-out duration-300'>
                    <BsInstagram />
                </a>
                <a href="#" className='text-blue-500 hover:text-blue-700 transition ease-in-out duration-300'>
                    <BsLinkedin />
                </a>
                <a href="#" className='text-blue-500 hover:text-blue-700 transition ease-in-out duration-300'>
                    <BsTwitter />
                </a>
                
            </section>

        </footer>
    )
}

export default Footer