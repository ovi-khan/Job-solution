import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJobs/ApplyJob';

const AppliedJobs = () => {
    const { initialCart } = useLoaderData()
    console.log(initialCart)
    // const {id} = jobData.products
    return (
        <div className='mt-36'>
            {
                initialCart.map(cartData => <ApplyJob
                    key={cartData.id}
                    cartData={cartData}
                ></ApplyJob>
                    )
            }
        </div>
    );
};

export default AppliedJobs;