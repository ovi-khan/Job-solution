import React from "react";
import { useLoaderData } from "react-router-dom";
import ApplyJob from "../ApplyJobs/ApplyJob";

const AppliedJobs = () => {
  const { initialCart } = useLoaderData();
  console.log(initialCart);
  // const {id} = jobData.products
  return (
    <div className="mt-36">
      <div className=" mx-[80%] border border-blue-500 mb-5 px-3 py-2">
        <select className="" name="appliedJobs" id="appliedJobs">
          <option value="volvo">Remote</option>
          <option value="saab">Full Time</option>
        </select>
      </div>
      <div className="">
        {initialCart.map((cartData) => (
          <ApplyJob key={cartData.id} cartData={cartData}></ApplyJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
