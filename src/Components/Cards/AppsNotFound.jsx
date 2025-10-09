import React from 'react';
import AppsError from '../../assets/App-Error.png'
const AppsNotFound = () => {
    return (
        <div>
            <section className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6'>
                <div className='text-center max-w-md'>
                    <img
                        className='w-48 h-48 mx-auto mb-6'
                        src={AppsError}
                        alt="Not Found"
                    />
                    <h1 className='text-6xl font-bold text-gray-800 mb-4'>
                        NOT<br />FOUND
                    </h1>
                    <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
                        OPPS!! APP NOT FOUND
                    </h2>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                        The App you are requesting is not found on our system, please try another apps
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AppsNotFound;