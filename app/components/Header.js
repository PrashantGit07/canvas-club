import Image from "next/image";
import Link from "next/link";
import logo from "../assets/ar logo.jpg"; // Make sure the path to the image is correct

// components/Header.js
const Header = () => {
    return (
        <header className="bg-white shadow-lg shadow-blue-200">
            <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <div className="flex items-center cursor-pointer">
                    <Image src={logo} alt="Logo" className="w-12 h-10 rounded-full" />
                    <span className="ml-2 text-xl font-semibold">Canvas Club</span>
                </div>
                <div>
                    <p className=" font-semibold text-pink-800">
                        Welcome to Canvas Club <span className="font-semibold">कला संगम 2024!</span>
                    </p>
                </div>

                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/HomePage" className="text-gray-700 hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link href="/AboutPage" className="text-gray-700 hover:text-blue-500">About</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className="text-gray-700 hover:text-blue-500">Courses</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
