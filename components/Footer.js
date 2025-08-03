import React from 'react';
import Link from 'next/link';
import { FaGithub, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-violet-800 w-full py-6 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-white">
                        <Link href="https://github.com/AadeeshRS/Linkly" target="_blank"
                            className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                            <FaGithub className="text-lg" />
                            <span className="text-sm sm:text-base">GitHub</span>
                        </Link>
                        <Link href="/" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                            <FaHome className="text-lg" />
                            <span className="text-sm sm:text-base">Home</span>
                        </Link>
                        <Link href="/about" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                            <FaInfoCircle className="text-lg" />
                            <span className="text-sm sm:text-base">About</span>
                        </Link>
                        <Link href="/contact" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                            <FaEnvelope className="text-lg" />
                            <span className="text-sm sm:text-base">Contact</span>
                        </Link>
                    </div>
                    <div className="text-violet-300 text-xs sm:text-sm text-center md:text-right">
                        &copy; {currentYear} Linkly. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;