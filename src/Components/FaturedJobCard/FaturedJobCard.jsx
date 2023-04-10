import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FaturedJobCard = ({ singleData, jobDetailsBtnHandler }) => {
  // console.log(singleData);
  const {
    id,
    categoryLogo,
    companyName,
    jobTitle,
    location,
    salary,
    Experiences,
  } = singleData;
  // console.log(faturedJobData)
  return (
    <div className="border border-blue-600 rounded p-5">
      <img src={categoryLogo} alt="" />
      <h2 className="text-2xl">{jobTitle}</h2>
      <p className="mt-2">{companyName}</p>
      <div className="flex gap-4 mb-2">
        <button className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-300 font-bold mt-3">
          ONsete
        </button>
        <button className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-300 font-bold mt-3">
          Full Time
        </button>
      </div>
      <p>
        {location}, {salary}
      </p>
      <Link to={`jobDetails/${id}`}>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold mt-3">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FaturedJobCard;
