import React from 'react';

const Footer = () => {
    return (
       <div className='bg-black text-white p-5 mt-10'>
             <div className='mx-10 grid lg:grid-cols-5 gap-10 '>
            <div>
                <h2 className='text-3xl font-semibold'>Job Solution</h2>
                <p className='mt-2'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            </div>
            <div className='mt-2'>
                <h3 className='text-2xl font-semibold mb-2'>Company</h3>
                <p>About us</p>
                <p>work</p>
                <p>Latest News</p>
                <p>Careers</p>
            </div>
            <div className='mt-2'>
                <h3 className='text-2xl font-semibold mb-2'>Product</h3>
                <p>Prototype</p>
                <p>Plan & pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div className='mt-2'>
                <h3 className='text-2xl font-semibold mb-2'>Support</h3>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developors</p>
            </div>
            <div className='mt-2'>
                <h3 className='text-2xl font-semibold mb-2'>Contact</h3>
                <p>524, Broadway, NYC</p>
                <p>+545488 454 454</p>
            </div>
        </div>
        <hr className='mx-10 mt-5' />
        <div className='flex justify-between mx-10 mt-5'>
            <div>@2023 CareerHub. All Rights Reserved</div>
            <div>Powered by CareerHub</div>
        </div>
       </div>
    );
};

export default Footer;