"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="font-serif text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200"
                >
                    Divyanshu Prakash
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="font-sans font-medium text-gray-600 hover:text-orange-600 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button (Desktop) */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center px-6 py-3 bg-gray-900 text-white font-sans font-medium rounded-full hover:bg-gray-800 transition-all duration-200 btn-hover"
                >
                    Get in Touch
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-900"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100"
                >
                    <ul className="flex flex-col py-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-6 py-3 font-sans font-medium text-gray-600 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="px-6 pt-2">
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-sans font-medium rounded-full hover:bg-gray-800 transition-all duration-200"
                            >
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
}
