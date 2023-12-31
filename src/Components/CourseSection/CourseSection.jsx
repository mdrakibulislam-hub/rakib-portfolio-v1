
import { courses } from '../../../public/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const CourseSection = () => {
    return (
        <div data-aos="fade-up" className='main-container pt-20 pb-12 flex flex-col gap-8'>

            <h1 className='font-moulpali text-4xl text-white'>Courses & Achievements</h1>
            <div className='w-1/3 h-1 bg-mantel'></div>
            <div className='grid lg:grid-cols-2 gap-6'>
                {
                    courses.map(({ title, logo, institute, details }) =>
                        <div key={title} className='flex items-center gap-6'>
                            <figure className='shrink-0'><img src={logo} alt="" className='hover:drop-shadow-2xl hover:scale-105 transition-all ease-in' /></figure>
                            <div>
                                <h1 className='font-moulpali text-4xl text-white'>{title}</h1>
                                <p className='text-xl text-white'>{details}</p>
                                <p className='text-xl text-white'>Institute: {institute}</p>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default CourseSection;