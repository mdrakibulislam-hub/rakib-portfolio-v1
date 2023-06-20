import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const navOptions = <>
        <li className='hover:border-b-2'><Link to={"/"}>Home</Link></li>
        <li className='hover:border-b-2'><Link to={"/about"}>About</Link></li>
        <li className='hover:border-b-2'><Link to={"/skill"}>Skill</Link></li>
        <li className='hover:border-b-2'><Link to={"/projects"}>Projects</Link></li>
        <li className='hover:border-b-2'><Link to={"/contact"}>Contact</Link></li>
    </>

    return (
        <div className='bg-mantel shadow-xl '>
            <nav className='main-container flex justify-between items-center py-4'>
                <Link to={"/"}><h1 className='font-moulpali text-3xl text-white'>rakib.pro</h1></Link>
                <ul className='flex items-center gap-4 text-white'>{navOptions}</ul>
            </nav>
        </div>
    );
};

export default Navbar;