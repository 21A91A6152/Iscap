import React from "react";
import img from"../assets/images/teaching.jpg";

const SkillsBanner = () => {
  return (
    <div className="  flex items-center justify-center py-6">
      <div className="bg-yellow-100 flex flex-col items-center md:flex-row max-w-6xl mx-auto px-6 py-4">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Learn & Level Up Your Skills
          </h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
            Select from a wide range of courses to upskill and advance your
            career!
          </p>
          <div className="flex mt-4 space-x-3">
            <div className="bg-yellow-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">50+ Courses</span>
            </div>
            <div className="bg-yellow-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Certificate</span>
            </div>
            <div className="bg-yellow-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">
                Projects & Assignments
              </span>
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500">
            Explore Courses
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:ml-8">
          <img
            src={img}
            alt="Skills Illustration"
            className="w-full md:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsBanner;
