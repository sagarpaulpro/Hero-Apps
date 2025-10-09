import React from 'react';
import ErrorImage from '../../assets/error-404.png' 
const Error = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={ErrorImage}/>
            <h1>Oops, page not found!</h1>
            <p>The page you are looking fot is not available.</p>
            <button>Go Back!</button>
        </div>
    );
};

export default Error;