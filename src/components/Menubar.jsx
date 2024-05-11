"use client"
import React, { useState } from 'react';

function Menubar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <a href="#" className="text-lg font-semibold">Logo</a>
                    </div>
                    <div className="hidden md:flex">
                        <a href="#" className="px-4">Home</a>
                        <a href="#" className="px-4">About</a>
                        <a href="#" className="px-4">Services</a>
                        <a href="#" className="px-4">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="block text-white focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM5 5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5z"></path>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Services</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menubar;
