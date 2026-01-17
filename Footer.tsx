"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
    navigation: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
    ],
    resources: [
        { name: "Resume", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Resources", href: "#" },
    ],
    contact: [
        { icon: Mail, text: "hello@example.com", href: "mailto:hello@example.com" },
        { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: MapPin, text: "San Francisco, CA", href: "#" },
    ],
    socials: [
        { icon: Github, href: "https://github.com", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <a
                            href="#home"
                            className="font-serif text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-200"
                        >
                            Divyanshu Prakash
                        </a>
                        <p className="font-sans text-gray-500 mt-4 max-w-xs">
                            Full Stack Developer crafting beautiful, performant digital
                            experiences that make a difference.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="font-sans font-semibold text-gray-900 mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="font-sans text-gray-500 hover:text-orange-600 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="font-sans font-semibold text-gray-900 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="font-sans text-gray-500 hover:text-orange-600 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h4 className="font-sans font-semibold text-gray-900 mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.contact.map((item) => (
                                <li key={item.text}>
                                    <a
                                        href={item.href}
                                        className="inline-flex items-center gap-2 font-sans text-gray-500 hover:text-orange-600 transition-colors duration-200"
                                    >
                                        <item.icon size={16} />
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-6">
                            {footerLinks.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all duration-200"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="font-sans text-sm text-gray-500">
                        © {new Date().getFullYear()} Divyanshu Prakash. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="font-sans text-sm text-gray-500 hover:text-orange-600 transition-colors duration-200"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="font-sans text-sm text-gray-500 hover:text-orange-600 transition-colors duration-200"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
