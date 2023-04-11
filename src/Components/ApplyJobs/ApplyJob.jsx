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
          <img className="w-24 object-cover" src={categoryLogo} alt="" />
          <div className="">
            <h2 className="text-2xl">{jobTitle}</h2>
            <p>{companyName}</p>
            <div>
              <button>Remote</button>
              <button>Full Time</button>
            </div>
            <p>
              {location}, {salary}
            </p>
          </div>
        </div>
        <div>
          {/* <Link> */}
          <Link
            to="/appliedjobs"
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
