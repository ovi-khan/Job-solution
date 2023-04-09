import React from 'react';
import img from './header.png'

const HeaderSaction = () => {
    return (
        <div className='flex mx-10 mt-32'>
            <div className='mt-40'>
                <h1 className='text-5xl font-bold'>One Step Closer To Your <span className='text-pink-500'>Dream Job</span></h1>
                <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold mt-4'>Get Started</button>
            </div>
            <div>
                <img className='' src={img} alt="" />
            </div>
        </div>
    );
};

export default HeaderSaction;