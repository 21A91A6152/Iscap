import React from "react";
import img from"../assets/images/cg.jpg";

const CareerGuidanceBanner = () => {
  return (
    <div className="  flex items-center justify-center py-6">
      <div className="bg-blue-100 flex flex-col items-center md:flex-row max-w-6xl mx-auto px-6 py-6">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Build Your Career with Expert Guidance
          </h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
            Get personalized advice, mentorship, and actionable plans to achieve your career goals.
          </p>
          <div className="flex mt-4 space-x-3">
            <div className="bg-blue-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Personalized Mentorship</span>
            </div>
            <div className="bg-blue-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Career Planning</span>
            </div>
            <div className="bg-blue-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Skill Development</span>
            </div>
          </div>
          <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500">
            Explore Career Guidance
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:ml-8">
          <img
            src={img}
            alt="Career Guidance"
            className="w-full md:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerGuidanceBanner;
