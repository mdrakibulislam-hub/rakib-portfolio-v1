import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef } from 'react';
AOS.init();
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xyc3h5s', 'template_eqj535f', form.current, 'ONEJMwy6NT6X3Qs8C')
            .then((result) => {
                toast.success('Your message has been sent, I will response as soon as possible')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                toast.error(error.text)
            });

        e.target.reset()
    };




    return (
        <div data-aos="fade-up" className='main-container pt-20 pb-12 flex flex-col gap-8'>

            <h1 className='font-moulpali text-4xl text-white'>Get in touch </h1>
            <div className='w-1/3 h-1 bg-mantel'></div>

            <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-4'>
                        <figure className='shrink-0'><img className='hover:scale-105 transition-all ease-in' src="https://i.ibb.co/d0W9xdf/mail.png" alt="" /></figure>
                        <div>
                            <p className='text-white'>E-mail Me</p>
                            <h3 className='font-moulpali text-xl md:text-4xl text-white'>rakibulislamborkan@gmail.com</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <figure className='shrink-0'><img className='hover:scale-105 transition-all ease-in' src="https://i.ibb.co/xHkP5JF/phone.png" alt="" /></figure>
                        <div>
                            <p className='text-white'>Phone+Whatsapp</p>
                            <h3 className='font-moulpali text-xl md:text-4xl text-white'>+880 1571 252327</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-moulpali text-4xl text-white'>Send me message directly from here</h1>
                    <form ref={form} onSubmit={sendEmail} action="" className='flex flex-col gap-4'>
                        <input className='outline-none w-full p-4 rounded-2xl bg-[#5a5a5a] text-white focus:shadow-xl' type="text" name="user_name" id="" placeholder='Please enter your name here' />
                        <input className='outline-none w-full p-4 rounded-2xl bg-[#5a5a5a] text-white focus:shadow-xl' type="email" name="user_email" id="" placeholder='Please enter your email here' />
                        <input className='outline-none w-full p-4 rounded-2xl bg-[#5a5a5a] text-white focus:shadow-xl' type="text" name="subject" id="" placeholder='Please enter subjet here' />
                        <textarea className='outline-none w-full p-4 rounded-2xl bg-[#5a5a5a] text-white focus:shadow-xl' placeholder='Enter your message here...' name="message" id="" cols="30" rows="3"></textarea>
                        <button type='submit' className='bg-mantel text-xl px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl max-w-fit'>Send Message</button>
                    </form>
                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default ContactSection;