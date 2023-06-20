import React from 'react';

const Navbar = () => {


    const navOptions = <>
        <li className='hover:border-b-2'><a href="/#About">About</a></li>
        <li className='hover:border-b-2'>Skill</li>
        <li className='hover:border-b-2'>Projects</li>
        <li className='hover:border-b-2'>Contacts</li>
        <li className='hover:border-b-2'>Blog</li>
    </>

    return (
        <div className='bg-mantel shadow-xl'>
            <nav className='main-container flex justify-between items-center py-4'>
                <h1 className='font-moulpali text-3xl text-white'>rakib.pro</h1>
                <ul className='flex items-center gap-4 text-white font-semibold'>{navOptions}</ul>
            </nav>
        </div>
    );
};

export default Navbar;