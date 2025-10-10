import React from 'react';
import { useLocation } from 'react-router';
import Chart from './Chart';
import AppsNotFound from './AppsNotFound';
import downImage from '../../assets/down.png';
import starImage from '../../assets/bigStar.png';
import reviewImage from '../../assets/review.png';

const CardInfo = () => {
    const location = useLocation();
    const card = location.state?.card;

    if (!card) {
        return <AppsNotFound />;
    }

    const saved = localStorage.getItem('cards');
    const oldInstall = saved ? JSON.parse(saved) : [];
    const alreadyInstalled = oldInstall.some(item => item.id === card.id);

    const installer = () => {
        if (alreadyInstalled) {
            alert(`${card.title} is already installed.`);
            return;
        }

        alert(`${card.title} is installed.`);

        const newInstall = [...oldInstall, card];
        localStorage.setItem('cards', JSON.stringify(newInstall));
    };

    const { description, companyName, downloads, image, ratingAvg, reviews, size, title } = card;
    const rateing = card.ratings;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <section className="flex gap-8 mb-8">
                <img className="w-60 h-60 rounded-2xl shadow-lg" src={image} />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
                    <p className="text-gray-600 mb-4">
                        <span>Developed by </span>
                        <span className="font-medium text-purple-600">{companyName}</span>
                    </p>

                    <hr className="my-6" />

                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="flex justify-center items-center flex-col text-center p-4 bg-gray-50 rounded-lg">
                            <img className="w-[40px] h-[40px]" src={downImage} />
                            <div className="text-sm text-gray-600">Downloads</div>
                            <div className="text-2xl font-bold text-gray-900">{downloads}</div>
                        </div>
                        <div className="flex justify-center items-center flex-col text-center p-4 bg-gray-50 rounded-lg">
                            <img className="w-[40px] h-[40px]" src={starImage} />
                            <div className="text-sm text-gray-600">Average Rating</div>
                            <div className="text-2xl font-bold text-gray-900">{ratingAvg}</div>
                        </div>
                        <div className="flex justify-center items-center flex-col text-center p-4 bg-gray-50 rounded-lg">
                            <img className="w-[40px] h-[40px]" src={reviewImage} />
                            <div className="text-sm text-gray-600">Reviews</div>
                            <div className="text-2xl font-bold text-gray-900">{reviews}</div>
                        </div>
                    </div>

                    <button
                        onClick={installer}
                        className={`w-full ${
                            alreadyInstalled ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        } text-white font-semibold py-3 px-6 rounded-lg transition duration-200`}
                        disabled={alreadyInstalled}
                    >
                        {alreadyInstalled ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </section>

            <Chart rateing={rateing} />
            <p className="mt-6 text-gray-700 leading-relaxed">{description}</p>
        </div>
    );
};

export default CardInfo;
