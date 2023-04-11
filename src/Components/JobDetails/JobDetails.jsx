import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();
  const  { id }  = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    // if (jobData) {
      const jobData = details.find((jd) => jd.id === id);
      setJob(jobData);
    // }
  }, []);
  console.log(job);
  const {jobDescription, jobResponsibility, EducationRequirements, Experiences, companyName, categoryLogo, fullTimeOrPartTime, location, salary, remoteOrOnsite, phone, email} = job

  return (
    <div className="mx-10 mt-28 grid grid-cols-2 gap-10">
      <div className="">
      <p><span className="font-bold">JOb /description:</span> {jobDescription}</p>
      <p className="mt-5"><span className="font-bold">Job Responsibility:</span> {jobResponsibility}</p>
      <p className="mt-5"><span className="font-bold">Education Requirements:</span> </p>
      <p>{EducationRequirements}</p>
      <p className="mt-5 font-bold">Experiences: </p>
      <p>{Experiences}</p>
      </div>
      <div className="bg-red-200 p-5 w-64 rounded-lg">
        <h2 className="text-2xl">Job Details</h2>
        <hr className="mt-3 w-44" />
        <p className="mt-3"><span className="font-bold">Salary:</span> {salary}(Per Month)</p>
        <p className="mt-3"><span className="font-bold">Job Title:</span> Product Designer</p>
        <h2>Contact Information</h2>
        <hr className="mt-3 w-44" />
        <p className="mt-3"><span className="font-bold">Phone:</span> {phone}</p>
        <p className="mt-3"><span className="font-bold">Email:</span> {email}</p>
        <p className="mt-3"><span className="font-bold">Address:</span> {location}</p>
      <button className="mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
