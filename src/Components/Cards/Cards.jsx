import React, { useState } from 'react';
import { useLocation, useLoaderData } from 'react-router';
import Card from './Card';

const Cards = ({ count = null }) => {
    const location = useLocation();
    const isAppsRoute = location.pathname === '/Apps';

    const cardData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');

    const cards = [...cardData];
    const displayCards = count ? cards.filter(card => card.id <= count) : cards;

    const filteredCards = displayCards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {isAppsRoute && (
                <div className="mb-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold my-4">Our All Applications</h1>
                        <p className="text-gray-400 my-2">
                            Explore All Apps on the Market developed by us. We code for Millions
                        </p>
                    </div>

                    {/* Search Bar Section */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4">
                        <h1 className="text-black text-xl font-semibold">
                            ({filteredCards.length}) Apps Found
                        </h1>
                        <input
                            type="text"
                            placeholder="🔍 Search apps..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-sm 
                                       shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
                                       transition duration-200"
                        />
                    </div>
                </div>
            )}

            {/* Cards Grid */}
            <div
                className="min-h-screen bg-gray-100 
                grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-5 sm:gap-6 p-4 sm:p-6 justify-items-center"
            >
                {filteredCards.length > 0 ? (
                    filteredCards.map((card) => <Card key={card.id} card={card} />)
                ) : (
                    <p className="text-gray-500 col-span-full text-center mt-10">
                        No apps found matching “{searchTerm}”
                    </p>
                )}
            </div>
        </div>
    );
};

export default Cards;
