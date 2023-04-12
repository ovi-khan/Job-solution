import React from "react";
import { Link } from "react-router-dom";

const ApplyJob = ({ cartData }) => {
  const {
    id,
    categoryLogo,
    jobTitle,
    companyName,
    fullTimeOrPartTime,
    remoteOrOnsite,
    location,
    salary,
  } = cartData;
  console.log(cartData);
  return (
    <div className="mx-40 mt-10">
      <div className="flex justify-between justify-center items-center border border-red-400 p-5 rounded-lg">
        <div className="flex gap-10">
          <img className="w-24 object-fill rounded-lg" src={categoryLogo} alt="" />
          <div className="">
            <h2 className="text-2xl">{jobTitle}</h2>
            <p>{companyName}</p>
            <div className="gap-5 flex">
              <button className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-300 font-bold mt-3">
                {remoteOrOnsite}
              </button>
              <button className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-300 font-bold mt-3">
                {fullTimeOrPartTime}
              </button>
            </div>
            <div className="flex gap-5 mt-3">
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
            </div>
          </div>
        </div>
        <div>
          {/* <Link> */}
          <Link
            to="/jobDetails"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold"
          >
            View Details
          </Link>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
