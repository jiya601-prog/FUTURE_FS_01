"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured online store with real-time inventory, secure payments, and an intuitive admin dashboard.",
        image: "/projects/ecommerce.jpg",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Task Management App",
        description:
            "A collaborative project management tool with real-time updates, team workspaces, and productivity analytics.",
        image: "/projects/taskmanager.jpg",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "AI Content Generator",
        description:
            "An AI-powered platform that generates marketing copy, blog posts, and social media content.",
        image: "/projects/aicontent.jpg",
        tags: ["Python", "OpenAI", "FastAPI", "React"],
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Fitness Tracking App",
        description:
            "A comprehensive health and fitness app with workout plans, progress tracking, and nutrition logging.",
        image: "/projects/fitness.jpg",
        tags: ["React Native", "Firebase", "TypeScript"],
        liveUrl: "#",
        githubUrl: "#",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
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

export default function FeaturedProjects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                    ref={ref}
                >
                    <span className="inline-block px-4 py-2 bg-orange-50 text-orange-600 font-sans font-medium text-sm rounded-full mb-4">
                        My Work
                    </span>
                    <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl text-gray-900">
                        Featured Projects
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.title}
                            variants={cardVariants}
                            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <span className="font-serif text-2xl text-white/30">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.liveUrl}
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-orange-600 hover:text-white transition-colors duration-200"
                                        aria-label="View live site"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-orange-600 hover:text-white transition-colors duration-200"
                                        aria-label="View on GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                                {/* Scale effect on hover */}
                                <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                                    {project.title}
                                </h3>
                                <p className="font-sans text-gray-500 mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 font-sans text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                    className="text-center mt-12"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-900 font-sans font-medium rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                    >
                        View All Projects
                        <ExternalLink size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
