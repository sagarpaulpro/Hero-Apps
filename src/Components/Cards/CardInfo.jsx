import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Chart from './Chart';
import AppsNotFound from './AppsNotFound';

const CardInfo = () => {
    const location = useLocation();
    const card = location.state?.card;
    const [install, setInstall] = useState([]);

    

    if (!card) {
        return <AppsNotFound />;
    }

    const saved = localStorage.getItem('cards');
    const oldInstall = saved ? JSON.parse(saved) : [];

    const alreadyInstalled = oldInstall.some(item => item.id === card.id);

    const installer = () => {
        
        if (alreadyInstalled) {
            alert(card.title + ' is already installed.');
            return;
        }

        alert(card.title + ' is installed.');

        const newInstall = [...oldInstall, card];
        setInstall(newInstall);
        localStorage.setItem('cards', JSON.stringify(newInstall));

        
    };

    const { description, companyName, downloads, image, ratingAvg, reviews, size, title } = card;
    const rateing = card.ratings;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <section className='flex gap-8 mb-8'>
                <img
                    className='w-60 h-60 rounded-2xl shadow-lg'
                    src={image}
                    alt={`${title} app icon`}
                />
                <div className='flex-1'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-2'>{title}</h1>
                    <p className='text-gray-600 mb-4'>
                        <span>Developed by </span>
                        <span className='font-medium'>{companyName}</span>
                    </p>

                    <hr className='my-6' />

                    <div className='grid grid-cols-3 gap-6 mb-6'>
                        <div className='text-center p-4 bg-gray-50 rounded-lg'>
                            <div className='text-2xl font-bold text-gray-900'>{downloads}</div>
                            <div className='text-sm text-gray-600'>Downloads</div>
                        </div>
                        <div className='text-center p-4 bg-gray-50 rounded-lg'>
                            <div className='text-2xl font-bold text-gray-900'>{ratingAvg}</div>
                            <div className='text-sm text-gray-600'>Average Rating</div>
                        </div>
                        <div className='text-center p-4 bg-gray-50 rounded-lg'>
                            <div className='text-2xl font-bold text-gray-900'>{reviews}</div>
                            <div className='text-sm text-gray-600'>Reviews</div>
                        </div>
                    </div>


                    <button
                        onClick={installer}
                        className={`w-full ${
                            alreadyInstalled ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        } text-white font-semibold py-3 px-6 rounded-lg transition duration-200`}
                        disabled={alreadyInstalled}
                    >
                        {alreadyInstalled ? 'Installed' : `Install Now (${size})`}
                    </button>
                </div>
            </section>

            <Chart rateing={rateing} />
            <p className='mt-6 text-gray-700 leading-relaxed'>{description}</p>
        </div>
    );
};

export default CardInfo;
