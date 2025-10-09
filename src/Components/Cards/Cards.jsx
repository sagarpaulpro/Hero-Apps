import React from 'react';
import { useLocation } from 'react-router';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Cards = ({ count = null }) => {
    const location = useLocation(); 
    const isAppsRoute = location.pathname === '/Apps';

    const cardData = useLoaderData();
    const cards = [...cardData];
    const displayCards = count ? cards.filter(card => card.id <= count) : cards;

    return (
        <div>
            {}
            {isAppsRoute && (
                <div className="mb-6 text-center">
                    <h1 className='text-4xl font-semibold my-4'>Our All Applications</h1>
                    <p className='text-gray-400 my-2'>
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
            )}

            <div className='min-h-screen bg-gray-100 
                grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-5 sm:gap-6 p-4 sm:p-6 justify-items-center'>
                {
                    displayCards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;
