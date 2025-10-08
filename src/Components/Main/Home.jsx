import React from 'react';
import playStore from '../../assets/play-store.png'
import appStore from '../../assets/appStore.png'
import hero from '../../assets/hero.png'
const Home = () => {
    return (
        <div>
            <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
                {/* Header Section */}
                <header className="text-center py-16 px-4 m-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className='text-black'>We Build </span><br />
                        <span className="text-purple-500">Productive</span> <span className='text-black'>Apps</span>
                    </h1>
                    <p className="text-gray-600  mx-auto mb-6">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="text-black font-semibold border border-gray-300 hover:bg-gray-100 px-6 py-2 rounded-lg transition flex items-center justify-center gap-3">
                            <img src={playStore} /> Google Play
                        </button>
                        <button className="bg-white border border-gray-300 text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-3">
                            <img src={appStore} />
                            App Store
                        </button>
                    </div>
                </header>
                <img src={hero} />
                <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 px-4 text-center w-full">
                    
                    <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
                        {/* Total Downloads */}
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold">29.6M</h3>
                            <p className="text-sm mt-1 opacity-90">21% More Than Last Month</p>
                            <p className="mt-3 text-lg font-medium opacity-95">Total Downloads</p>
                        </div>

                        {/* Total Reviews */}
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold">906K</h3>
                            <p className="text-sm mt-1 opacity-90">46% More Than Last Month</p>
                            <p className="mt-3 text-lg font-medium opacity-95">Total Reviews</p>
                        </div>

                        {/* Active Apps */}
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold">132+</h3>
                            <p className="text-sm mt-1 opacity-90">31 More Will Launch</p>
                            <p className="mt-3 text-lg font-medium opacity-95">Active Apps</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;