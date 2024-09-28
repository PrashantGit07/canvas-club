"use client";

import React from "react";
import contactImg from "../assets/contact-new.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-l from-gray-400 via-blue-100 to-stone-100 p-10">
            <div className="flex flex-col md:flex-row h-full w-full items-center justify-center mx-auto md:w-[75%] sm:w-[90%]">

                {/* Contact Image Section */}
                <div className="flex-shrink-0 w-full md:w-[50%] h-auto flex items-center justify-center p-2">
                    <Image
                        src={contactImg}
                        alt="contact"
                        className="rounded-lg object-cover bg-transparent border-none h-full w-full"
                    />
                </div>

                {/* Contact Information Section with Border and Rounded Corners */}
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="flex-shrink-0 w-full md:w-[50%] h-auto p-5 flex flex-col gap-4 justify-center bg-white border border-gray-300 rounded-lg shadow-lg"
                >
                    <h1 className="font-semibold text-black text-3xl md:text-4xl mb-4 text-center">
                        CONTACT
                    </h1>
                    <p className="font-semibold text-xl md:text-2xl mb-4 text-center text-[#9b5d26]">
                        Let's collaborate and <span className="text-[#242d28]">grow</span>, so we can co-create a better{" "}
                        <span className="text-[#242d28]">tomorrow</span>
                    </p>

                    {/* Facebook Contact */}
                    <div className="flex flex-row gap-5">
                        <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center border border-gray-300">
                            <a
                                href="https://www.linkedin.com/in/prashant-mishra-050a48236"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="font-bold text-gray-800">
                            Facebook
                            <p className="opacity-50">Canvas Club</p>
                        </div>
                    </div>

                    {/* Instagram Contact */}
                    <div className="flex flex-row gap-5">
                        <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center border border-gray-300">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="font-bold text-gray-800">
                            Instagram
                            <p className="opacity-50">Canvas Club</p>
                        </div>
                    </div>

                    {/* Whatsapp Contact */}
                    <div className="flex flex-row gap-5">
                        <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center border border-gray-300">
                            <FaWhatsapp className="h-8 w-8" />
                        </div>
                        <div className="font-bold text-gray-800">
                            Whatsapp
                            <p className="opacity-50">+91 7985466401</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Contact;
