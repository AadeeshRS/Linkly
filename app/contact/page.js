import React from 'react';
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <main className="min-h-[calc(100vh-64px)]">
            <section className="bg-gradient-to-b from-violet-500 to-purple-600 w-full">
                <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center">
                            Get In Touch
                        </h1>

                        <p className="text-gray-200 text-lg md:text-xl leading-relaxed text-center mb-8">
                            Have questions, suggestions, or want to get in touch? I&apos;d love to hear from you!
                            Whether you have feedback, collaboration ideas, or just want to say hello, feel free to reach out.
                        </p>

                        <div className="space-y-8 mt-12">
                            {/* Email */}
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-amber-300/20 p-4 rounded-full mb-3">
                                    <FaEnvelope className="text-amber-300 text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                                <a
                                    href="mailto:srivastavaaadeesh@gmail.com"
                                    className="text-amber-300 hover:text-amber-200 text-lg transition-colors duration-200 break-all"
                                >
                                    srivastavaaadeesh@gmail.com
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-6 text-center">Find me on</h3>
                                <div className="flex justify-center gap-6">
                                    <a
                                        href="https://github.com/AadeeshRS"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-amber-300 transition-colors duration-200"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub className="w-8 h-8" />
                                    </a>
                                    <a
                                        href="https://twitter.com/yourusername"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-amber-300 transition-colors duration-200"
                                        aria-label="Twitter"
                                    >
                                        <FaLinkedin className="w-8 h-8" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
