import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-blue-900   fixed w-full z-20 top-0 left-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                {/* Logo Section */}
                <div className="flex items-center">
                    <span className="text-xl font-bold text-white ml-2">ISCAP SERVICES</span>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="lg:hidden p-2 w-10 h-10 text-gray-100 rounded-lg hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open Menu</span>
                    <div className="flex flex-col gap-1">
                        <span
                            className={`h-0.5 w-6 bg-white transform transition duration-200 ease-in ${
                                isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        ></span>
                        <span
                            className={`h-0.5 w-6 bg-white transform transition duration-200 ease-in ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span
                            className={`h-0.5 w-6 bg-white transform transition duration-200 ease-in ${
                                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        ></span>
                    </div>
                </button>

                {/* Links Section */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } w-full lg:block lg:w-auto transition-all duration-300 ease-in-out`}
                    id="navbar-default"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
                        <Link
                            to="/"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/courses"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            Courses
                        </Link>
                        <Link
                            to="/internship"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            Intenship
                        </Link>
                        <Link
                            to="/placements"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            placements
                        </Link>
                        <Link
                            to="/assessments"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            assessments
                        </Link>
                        <Link
                            to="/certificate"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            Certificates
                        </Link>
                        <Link
                            to="/reports"
                            className="block py-2 px-3 text-white hover:text-gray-200 text-center"
                            onClick={closeMenu}
                        >
                            Reports
                        </Link>
                        <button className='bg-blue-500 text-white px-2 rounded'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
