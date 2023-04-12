import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:flex lg:justify-between mx-10 my-3 justify-center items-center my-10">
      <div className="gap-36 lg:flex justify-center items-center">
        <div className="">
          <Link to="/">
            <h1 className="text-4xl font-bold">Job Solution</h1>
          </Link>
        </div>
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500" />
            )}
          </span>
        </div>
        <div
          className={`nav lg:flex gap-5  lg:static duration-500${
            open ? "left-36-10" : "left-56"
          }`}
        >
          <p>
            <ActiveLink to="/">Home</ActiveLink>
          </p>
          {/* <p><ActiveLink to='/jobDetails'>Job Details</ActiveLink></p> */}
          <p>
            <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
          </p>
          <p>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
          </p>
          <p>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </p>
        </div>
      </div>
      <div className="">
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded-lg text-white font-bold">          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
