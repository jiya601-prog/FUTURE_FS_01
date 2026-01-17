"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-white pt-20"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto px-6 text-center"
            >
                {/* Small Header Tag */}
                <motion.span
                    variants={itemVariants}
                    className="inline-block px-4 py-2 bg-orange-50 text-orange-600 font-sans font-medium text-sm rounded-full mb-6"
                >
                    Full Stack Developer
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                    variants={itemVariants}
                    className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6"
                >
                    Crafting digital{" "}
                    <span className="block">experiences that</span>
                    <span className="text-orange-600">inspire</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={itemVariants}
                    className="font-sans text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
                >
                    I build modern, performant web applications with a focus on user
                    experience, clean code, and scalable architecture.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Primary Button */}
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-sans font-medium rounded-full hover:bg-gray-800 transition-all duration-200 btn-hover shadow-lg hover:shadow-xl"
                    >
                        View My Work
                        <ArrowRight size={20} />
                    </a>

                    {/* Secondary Button */}
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-4 bg-transparent text-gray-900 font-sans font-medium rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-gray-100"
                >
                    <div className="text-center">
                        <p className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                            5+
                        </p>
                        <p className="font-sans text-sm text-gray-500 mt-1">
                            Years Experience
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                            50+
                        </p>
                        <p className="font-sans text-sm text-gray-500 mt-1">
                            Projects Completed
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                            30+
                        </p>
                        <p className="font-sans text-sm text-gray-500 mt-1">Happy Clients</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
