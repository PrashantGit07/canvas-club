"use client"

import React from 'react';
import clubPic from "../assets/galary.jpg";
import Image from 'next/image';
import { motion } from 'framer-motion';
const MainContent = () => {
    return (
        <main className="flex items-center justify-center min-h-screen px-5 md:px-12 lg:px-28
        bg-gradient-to-l from-gray-200 via-blue-100 to-stone-100">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left py-10">
                <div className="flex-1 mb-8 md:mb-0 md:pr-8">
                    {/* <button className="text-2xl underline lg:text-4xl text-blue-800 mb-4 drop-shadow-lg">
                        Register here...
                    </button> */}
                    <motion.button
                        initial={{ y: -100, opacity: 0 }} // Start from above the view
                        animate={{ y: 0, opacity: 1 }} // Animate to final position
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12, // Increase damping for a slower bounce
                            duration: 0.7, // Increase duration for slower animation
                        }}
                        className="text-lg lg:text-2xl text-white mb-4 drop-shadow-lg bg-gradient-to-r from-red-400 to-blue-800 rounded-lg p-3" // Reduced text size and padding
                    >
                        Register here...
                    </motion.button>

                    <div className='font-bold text-black !important'>
                        Canvas Club <span className="">कला संगम</span>
                        <div>State level Art Competition And Exhibition | 2024</div>
                    </div>
                    <p className="text-base md:text-lg lg:text-lg mt-8 text-gray-600 max-w-2xl mb-6">
                        Welcome to all artists across the state! We are thrilled to invite you to participate in this grand art exhibition, where creativity knows no bounds. This is a unique opportunity for you to showcase your exceptional talents—be it sketching, painting, music, poetry, or any other form of artistic expression you possess. Every piece of art tells a story, and we are eager to hear yours! Join us in celebrating the diverse tapestry of talent that our community has to offer.
                        Whether you are a seasoned artist or just starting your journey, your work is valuable and deserves to be seen by a wider audience. Connect with fellow artists, gain inspiration from one another, and make lasting memories at this exciting event. We believe in the power of art to bring people together, ignite meaningful conversations, and spark creativity in all who attend.
                    </p>
                </div>
                <div className="flex-1 md:mt-0 mt-6 flex justify-center">
                    <Image
                        src={clubPic}
                        className="max-w-xs md:max-w-sm h-auto object-cover rounded-lg shadow-lg"
                        alt="Exhibit Logo"
                    />
                </div>
            </div>
        </main>
    );
}

export default MainContent;
