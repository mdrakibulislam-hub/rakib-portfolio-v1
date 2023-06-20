import Lottie from 'react-lottie';
import boy from '../../assets/programmer-boy.json';
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: boy,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};




const HomeHero = () => {
    return (
        <div data-aos="fade-up" className='main-container flex flex-col md:flex-row justify-between items-center my-8'>


            <div className='md:w-1/2 flex flex-col gap-3'>
                <h1 className='text-3xl text-white font-moulpali'>Hi I am_</h1>
                <h1 className='text-6xl text-white font-moulpali'>Md Rakibul Islam</h1>


                <span className='text-3xl font-moulpali text-sky-400'>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Full-Stack Web Developer', 'Front-end Web Developer', 'MERN Stack Web Developer', 'Problem Solver']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>


                <div className='w-1/3 h-1 bg-mantel'></div>
                <p className='text-white text-base text-justify my-2'>
                    Welcome to my digital home! As a web developer, I strive to create beautiful and functional websites that not only meet the needs of my clients but also provide a seamless user experience. Browse through my portfolio to see how I&apos;ve turned ideas into reality and let&apos;s work together to bring your online vision to life.
                </p>
                <div className='flex gap-3'>
                    <a href="https://drive.google.com/file/d/1Ir5jiRkeffScN8ex6ExOi_hDV-7VrIm5/view?usp=sharing" target='blank'><button className='bg-mantel text-xl px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl max-w-fit'>View Resume</button></a>
                    <a href="https://www.linkedin.com/in/searchrakib/" target='blank'><button className=' border border-white  text-xl px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl max-w-fit'>LinkedIn</button></a>
                </div>
            </div>

            <div className='md:w-1/3 py-9'>
                <Lottie options={lottieOptions}
                />
            </div>
        </div>
    );
};

export default HomeHero;