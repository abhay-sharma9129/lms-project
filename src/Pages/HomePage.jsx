import React from "react";
import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import developer2 from "../assets/image/developer_2.png";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-2/3 space-y-6">
          <h1 className="text-5xl font-semibold border-red-100">
            Find out best
            <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large library of courses tought by highly skilled and
            qualified faculties at a very offeredable cost.
          </p>
          <div className="space-x-6">
            <Link to="/course">
              <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Explore Course
              </button>
            </Link>
            <Link to="/contact">
              <button className=" border box-border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center cursor-pointer">
          <img src={developer2} alt="Home Page" />
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
