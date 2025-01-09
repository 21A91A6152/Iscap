import React from "react";
import img from "../assets/images/exam.jpg"
const AssessmentsHomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">
          Assess Your Skills
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Take assessments to evaluate your knowledge and track your growth.
        </p>
      </div>

      {/* Assessments Categories Section */}
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Assessment Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-100 flex items-center justify-center rounded-full">
            <img
              src={img}
              alt="Assessment Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-indigo-800 mt-4">
            Technical Skills
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Assess your technical knowledge in various domains.
          </p>
          <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500">
            Take Assessment
          </button>
        </div>

        {/* Assessment Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-teal-100 flex items-center justify-center rounded-full">
            <img
              src={img}
              alt="Assessment Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-teal-800 mt-4">
            Soft Skills
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Evaluate your communication, teamwork, and leadership skills.
          </p>
          <button className="mt-4 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500">
            Take Assessment
          </button>
        </div>

        {/* Assessment Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 flex items-center justify-center rounded-full">
            <img
              src={img}
              alt="Assessment Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-red-800 mt-4">
            Aptitude Tests
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Challenge yourself with logical reasoning and problem-solving.
          </p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500">
            Take Assessment
          </button>
        </div>

        {/* Assessment Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-100 flex items-center justify-center rounded-full">
            <img
              src={img}
              alt="Assessment Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-yellow-800 mt-4">
            Mock Interviews
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Prepare for real interviews with mock assessments.
          </p>
          <button className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
            Take Assessment
          </button>
        </div>

         {/* Assessment Card 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
            <img
              src={img}
              alt="Assessment Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mt-4">
            Domain Expertise
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Showcase your expertise in specific domains.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500">
            Take Assessment
          </button>
        </div>
        {/* Assessment Card 6 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
            <img
              src={img}
              alt="Assessment Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-green-800 mt-4">
            Coding
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Showcase your Problem solving skills and logical ability.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500">
            Take Assessment
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-700">
          Ready to assess yourself? Choose an assessment and get started!
        </p>
      </div>
    </div>
  );
};

export default AssessmentsHomePage;
