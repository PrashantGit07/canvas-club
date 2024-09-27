

"use client";

import React from "react";
import contactImg from "../assets/contact.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row h-full w-full items-center justify-center mx-auto md:w-[75%] sm:w-[90%]">

                <div className="flex-shrink-0 w-full md:w-[50%] h-auto flex items-center justify-center p-2">
                    <Image src={contactImg} alt="contact" className="rounded-lg object-cover h-full w-full" />
                </div>

                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="flex-shrink-0 w-full md:w-[50%] h-auto p-5 flex flex-col gap-4 justify-center"
                >
                    <h1 className="font-semibold text-3xl md:text-4xl mb-4 text-center">
                        CONTACT
                    </h1>
                    <p className="font-semibold text-xl md:text-2xl mb-4 text-center text-[#9b5d26]">
                        Let's collaborate and <span className="text-[#82E0AA]">grow</span>,
                        so we can co-create a better{" "}
                        <span className="text-[#82E0AA]">tomorrow</span>{" "}
                    </p>

                    <div className="flex flex-row gap-5">
                        <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center">
                            <a
                                href="https://www.linkedin.com/in/prashant-mishra-050a48236"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="font-bold">
                            Facebook
                            <p className="opacity-50">Canvas Club</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="h-8 w-8" />
                            </a>
                        </div>
                        <div className="font-bold">
                            Instagram
                            <p className="opacity-50">Canvas Club</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">
                        <div className="flex h-[60px] w-[60px] rounded-full bg-white text-gray-600 hover:text-blue-900 items-center justify-center">
                            <FaWhatsapp className="h-8 w-8" />
                        </div>
                        <div className="font-bold">
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
