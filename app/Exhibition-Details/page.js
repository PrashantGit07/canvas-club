"use client";

import React from 'react';
import Image from 'next/image'; // Assuming you'll be using an image for reports or categories
import music from "../assets/music.jpg"
import sketch from "../assets/sketch.jpg"
import poetry from "../assets/poetry.jpg"
import painting from "../assets/painting.jpg"

const ExhibitionDetails = () => {
    return (
        <div className="bg-gradient-to-l from-gray-400 via-blue-100 to-stone-100 p-10">
            <p className="font-semibold text-pink-900 font-serif text-3xl text-center mb-10">Categories for Participation</p>

            {/* Cards container for 4 cards in one row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Painting Card */}
                <article className="relative w-full h-80 overflow-hidden rounded-2xl group border border-gray-300 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500 via-gray-600 to-blue-400 flex flex-col justify-between">
                        <h2 className="font-bold text-lg text-blue-200 p-4">Painting</h2>
                        <Image
                            src={painting} // Replace with actual image path
                            alt="Painting"
                            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-5 bg-white bg-opacity-90 rounded-tl-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <p className="text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            Show your creativity with colors! Participate in the Painting category and express your imagination on canvas. Whether you're a seasoned artist or just starting, this is your chance to showcase your masterpieces.
                        </p>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-b group-hover:border-l transition-all duration-500 ease-in-out"></div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-t group-hover:border-r transition-all duration-500 delay-200 ease-in-out"></div>
                </article>

                {/* Sketching Card */}
                <article className="relative w-full h-80 overflow-hidden rounded-2xl group border border-gray-300 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500 via-gray-600 to-blue-400 flex flex-col justify-between">
                        <h2 className="font-bold text-lg text-blue-200 p-4">Sketching</h2>
                        <Image
                            src={sketch} // Replace with actual image path
                            alt="Sketching"
                            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-5 bg-white bg-opacity-90 rounded-tl-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <p className="text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            Pencil and paper are all you need to create amazing art! Participate in the Sketching category and display your drawing skills. It's time to bring your ideas to life with sharp lines and delicate shading.
                        </p>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-b group-hover:border-l transition-all duration-500 ease-in-out"></div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-t group-hover:border-r transition-all duration-500 delay-200 ease-in-out"></div>
                </article>

                {/* Music Card */}
                <article className="relative w-full h-80 overflow-hidden rounded-2xl group border border-gray-300 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500 via-gray-600 to-blue-400 flex flex-col justify-between">
                        <h2 className="font-bold text-lg text-blue-200 p-4">Music</h2>
                        <Image
                            src={music} // Replace with actual image path
                            alt="Music"
                            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-5 bg-white bg-opacity-90 rounded-tl-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <p className="text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            Unleash your musical talent in the Music category! Whether you play an instrument or sing, this category is for artists who want to mesmerize the audience with their musical skills and performances.
                        </p>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-b group-hover:border-l transition-all duration-500 ease-in-out"></div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-t group-hover:border-r transition-all duration-500 delay-200 ease-in-out"></div>
                </article>

                {/* Poetry Card */}
                <article className="relative w-full h-80 overflow-hidden rounded-2xl group border border-gray-300 transition-all duration-500 ease-in-out cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500 via-gray-600 to-blue-400 flex flex-col justify-between">
                        <h2 className="font-bold text-lg text-blue-200 p-4">Poetry</h2>
                        <Image
                            src={poetry} // Replace with actual image path
                            alt="Poetry"
                            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-5 bg-white bg-opacity-90 rounded-tl-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                        <p className="text-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            Have a way with words? The Poetry category is perfect for those who want to express emotions, thoughts, and stories through the art of words. Showcase your talent in front of an appreciative audience.
                        </p>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-b group-hover:border-l transition-all duration-500 ease-in-out"></div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 group-hover:border-t group-hover:border-r transition-all duration-500 delay-200 ease-in-out"></div>
                </article>
            </div>





            {/*points  */}


            <div className="mt-10 p-6 bg-white rounded-lg shadow-md bg-gradient-to-l from-pink-200 via-blue-100 to-stone-300">
                <h3 className="text-2xl font-semibold text-pink-900 mb-4">Eligibility Criteria for Participation</h3>
                <ul className="list-disc list-inside space-y-2 cursor-pointer">
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Open to all artists demonstrating talent in Painting, Sketching, Music, or Poetry.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Participants of all age groups are encouraged to apply.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        All submissions must be original works created by the artist.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Adherence to submission guidelines is required, including deadlines and format specifications.
                    </li>
                </ul>
            </div>

            {/* <div className="mt-10 p-6 bg-white rounded-lg shadow-md bg-gradient-to-l from-gray-200 via-blue-100 to-pink-200">
                <h3 className="text-2xl font-semibold text-pink-900 mb-4">How to Apply</h3>
                <ul className="list-disc list-inside space-y-2 cursor-pointer">
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Click on the register button.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Fill the details correctly and manually.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Upload a good quality picture of your artworks.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Upload the payment receipt.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-blue-600 hover:text-black">
                        Enter valid contact details.
                    </li>
                </ul>
            </div> */}
            <div className="mt-10 p-6 rounded-lg shadow-md transition-all duration-300 card">
                <h3 className="text-2xl font-semibold text-pink-900 mb-4 underline">How to Apply</h3>
                <ul className="list-disc list-inside space-y-2 cursor-pointer">
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-white hover:text-black">
                        Click on the register button.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-white hover:text-black">
                        Fill the details correctly and manually.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-white hover:text-black">
                        Upload a good quality picture of your artworks.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-white hover:text-black">
                        Upload the payment receipt.
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 text-white hover:text-black">
                        Enter valid contact details.
                    </li>
                </ul>
            </div>

            <div className="mt-10 p-6 rounded-lg shadow-md transition-all duration-300 card">
                <h3 className="text-2xl font-semibold text-pink-900 mb-4">Age Criteria for All Categories</h3>
                <ul className="list-disc list-inside space-y-2 cursor-pointer text-white">
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Kids: 10 - 15
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Junior: 16 - 21
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Senior: 22 - 30
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Experienced: Above 30
                    </li>
                </ul>
            </div>

            <div className="mt-10 p-6 rounded-lg shadow-md transition-all duration-300 card">
                <h3 className="text-2xl font-semibold text-pink-900 mb-4">Participation Fee and Prize Pool</h3>
                <h4 className="text-lg font-semibold mb-2">Sketching Competition</h4>
                <p className="text-white mb-2">
                    Participation Fee: <span className="font-bold">200</span>
                </p>
                <h4 className="text-lg font-semibold  mb-2">Prizes:</h4>
                <ul className="list-disc list-inside space-y-2 cursor-pointer text-white">
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Kids: Exciting Gifts
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Junior: 3000
                    </li>
                    <li className="transition-transform transform hover:translate-y-[-5px] duration-300 hover:text-black">
                        Senior: 5000
                    </li>
                </ul>

                <h4 className="text-lg font-semibold text-black mb-2">Music And Poetry</h4>
                <p className="text-white mb-2">
                    Participation Fee: <span className="font-bold">500</span>
                </p>
                <p className="text-white mb-2">
                    <span className=' text-black font-semibold'>Add on from our side</span> : <span className="font-bold">Photo and Video recordings of your performance</span>
                </p>
            </div>

        </div>
    );
}

export default ExhibitionDetails;
