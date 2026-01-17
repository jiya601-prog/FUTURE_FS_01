"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-24 bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
                {/* Section Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-2 bg-orange-600/10 text-orange-400 font-sans font-medium text-sm rounded-full mb-6">
                        Get In Touch
                    </span>

                    <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                        Let&apos;s work together on your next project
                    </h2>

                    <p className="font-sans text-lg text-gray-400 max-w-2xl mx-auto mb-10">
                        I&apos;m always open to discussing new projects, creative ideas, or
                        opportunities to be part of your vision. Let&apos;s create something
                        amazing together.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="mailto:hello@example.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-sans font-medium rounded-full hover:bg-orange-500 transition-all duration-200 btn-hover shadow-lg shadow-orange-600/25"
                        >
                            <Mail size={20} />
                            Let&apos;s Talk
                            <ArrowRight size={20} />
                        </a>

                        <a
                            href="#projects"
                            className="inline-flex items-center px-8 py-4 bg-transparent text-white font-sans font-medium rounded-full border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all duration-200"
                        >
                            View My Work
                        </a>
                    </div>
                </motion.div>

                {/* Stats or Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 pt-16 border-t border-gray-800"
                >
                    <div className="text-center">
                        <p className="font-sans text-sm text-gray-500">Response Time</p>
                        <p className="font-sans text-lg font-medium text-white mt-1">
                            Within 24 hours
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-sans text-sm text-gray-500">Availability</p>
                        <p className="font-sans text-lg font-medium text-white mt-1">
                            Open for projects
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-sans text-sm text-gray-500">Based In</p>
                        <p className="font-sans text-lg font-medium text-white mt-1">
                            San Francisco, CA
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
