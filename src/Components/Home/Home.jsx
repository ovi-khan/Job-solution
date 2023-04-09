import React from 'react';
import HeaderSaction from '../HeaderSaction/HeaderSaction';
import JobCatagoryList from '../JobCategoryLists/JobCatagoryLists';

const Home = () => {
    return (
        <div>
            <HeaderSaction></HeaderSaction> 
            <JobCatagoryList></JobCatagoryList> 
        </div>
    );
};

export default Home;    