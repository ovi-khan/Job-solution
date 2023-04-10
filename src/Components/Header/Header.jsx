import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between mx-10 my-3 justify-center items-center'>
            <Link to='/'>
                <h1 className='text-4xl'>CareerHub</h1>
            </Link>
            <div className='text-2xl'>
                <NavLink className='me-5' to='/'>Home</NavLink>
                <NavLink className='me-5' to='/jobDetails'>Job Details</NavLink>
                <NavLink className='me-5' to='/statistics'>Statistics</NavLink>
                <NavLink className='me-5' to='/appliedJobs'>Applied Jobs</NavLink>
                <NavLink className='me-5' to='/blog'>Blog</NavLink>
            </div>
            <div>
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;