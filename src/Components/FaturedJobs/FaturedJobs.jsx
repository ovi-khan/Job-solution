import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FaturedJobCard from '../FaturedJobCard/FaturedJobCard';

const FaturedJobs = () => {
    const featuredJobData = useLoaderData()
    // const jobDetailsBtnHandler = (id) => {
    //     console.log(id)
    // }
     // console.log(featuredJobData)
    return (
        <div>
            <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold'>Fatured Job</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
            <div className='grid grid-cols-2 mt-10 mx-10 gap-5'>
            {
                featuredJobData.map(singleData => <FaturedJobCard 
                    key={singleData.id}
                    singleData = {singleData}
                    // jobDetailsBtnHandler={jobDetailsBtnHandler}
                ></FaturedJobCard>)
            }
            </div>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold mt-3">See More</button>
        </div>
    );
};

export default FaturedJobs;