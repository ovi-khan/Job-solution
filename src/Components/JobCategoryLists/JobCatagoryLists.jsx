import React, { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";


const JobCatagoryLists = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("jobCategoryList.json")
      .then((res) => res.json())
      .then((jData) => setDatas(jData));
  }, []);

  return (
    <div className="mt-32">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Job Category List</h1>
        <p className="mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex gap-5 justify-around  mx-10 mt-10">
        {
            datas.map(data => <JobCategory
              key="data.id"
              data={data}
            ></JobCategory>)
        }
      </div>
    </div>
  );
};

export default JobCatagoryLists;
