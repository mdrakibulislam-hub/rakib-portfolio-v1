import React from 'react';
import { skills } from '../../../public/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SkillsSection = () => {
    return (
        <div data-aos="fade-up" className='main-container pt-20 pb-12 flex flex-col gap-8'>

            <h1 className='font-moulpali text-4xl text-white'>Skills</h1>
            <div className='w-1/3 h-1 bg-mantel'></div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6'>
                {
                    skills.map(({ name, image }) => <div key={name} className='flex flex-col justify-center gap-4'>
                        <figure className='mx-auto'><img src={image} alt="" className='hover:drop-shadow-2xl hover:scale-105 transition-all ease-in' /></figure>
                        <h3 className='font-moulpali text-xl text-white text-center'>{name}</h3>
                    </div>)
                }
            </div>

        </div>
    );
};

export default SkillsSection;