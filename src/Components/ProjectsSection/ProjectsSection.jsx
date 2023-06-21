
import { projects } from '../../../public/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



const ProjectsSection = () => {
    return (
        <div data-aos="fade-up" className='main-container pt-20 pb-12 flex flex-col gap-8'>

            <h1 className='font-moulpali text-4xl text-white'>Some of my projects</h1>
            <div className='w-1/3 h-1 bg-mantel'></div>
            <div className='grid md:grid-cols-3 gap-12' >
                {
                    projects.map(({ name, image, overView, technologies, liveSite, clientCode, serverCode }) => <div key={name} className='flex flex-col gap-4'>
                        <a href={liveSite} target='blank'><figure className='w-fit'><img src={image} alt="" className='hover:drop-shadow-2xl hover:scale-105 transition-all ease-in rounded-lg w-full' /></figure></a>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-moulpali text-3xl text-white'>Title: {name}</h3>
                            {/* <p className='text-white text-justify'>Overview: {overView}</p> */}
                            <p className='text-white'>Technologies: {technologies}</p>
                            <div className='flex flex-col lg:flex-row gap-2'>
                                <a href={liveSite} target='blank'><button className='bg-mantel text-lg px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl w-full lg:max-w-fit'>Live Site</button></a>
                                <a href={clientCode} target='blank'><button className='border border-white  text-lg px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl w-full lg:max-w-fit'>Client Code</button></a>
                                <a href={serverCode} target='blank'><button className='border border-white  text-lg px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl w-full lg:max-w-fit'>Server Code</button></a>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ProjectsSection;