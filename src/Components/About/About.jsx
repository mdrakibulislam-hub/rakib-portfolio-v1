import React from 'react';
import rakibImage from '../../assets/rakib-image.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const About = () => {
    return (
        <div data-aos="fade-up" className='main-container flex gap-12 items-center' id='about'>
            <figure className='w-2/6'><img className='rounded-full  shadow-xl' src={rakibImage} alt="" /></figure>
            <div className='flex flex-col gap-6'>
                <h1 className='font-moulpali text-4xl text-white'>About Myself</h1>
                <div className='w-1/3 h-1 bg-mantel'></div>
                <p className='text-white'>
                    Greetings! I'm Md. Rakibul Islam, a highly skilled and passionate MERN Stack Developer with expertise in React.js, Tailwind, Express, and MongoDB. I also possess strong skills in graphic design allowing me to create captivating visual experiences.
                    <br /><br />
                    With a solid foundation in web development, acquired through my web development course at Programming Hero, I bring a fresh perspective and a hunger for new challenges. I have successfully delivered professional projects, showcasing my ability to create robust and user-friendly web applications that exceed expectations.
                    <br /><br />
                    What sets me apart is my artistic flair and attention to detail. Combining my technical prowess with my skills in graphic design and video editing, I can create stunning interfaces that engage and inspire users. I firmly believe that the fusion of design and functionality is key to crafting exceptional digital experiences.
                </p>
            </div>
        </div>
    );
};

export default About;