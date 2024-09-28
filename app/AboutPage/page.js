"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    const text = "Hi! This is Canvas Club Family.";

    return (
        <div className='bg-gradient-to-l from-gray-400 via-blue-100 to-stone-100 p-0'>
            <div className="flex flex-col items-center justify-start h-screen">
                <div className="mt-20"> {/* Adjust the margin to move the text down from the top */}
                    <p className="text-5xl text-black !important">
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ scale: 2, opacity: 0 }} // Start large and transparent
                                animate={{ scale: 1, opacity: 1 }} // Animate to normal size and visible
                                transition={{
                                    delay: index * 0.05, // Faster animation by reducing delay
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
