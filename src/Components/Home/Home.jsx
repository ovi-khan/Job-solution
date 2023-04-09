import React from 'react';
import HeaderSaction from '../HeaderSaction/HeaderSaction';
import JobCatagoryList from '../JobCategoryLists/JobCatagoryLists';
import FaturedJobs from '../FaturedJobs/FaturedJobs';

const Home = () => {
    return (
        <div>
            <HeaderSaction></HeaderSaction> 
            <JobCatagoryList></JobCatagoryList> 
            <FaturedJobs></FaturedJobs>
        </div>
    );
};

export default Home;    