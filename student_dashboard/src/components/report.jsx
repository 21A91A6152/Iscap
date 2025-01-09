import React from "react";
import resultsImage from "../assets/images/teaching.jpg"; // Import your image here

const UserResults = () => {
  return (
    <div className="bg-gray-100 min-h-[60vh] py-8"> {/* Adjusted height */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section: User Stats and Button */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800">Your Results</h2>
            <p className="text-lg text-gray-600 mt-2">
              Check out your current statistics, progress, and more!
            </p>

            {/* Display User Stats */}
            <div className="mt-6 text-gray-700">
              <div className="flex justify-between mt-4">
                <span className="text-sm">Assessment Score:</span>
                <span className="font-bold text-lg">85%</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-sm">Quiz Score:</span>
                <span className="font-bold text-lg">90%</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-sm">Courses Completed:</span>
                <span className="font-bold text-lg">75%</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-sm">Reward Points:</span>
                <span className="font-bold text-lg">500 Points</span>
              </div>
            </div>

            {/* Button to View More */}
            <div className="mt-6">
              <button
                onClick={() => alert("See Detailed Results clicked!")}
                className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
              >
                See Detailed Results
              </button>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="text-center md:text-right">
            <img
              src={resultsImage} // Replace with your image path
              alt="User Results"
              className="mx-auto rounded-lg shadow-lg max-w-xs sm:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserResults;
