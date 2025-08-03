"use client"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function Home() {
  const [handleInput, setHandleInput] = useState("");

  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col">
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="bg-gradient-to-b from-violet-500 to-purple-600 w-full flex-1">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            {/* Left column - Text and CTA */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your Online Presence, Perfected.
              </h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
                Join people using Linkly for their link in bio. One link to help you share everything you create, curate, and sell from your Instagram, TikTok, Twitter, YouTube, and other social media profiles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
                <input
                  type="text"
                  placeholder="linkly.org/yourname"
                  className="bg-white/90 flex-grow px-4 py-3 rounded-xl focus:outline-amber-300 focus:ring-2 focus:ring-amber-300 transition-all duration-200 text-gray-900"
                  value={handleInput}
                  onChange={e => setHandleInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      if (!handleInput.trim()) {
                        toast.error("Please enter a handle before claiming.");
                        return;
                      }
                      window.location.href = `/generate?handle=${encodeURIComponent(handleInput.trim())}`;
                    }
                  }}
                />
                <Link
                  href={`/generate?handle=${encodeURIComponent(handleInput.trim())}`}
                  className="bg-amber-300 hover:bg-amber-400 text-violet-900 font-semibold px-6 py-3 rounded-xl whitespace-nowrap transition-colors duration-200 text-center"
                  onClick={(e) => {
                    if (!handleInput.trim()) {
                      e.preventDefault();
                      toast.error("Please enter a handle before claiming.");
                    }
                  }}
                >
                  Claim Yours
                </Link>
              </div>
            </div>

            {/* Right column - Image/Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/20">
                  <div className="bg-white/90 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600"></div>
                      <div>
                        <div className="font-semibold text-violet-900">@yourname</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['Portfolio', 'Latest Blog Post', 'My Socials', 'Contact Me'].map((item, idx) => (
                        <div key={idx} className="bg-violet-100 hover:bg-violet-200 transition-colors duration-200 rounded-xl p-3 text-violet-900 font-medium text-center cursor-pointer">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-300 to-pink-400 rounded-3xl opacity-50 blur-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-900 mb-12">
            Everything you need in one link
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Easy to Use',
                description: 'Create and customize your link in minutes with our intuitive interface.'
              },
              {
                title: 'Fully Customizable',
                description: 'Match your brand with custom colors, fonts, and styles.'
              },
              {
                title: 'Powerful Analytics',
                description: 'Track clicks and understand your audience with our built-in analytics.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-violet-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">{feature.title}</h3>
                <p className="text-violet-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
