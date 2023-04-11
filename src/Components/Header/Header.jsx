import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between mx-10 my-3 justify-center items-center'>
            <Link to='/'>
                <h1 className='text-4xl'>CareerHub</h1>
            </Link>
            <div className='nav'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/jobDetails'>Job Details</ActiveLink>
                <ActiveLink to='/appliedJobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <div>
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;