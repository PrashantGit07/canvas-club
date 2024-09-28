"use client"; // Ensure you are using the client component

import { motion } from "framer-motion";

export default function CoursesPage() {
    return (
        <div className="bg-gradient-to-l from-gray-200 via-blue-100 to-stone-100 flex p-28  justify-center h-screen">
            <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="text-3xl text-black font-bold"
            >
                🎉 Courses are Coming Soon! 🎉
            </motion.p>
        </div>
    );
}

