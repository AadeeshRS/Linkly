"use client";

import { FaUser } from 'react-icons/fa';

export default function ProfileImage({ src, alt, handle, size = 'md' }) {
    const sizeClasses = {
        sm: 'w-24 h-24',
        md: 'w-28 h-28',
        lg: 'w-32 h-32'
    };

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23e9d5ff%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%20fill%3D%22%236d28d9%22%3E%40${handle || 'user'}%3C%2Ftext%3E%3C%2Fsvg%3E`;
    };

    return (
        <div className="relative inline-block">
            <img
                src={src || "/default-profile.png"}
                alt={alt}
                className={`${sizeClasses[size] || sizeClasses['md']} rounded-full object-cover border-4 border-amber-300 shadow-lg mx-auto mb-4`}
                onError={handleImageError}
            />
            <span className="absolute -bottom-1 -right-1 bg-amber-300 text-violet-900 rounded-full p-1.5">
                <FaUser className="w-4 h-4" />
            </span>
        </div>
    );
}
