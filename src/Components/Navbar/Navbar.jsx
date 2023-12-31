import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {


    const navOptions = <>
        <li className='hover:border-b-2'><Link to={"/"}>Home</Link></li>
        <li className='hover:border-b-2'><Link to={"/about"}>About</Link></li>
        <li className='hover:border-b-2'><Link to={"/skill"}>Skill</Link></li>
        <li className='hover:border-b-2'><Link to={"/projects"}>Projects</Link></li>
        <li className='hover:border-b-2'><Link to={"/contact"}>Contact</Link></li>
    </>


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='bg-mantel shadow-xl sticky top-0 z-10'>


            <nav className='main-container flex justify-between items-center py-4'>
                <Link to={"/"}><h1 className='font-moulpali text-3xl text-white'>Md Rakibul Islam</h1></Link>


                <ul className='hidden md:flex items-center gap-4 text-white'>{navOptions}</ul>





                <Menu as="div" className="relative inline-block text-left md:hidden">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <GiHamburgerMenu></GiHamburgerMenu>

                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Home
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/about"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            About
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/skill"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Skill
                                        </Link>
                                    )}
                                </Menu.Item>

                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/projects"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Projects
                                        </Link>
                                    )}
                                </Menu.Item>


                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/contact"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Contact
                                        </Link>
                                    )}
                                </Menu.Item>
                                {/* <form method="POST" action="#">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                type="submit"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block w-full px-4 py-2 text-left text-sm'
                                                )}
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </Menu.Item>
                                </form> */}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>








            </nav>
        </div>
    );
};

export default Navbar;