import React from 'react';

const JobCategory = ({data}) => {
    const {categoryLogo, categoryName, jobsAbilavil, id} = data
    // console.log(data)
    return (
        <div className='border border-teal-100 bg-slate-200 p-10 mt-5 rounded-lg'>
            <img className='w-24 h-24 object-cover' src={categoryLogo} alt="" />
            <h1 className='text-2xl mt-2'>{categoryName}</h1>
            <h1>{jobsAbilavil}+ Job Avilabil</h1>
        </div>
    );
};

export default JobCategory;