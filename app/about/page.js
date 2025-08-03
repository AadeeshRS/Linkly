import React from 'react';

const About = () => {
    return (
        <main className="min-h-[calc(100vh-64px)]">
            <section className="bg-gradient-to-b from-violet-500 to-purple-600 w-full">
                <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            About Linkly
                        </h1>

                        <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed text-left">
                            <p>
                                Linkly is built to simplify your online presence. With one customizable link,
                                you can share everything you create, curate, and sell, all in one place.
                            </p>
                            <p>
                                Our mission is to empower creators, entrepreneurs, and anyone with a digital
                                presence to connect with their audience effortlessly.
                            </p>
                        </div>

                        <div className="mt-12 text-left">
                            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
                                Tech Stack
                            </h2>
                            <ul className="space-y-3 md:space-y-2 text-gray-100 text-base md:text-lg">
                                <li className="flex items-start">
                                    <span className="text-amber-300 font-semibold mr-2">•</span>
                                    <div>
                                        <span className="font-bold text-amber-300">Next.js</span> –
                                        React framework for server-side rendering and static sites
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-300 font-semibold mr-2">•</span>
                                    <div>
                                        <span className="font-bold text-amber-300">React</span> –
                                        Component-based UI library
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-300 font-semibold mr-2">•</span>
                                    <div>
                                        <span className="font-bold text-amber-300">Tailwind CSS</span> –
                                        Utility-first CSS framework
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-300 font-semibold mr-2">•</span>
                                    <div>
                                        <span className="font-bold text-amber-300">MongoDB</span> –
                                        NoSQL database for storing user data
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12 pt-6 border-t border-white/20">
                            <p className="text-white text-lg font-semibold">
                                Crafted with ❤️ by <span className="text-amber-300">Aadeesh</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
