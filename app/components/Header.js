"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons"; // Ant Design Icons for hamburger and close
import logo from "../assets/ar logo.jpg"; // Ensure the path is correct

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // New function to handle link clicks
    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header className="bg-white shadow-lg shadow-blue-200 bg-gradient-to-l from-gray-200 via-blue-100 to-stone-100">
            <nav className="p-4 max-w-7xl mx-auto">
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
                    <div className="flex items-center cursor-pointer">
                        <Image src={logo} alt="Logo" className="w-12 h-10 rounded-full" />
                        <Link href="/">
                            <span className="ml-2 text-xl text-black !important font-semibold">Canvas Club</span>
                        </Link>
                    </div>

                    <div className="w-full mt-2 md:mt-0 md:w-auto md:flex md:justify-center">
                        <p className="font-semibold text-pink-800 !important text-center md:text-left">
                            Welcome to Canvas Club <span className="font-semibold">कला संगम 2024!</span>
                        </p>
                    </div>

                    {/* Right side: Hamburger menu for mobile screens */}
                    <div className="md:hidden">
                        {menuOpen ? (
                            <CloseOutlined className="text-2xl text-black cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <MenuOutlined className="text-2xl text-black cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>

                    {/* Navigation Links for large screens */}
                    <ul className="hidden md:flex space-x-4">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link href="/AboutPage" className="text-gray-700 hover:text-blue-500">About</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/Courses" className="text-gray-700 hover:text-blue-500">Courses</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Dropdown menu for mobile screens */}
            {menuOpen && (
                <ul className="md:hidden bg-white p-4 shadow-lg">
                    <li className="mb-2">
                        <Link href="/HomePage" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/AboutPage" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>About</Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/Contact" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/Courses" className="text-gray-700 hover:text-blue-500" onClick={handleLinkClick}>Courses</Link>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Header;
