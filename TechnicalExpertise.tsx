"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Wrench, Palette, Database, Cloud } from "lucide-react";

const skills = [
    {
        icon: Layout,
        title: "Frontend Development",
        description:
            "Building responsive and interactive user interfaces with modern frameworks.",
        technologies: [
            { name: "React / Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 92 },
        ],
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Creating robust APIs and server-side applications with scalable architecture.",
        technologies: [
            { name: "Node.js / Express", level: 88 },
            { name: "Python / Django", level: 82 },
            { name: "REST / GraphQL", level: 85 },
        ],
    },
    {
        icon: Wrench,
        title: "DevOps & Tools",
        description:
            "Streamlining development workflows with modern tooling and deployment.",
        technologies: [
            { name: "Docker / K8s", level: 80 },
            { name: "Git / GitHub", level: 95 },
            { name: "CI/CD", level: 85 },
        ],
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

interface ProgressBarProps {
    name: string;
    level: number;
    delay: number;
}

function ProgressBar({ name, level, delay }: ProgressBarProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="mb-4 last:mb-0">
            <div className="flex justify-between items-center mb-2">
                <span className="font-sans text-sm text-gray-700">{name}</span>
                <span className="font-sans text-sm text-gray-500">{level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: delay, ease: "easeOut" }}
                    className="h-full bg-gray-900 rounded-full"
                />
            </div>
        </div>
    );
}

export default function TechnicalExpertise() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 bg-gray-50">
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
                        What I Do
                    </span>
                    <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl text-gray-900">
                        Technical Expertise
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            variants={cardVariants}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm card-hover"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                                <skill.icon className="w-7 h-7 text-gray-900" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-sans text-xl font-semibold text-gray-900 mb-3">
                                {skill.title}
                            </h3>
                            <p className="font-sans text-gray-500 mb-6">{skill.description}</p>

                            {/* Progress Bars */}
                            <div>
                                {skill.technologies.map((tech, techIndex) => (
                                    <ProgressBar
                                        key={tech.name}
                                        name={tech.name}
                                        level={tech.level}
                                        delay={index * 0.2 + techIndex * 0.1}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
