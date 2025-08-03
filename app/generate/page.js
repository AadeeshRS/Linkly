"use client"
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLink, FaImage, FaPlus, FaCheck } from 'react-icons/fa';

const Generate = () => {
    const [links, setLinks] = useState([{ link: "", linktext: "" }]);
    const [handle, setHandle] = useState("");
    const [pic, setPic] = useState("");
    const [createdLink, setCreatedLink] = useState("");

    // Prefill handle from query param if present
    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const handleFromQuery = urlParams.get("handle");
            if (handleFromQuery && !handle) setHandle(handleFromQuery);
        }
    }, [handle]);

    const handleChange = (index, field, value) => {
        setLinks(currentLinks => {
            const newLinks = [...currentLinks];
            newLinks[index] = { ...newLinks[index], [field]: value };
            return newLinks;
        });
    };

    const addLink = () => {
        setLinks([...links, { link: "", linktext: "" }]);
    };

    const removeLink = (index) => {
        if (links.length > 1) {
            setLinks(links.filter((_, i) => i !== index));
        }
    };

    const submitLinks = async () => {
        const allLinksFilled = links.every(item => item.link && item.linktext);
        if (!allLinksFilled || !handle || !pic) {
            toast.error('Please fill all fields');
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost:3000/api/add", requestOptions);
            const result = await response.json();

            if (response.ok && !result.error) {
                toast.success('Link added successfully!');
                setCreatedLink(`${window.location.origin}/${handle}`);
                setLinks([{ link: "", linktext: "" }]);
                setHandle("");
                setPic("");
            } else if (result.error && result.message) {
                toast.error(result.message);
            } else {
                toast.error('Failed to add link');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while adding the link');
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] w-full bg-gradient-to-b from-violet-500 to-purple-600 py-8 px-4 sm:px-6'>
            <div className='w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col gap-6'>
                <h1 className='text-3xl sm:text-4xl font-bold text-violet-900 text-center mb-2'>
                    Create Your Linkly
                </h1>

                {/* Handle Input */}
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 text-violet-900'>
                        <span className='bg-amber-300 p-1.5 rounded-full'>
                            <FaLink className='text-violet-900' />
                        </span>
                        <h2 className='text-xl font-semibold'>Your Handle</h2>
                    </div>
                    <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        className='w-full p-3 bg-white/90 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-200 text-violet-900 placeholder-violet-400'
                        placeholder='yourname'
                    />
                    <p className='text-sm text-violet-700'>
                        Your Linkly URL: linkly.org/{handle || 'yourname'}
                    </p>
                </div>

                {/* Links Section */}
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 text-violet-900'>
                        <span className='bg-amber-300 p-1.5 rounded-full'>
                            <FaLink className='text-violet-900' />
                        </span>
                        <h2 className='text-xl font-semibold'>Your Links</h2>
                    </div>

                    {links.map((item, index) => (
                        <div key={index} className='space-y-2 bg-white/50 p-4 rounded-xl'>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-medium text-violet-800'>Link {index + 1}</h3>
                                {links.length > 1 && (
                                    <button
                                        onClick={() => removeLink(index)}
                                        className='text-red-500 hover:text-red-700 text-sm font-medium'
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                            <input
                                type="text"
                                value={item.linktext}
                                onChange={(e) => handleChange(index, 'linktext', e.target.value)}
                                className='w-full p-3 bg-white/90 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-200 text-violet-900 placeholder-violet-400 mb-2'
                                placeholder='Link text (e.g., My Portfolio)'
                            />
                            <input
                                type="text"
                                value={item.link}
                                onChange={(e) => handleChange(index, 'link', e.target.value)}
                                className='w-full p-3 bg-white/90 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-200 text-violet-900 placeholder-violet-400'
                                placeholder='https://example.com'
                            />
                        </div>
                    ))}

                    <button
                        onClick={addLink}
                        className='flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-300 hover:bg-amber-400 text-violet-900 font-medium rounded-xl transition-colors duration-200 mt-2'
                    >
                        <FaPlus /> Add Another Link
                    </button>
                </div>

                {/* Profile Picture */}
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 text-violet-900'>
                        <span className='bg-amber-300 p-1.5 rounded-full'>
                            <FaImage className='text-violet-900' />
                        </span>
                        <h2 className='text-xl font-semibold'>Profile Picture</h2>
                    </div>
                    <input
                        type="text"
                        value={pic}
                        onChange={(e) => setPic(e.target.value)}
                        className='w-full p-3 bg-white/90 border border-violet-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent transition-all duration-200 text-violet-900 placeholder-violet-400'
                        placeholder='Paste image URL (e.g., https://example.com/photo.jpg)'
                    />
                    {pic && (
                        <div className='mt-2'>
                            <p className='text-sm text-violet-700 mb-1'>Image Preview:</p>
                            <img
                                src={pic}
                                alt="Profile preview"
                                className='h-20 w-20 object-cover rounded-full border-2 border-amber-300'
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23e9d5ff%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20fill%3D%22%236d28d9%22%3EImage%20URL%3C%2Ftext%3E%3C%2Fsvg%3E';
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    onClick={submitLinks}
                    className='w-full py-3.5 px-6 bg-violet-900 hover:bg-violet-800 text-white font-semibold text-lg rounded-xl transition-colors duration-200 mt-4 flex items-center justify-center gap-2 shadow-lg hover:shadow-violet-900/30'
                >
                    <FaCheck /> Create Your Linkly
                </button>

                {/* Created Link */}
                {createdLink && (
                    <div className='mt-6 p-4 bg-violet-100 rounded-xl text-center animate-fade-in'>
                        <p className='text-violet-800 font-medium mb-2'>Your Linkly is ready!</p>
                        <a
                            href={createdLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block px-4 py-2 bg-white text-violet-700 rounded-lg font-mono text-sm sm:text-base hover:bg-violet-50 transition-colors duration-200 break-all'
                        >
                            {createdLink}
                        </a>
                        <p className='text-violet-600 text-sm mt-2'>Click to view your new Linkly page</p>
                    </div>
                )}
            </div>

            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
    );
};

export default Generate;
