import React, { useState } from 'react';
import star from '../../assets/star.png'
import downloadImage from '../../assets/download-logo.png'
const Installation = () => {

    const saved = localStorage.getItem('cards');
    const initialApps = saved ? JSON.parse(saved) : [];
    const [installedApps, setInstalledApps] = useState(initialApps);

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('cards', JSON.stringify(updatedApps));
    };

    return (
        <div>
            <section className="bg-gray-50 min-h-screen py-10 px-3">
                <div className="max-w-2xl mx-auto rounded-lg bg-white p-6">
                    <h2 className="text-2xl font-bold text-center mb-1">Your Installed Apps</h2>
                    <p className="text-center text-sm text-gray-500 mb-6">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                    <div className="rounded">
                        <div className="flex justify-between items-center px-4 py-2  bg-gray-100">
                            <span className="font-medium">{installedApps.length} Apps Found</span>
                            <button className="text-blue-600 text-sm hover:underline">Sort By New</button>
                        </div>

                        {installedApps.length === 0 ? ( <div className="p-4 text-center text-gray-500">No apps installed yet.</div> ) : (
                            installedApps.map((app) => (
                                <div key={app.id} className="flex items-center justify-between px-4 py-5 shadow mb-3 rounded-sm hover:bg-gray-50" >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                                                <img src={app.image} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xl text-gray-800">{app.title}</div>
                                            <div className='flex gap-5 h-[19px]'>
                                                <div className='flex gap-1'><img src={downloadImage} className='w-[20px]'/><span className='font-semibold'>{app.downloads}</span></div>
                                                <div className='flex gap-1 justify-center items-center'><img src={star} className='w-[20px]'/><span className='font-semibold'>{app.ratingAvg}</span></div>
                                                <div className='flex gap-1 justify-center items-center'><span className='font-semibold'>{app.size} MB</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        console.log(app)
                                    }
                                    <button onClick={() => handleUninstall(app.id)} className="bg-[#00D390] hover:scale-110 text-white text-sm font-semibold px-5 py-2 rounded">Uninstall</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Installation;
