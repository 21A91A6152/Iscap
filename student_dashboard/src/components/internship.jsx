import React from "react";
import img from"../assets/images/teaching.jpg";

const InternshipsBanner = () => {
  return (
    <div className="  flex items-center justify-center py-6">
      <div className="bg-blue-100 flex flex-col items-center md:flex-row max-w-6xl mx-auto px-6 py-4">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Boost Your Career with Internships
          </h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
            Explore top internship opportunities to gain real-world experience and skills!
          </p>
          <div className="flex mt-4 space-x-3">
            <div className="bg-blue-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Paid Internships</span>
            </div>
            <div className="bg-blue-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Flexible Hours</span>
            </div>
            <div className="bg-blue-300 rounded-md p-2">
              <span className="text-sm text-gray-700 font-medium">Real Projects</span>
            </div>
          </div>
          <button className="mt-6 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Explore Internships
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:ml-8">
          <img
            src={img}
            alt="Internship Opportunities"
            className="w-full md:w-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InternshipsBanner;
