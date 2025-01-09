import React from "react";

const MentorSupportHomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Mentor Support Center
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Connect with expert mentors for guidance and support.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chat with a Mentor */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full">
            <img
              src="path-to-chat-icon.png"
              alt="Chat Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-2xl font-semibold text-blue-800 mt-4">
            Chat with a Mentor
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Have quick conversations with mentors to resolve your doubts and
            gain insights.
          </p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500">
            Start Chat
          </button>
        </div>

        {/* One-to-One Meeting */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
            <img
              src="path-to-meeting-icon.png"
              alt="Meeting Icon"
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-2xl font-semibold text-green-800 mt-4">
            One-to-One Meeting
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Schedule a dedicated session with a mentor for personalized
            guidance.
          </p>
          <button className="mt-6 bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500">
            Schedule Meeting
          </button>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-700">
          Need help deciding the best option? Our mentors are here to assist you
          every step of the way!
        </p>
      </div>
    </div>
  );
};

export default MentorSupportHomePage;
