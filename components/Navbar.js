"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-violet-800 w-full shadow-lg px-4 sm:px-8 py-3'>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img alt='logo' src="/logo.png" className='w-16 md:w-20' />

                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-white hover:text-amber-300 focus:outline-none'
                            aria-label='Toggle menu'
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-10'>
                    <ul className='flex gap-8 items-center text-white'>
                        <li className='hover:text-amber-300 transition-colors'><Link href="/">Home</Link></li>
                        <li className='hover:text-amber-300 transition-colors'><Link href="/about">About</Link></li>
                        <li className='hover:text-amber-300 transition-colors'><Link href="/contact">Contact</Link></li>
                    </ul>
                    <div className='flex gap-4 ml-4'>
                        <Link href="/generate" className='hidden sm:block'>
                            <button className='bg-amber-400 hover:bg-amber-300 text-violet-900 font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-200 hover:scale-105 text-sm sm:text-base'>
                                Try it
                            </button>
                        </Link>
                        <Link href="https://github.com/AadeeshRS/Linkly" target='_blank'>
                            <button className='bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-2 text-sm sm:text-base'>
                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className='hidden sm:inline'>GitHub</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className='md:hidden mt-4 pb-4'>
                    <ul className='flex flex-col gap-4 text-white'>
                        <li className='hover:text-amber-300 transition-colors py-2 border-b border-violet-700'>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className='hover:text-amber-300 transition-colors py-2 border-b border-violet-700'>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className='hover:text-amber-300 transition-colors py-2 border-b border-violet-700'>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                    <div className='flex flex-col gap-3 mt-4'>
                        <Link href="/generate" className='w-full' onClick={() => setIsOpen(false)}>
                            <button className='w-full bg-amber-400 hover:bg-amber-300 text-violet-900 font-semibold py-2 px-6 rounded-full transition-all duration-200 hover:scale-105'>
                                Try it
                            </button>
                        </Link>
                        <Link href="https://github.com/AadeeshRS/Linkly" target='_blank' className='w-full' onClick={() => setIsOpen(false)}>
                            <button className='w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-6 rounded-full transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2'>
                                <FaGithub className="w-5 h-5" />
                                GitHub
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
