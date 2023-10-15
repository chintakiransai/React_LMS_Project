import AboutImage from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import billGates from '../assets/Images/billGates.png'
import einstein from '../assets/Images/einstein.png'
import nelsonMandela from '../assets/Images/nelsonMandela.png'
import steveJobs from '../assets/Images/steveJobs.png'
import HomeLayout from "../layouts/HomeLayout"

function Aboutus() {

return (
    <HomeLayout>
        <div className='h-fit w-full space-y-8 mt-20 mb-8 px-4 flex flex-col justify-center'>
        <div className="w-full lg:ml-20 flex flex-row justify-center items-center">
            <section className="w-full lg:w-1/2 space-y-6">
                <h1 className='text-3xl lg:text-5xl font-semibold text-blue-500 '>Affordable And Quality Education</h1>
                <p className='text-xl'>
                    Our goal is to provide the affordable and quality education to the world. 
                    We are providing the platform for the aspiring teachers and students to share
                    their skills, creativity and knowledge to each other to empower and contribute
                    in the growth and wellness of mankind.
                </p>
            </section>
            <section className="hidden lg:block w-1/2 ">
                <img src={AboutImage} className='drop-shadow-2xl' alt="AboutImage" />
            </section>
        </div>
        <div className='w-[90vw] lg:w-[40vw] mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={apj} className="w-[30%] rounded-full border border-gray-500" />
                    <q className='w-[75%] text-xl text-gray-200 text-center'>Teaching is a very noble profession that shapes the character, caliber, and future of an individual.</q>
                    <h3 className='text-3xl font-semibold'>APJ Abdul Kalam</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={billGates} className="w-[30%] rounded-full border border-gray-500" />
                    <q className='w-[75%] text-xl text-gray-200 text-center'>Success is a lousy teacher. It seduces smart people into thinking they can’t lose.</q>
                    <h3 className='text-3xl font-semibold'>Bill Gates</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={einstein} className="w-[30%] rounded-full border border-gray-500" />
                    <q className='w-[75%] text-xl text-gray-200 text-center'>The only thing that interferes with my learning is my education.</q>
                    <h3 className='text-3xl font-semibold'>Albert Einstein</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={nelsonMandela} className="w-[30%] rounded-full border border-gray-500" />
                    <q className='w-[75%] text-xl text-gray-200 text-center'>Education is the most powerful tool you can use to change the world.</q>
                    <h3 className='text-3xl font-semibold'>Nelson Mandela</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div> 
                <div id="slide5" className="carousel-item relative w-full">
                    <div className='flex flex-col justify-center items-center'>
                    <img src={steveJobs} className="w-[30%] rounded-full border border-gray-500" />
                    <q className='w-[75%] text-xl text-gray-200 text-center'>We dont get a chance to do that many things, and every one should be really excellent.</q>
                    <h3 className='text-3xl font-semibold'>Steve Jobs</h3>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
        </div>
    </HomeLayout>
)
}

export default Aboutus