import React from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const FaturedJobCard = ({ singleData }) => {
  // console.log(singleData);
  const {
    id,
    categoryLogo,
    companyName,
    jobTitle,
    location,
    salary,
    Experiences,
    remoteOrOnsite,
    fullTimeOrPartTime,
  } = singleData;
  // console.log(faturedJobData)
  return (
    <div className="border border-blue-600 rounded p-5">
      <img className="h-52 w-72 object-fill rounded-lg" src={categoryLogo} alt="" />
      <h2 className="text-2xl">{jobTitle}</h2>
      <p className="mt-2">{companyName}</p>
      <div className="flex gap-4 mb-2">
        <button className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-300 font-bold mt-3">
          {remoteOrOnsite}
        </button>
        <button className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-300 font-bold mt-3">
          {fullTimeOrPartTime}
        </button>
      </div>
      <p className="flex gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        {location},{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {salary}
      </p>
      <Link to={`/jobDetails/${id}`}>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold mt-3">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default FaturedJobCard;
