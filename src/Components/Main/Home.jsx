import React from 'react';

import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import { NavLink } from 'react-router';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section>
                <div>
                    <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
                    <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div>
                        <Cards count={8}></Cards>
                    </div>
                    <NavLink to={'/Apps'}><button className='px-4 py-2 bg-purple-600 rounded-sm hover:scale-110 transition-transform'>Show All</button></NavLink>
                </div>
            </section>
        </div>
    );
};

export default Home;