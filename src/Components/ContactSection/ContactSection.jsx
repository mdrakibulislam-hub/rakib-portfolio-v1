import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const ContactSection = () => {
    return (
        <div data-aos="fade-up" className='main-container pt-20 pb-12 flex flex-col gap-8'>

            <h1 className='font-moulpali text-4xl text-white'>Get in touch </h1>
            <div className='w-1/3 h-1 bg-mantel'></div>

            <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-4'>
                        <figure><img className='hover:scale-105 transition-all ease-in' src="https://i.ibb.co/d0W9xdf/mail.png" alt="" /></figure>
                        <div>
                            <p className='text-white'>E-mail Me</p>
                            <h3 className='font-moulpali text-4xl text-white'>rakibulislamborkan@gmail.com</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <figure><img className='hover:scale-105 transition-all ease-in' src="https://i.ibb.co/xHkP5JF/phone.png" alt="" /></figure>
                        <div>
                            <p className='text-white'>Phone+Whatsapp</p>
                            <h3 className='font-moulpali text-4xl text-white'>+880 1571 252327</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-moulpali text-4xl text-white'>👋 Say Hi!</h1>
                    <textarea className='outline-none w-full p-4 rounded-2xl bg-[#5a5a5a] text-white' placeholder='Enter your message here...' name="" id="" cols="30" rows="7"></textarea>
                    <button className='bg-mantel text-xl px-6 py-2 rounded-full font-moulpali text-white hover:shadow-xl max-w-fit'>Send Message</button>
                </div>
            </div>


        </div>
    );
};

export default ContactSection;