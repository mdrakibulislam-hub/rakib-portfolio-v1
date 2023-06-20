import React from 'react';


// https://i.ibb.co/7VHyRF7/facebook.png
// https://i.ibb.co/C1D1q9g/github.png
// https://i.ibb.co/fFr73nb/linkedin.png
// https://i.ibb.co/Jq5hr4H/stack.png

const Footer = () => {
    return (
        <div className='bg-mantel py-6 shadow-2xl mt-12'>
            <div className='main-container flex flex-col md:flex-row gap-6 justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <h1 className='font-moulpali text-3xl text-white'>Social Links</h1>
                    <div className='flex gap-2 items-center'>
                        <a href="https://www.linkedin.com/in/searchrakib/" target='blank'><img src="https://i.ibb.co/fFr73nb/linkedin.png" alt="" /></a>
                        <a href="https://github.com/mdrakibulislam-hub" target='blank'><img src="https://i.ibb.co/C1D1q9g/github.png" alt="" /></a>
                        <a href="https://www.facebook.com/searchrakib/" target='blank'><img src="https://i.ibb.co/7VHyRF7/facebook.png" alt="" /></a>
                        <a href="https://stackoverflow.com/users/20754847/md-rakibul-islam" target='blank'><img src="https://i.ibb.co/Jq5hr4H/stack.png" alt="" /></a>
                    </div>
                </div>
                <div className='text-center md:text-right'>
                    <h1 className='font-moulpali text-3xl text-white'>Md Rakibul Islam</h1>
                    <p className='text-white'>Email: rakibulislamborkan@gmail.com</p>
                    <p className='text-white'>Phone+whatsapp: +880 1571 252327</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;