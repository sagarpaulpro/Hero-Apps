import React from 'react';
import hero from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white py-4  mx-auto w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={hero} className="h-8 mr-2" />
                    <span className="text-lg font-semibold">HERO.IO</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className="text-xl">Social Links</span>
                    <div className="flex space-x-4">
                        <a href="https://x.com" target="_blank">
                            <span className="text-white hover:text-gray-300">X</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <span className="text-white hover:text-gray-300">in</span>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <span className="text-white hover:text-gray-300">f</span>
                        </a>
                    </div>
                </div>


            </div>
            <div className="text-center text-sm mt-2">
                Copyright © 2025 - All rights reserved
            </div>
        </footer>
    );
};

export default Footer;