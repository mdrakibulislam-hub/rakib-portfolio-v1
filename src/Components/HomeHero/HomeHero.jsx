import Lottie from 'react-lottie';
import boy from '../../assets/programmer-boy.json';






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
        <div className='main-container flex justify-between items-center my-8'>


            <div className='w-1/2 flex flex-col gap-3'>
                <h1 className='text-3xl text-white font-moulpali'>Hi I am</h1>
                <h1 className='text-6xl text-white font-moulpali'>Md Rakibul Islam</h1>
                <div className='w-1/3 h-1 bg-mantel'></div>
                <p className='text-white text-base text-justify my-2'>
                    Welcome to my digital home! As a web developer, I strive to create beautiful and functional websites that not only meet the needs of my clients but also provide a seamless user experience. Browse through my portfolio to see how I&apos;ve turned ideas into reality and let&apos;s work together to bring your online vision to life.
                </p>
                <div className='flex gap-3'>
                    <button className='bg-mantel text-xl px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl max-w-fit'>Download Resume</button>
                    <button className=' border-2 border-white  text-xl px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl max-w-fit'>Contact</button>
                </div>
            </div>

            <div className='w-1/3 py-9'>
                <Lottie options={lottieOptions}
                />
            </div>
        </div>
    );
};

export default HomeHero;