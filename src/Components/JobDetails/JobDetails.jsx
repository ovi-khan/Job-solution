import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const id = useParams()
    const details = useLoaderData()
    const [jobData, setJobData] = useState({})

    // if(jobData) {
    // const findMathod = details.find(jd => jd.id === id)
    //     // if(jobdata) {
    //     // }
    //     setJobData(findMathod)
    //     console.log(id, jobData)
    // }
    useEffect(() => {
        const findMatod = details.find(jd => jd.id == id)
        setJobData(findMatod)
        // if(jobData) {
        // }
        console.log(jobData)
        // console.log(jobdata)
    } ,[])

    //  const dynamic = useParams()
    // // const details = useLoaderData()
    // const [jobdata, setJobData] = useState({})
    // useEffect(() => {
    //     fetch('/jobFeatures.json')
    //     .then(res => res.json())
    //     .then(data=> setJobData(data.JobDetailsId))
    //     const findMatod = jobdata.find(jd => jd.id === dynamic)
    //     setJobData(findMatod)
    //     // console.log(details)
    //     // console.log(findMatod)
    //     // console.log(jobdata)
    //     console.log(dynamic)
    //     console.log(jobdata)
    // } ,[dynamic])
    return (
        <div>
            <h1>Job details</h1>
        </div>
    );
};

export default JobDetails;