import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import github from '../../assets/github.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <NavLink className={'mx-4'} to={'/'}><a className="btn btn-ghost text-xl text-purple-400"> <img className='w-9' src={logo} /> HERO.IO</a></NavLink>
                </div>
                <div className="navbar-center lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink className={'mx-4'} to={'/'}>Home</NavLink>
                        <NavLink className={'mx-4'} to={'/Apps'}>Apps</NavLink>
                        <NavLink className={'mx-4'} to={'/Installation'}>Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='py-2 px-4 rounded-sm bg-gradient-to-r to-purple-500 from-indigo-500 flex justify-center items-center gap-3 text-xl'><img src={github}/>Contribute</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;