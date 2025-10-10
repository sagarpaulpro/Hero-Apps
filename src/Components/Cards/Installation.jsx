import React, { useState } from 'react';
import star from '../../assets/star.png';
import downloadImage from '../../assets/download-logo.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Installation = () => {
    const saved = localStorage.getItem('cards');
    const initialApps = saved ? JSON.parse(saved) : [];
    const [installedApps, setInstalledApps] = useState(initialApps);
    const [sortType, setSortType] = useState('');
    const MySwal = withReactContent(Swal)

    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem('cards', JSON.stringify(updatedApps));
        MySwal.fire({
            title: "Uninstalled!",
            text: "You clicked the button!",
            icon: "success"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });


    };

    const handleSort = (type) => {
        let sorted = [...installedApps];
        if (type === 'name') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type === 'rating') {
            sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
        } else if (type === 'size') {
            sorted.sort((a, b) => b.size - a.size);
        }
        setInstalledApps(sorted);
        setSortType(type);
    };

    return (
        <div>
            <section className="bg-gray-50 min-h-screen py-10 px-3">
                <div className="max-w-2xl mx-auto rounded-lg bg-white p-6">
                    <h2 className="text-2xl font-bold text-center mb-1 text-black">Your Installed Apps</h2>
                    <p className="text-center text-sm text-gray-500 mb-6">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                    <div className="rounded">
                        <div className="flex flex-wrap justify-between items-center px-4 py-2 bg-gray-100">
                            <span className="font-medium text-black">{installedApps.length} Apps Found</span>

                            {/* Sort Dropdown */}
                            <select
                                onChange={(e) => handleSort(e.target.value)}
                                value={sortType}
                                className="rounded-sm text-black text-sm border border-gray-300  px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Sort By</option>
                                <option value="name">Name (A–Z)</option>
                                <option value="rating">Rating (High → Low)</option>
                                <option value="size">Size (Large → Small)</option>
                            </select>
                        </div>

                        {installedApps.length === 0 ? (
                            <div className="p-4 text-center text-black">No apps installed yet.</div>
                        ) : (
                            installedApps.map((app) => (
                                <div
                                    key={app.id}
                                    className="flex items-center justify-between px-4 py-5 shadow mb-3 rounded-sm hover:bg-gray-50"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                                            <img src={app.image} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-xl text-gray-800">{app.title}</div>
                                            <div className="flex gap-5 h-[19px]">
                                                <div className="flex gap-1 items-center">
                                                    <img src={downloadImage} className="w-[20px]" />
                                                    <span className="font-semibold text-[#00D390]">{app.downloads}</span>
                                                </div>
                                                <div className="flex gap-1 items-center">
                                                    <img src={star} className="w-[20px]" />
                                                    <span className="font-semibold text-[#FF8811]">{app.ratingAvg}</span>
                                                </div>
                                                <div className="flex gap-1 items-center">
                                                    <span className="font-semibold text-[#627382]">{app.size} MB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleUninstall(app.id)}
                                        className="bg-[#00D390] hover:scale-110 text-white text-sm font-semibold px-5 py-2 rounded transition-all duration-200"
                                    >
                                        Uninstall
                                    </button>
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
